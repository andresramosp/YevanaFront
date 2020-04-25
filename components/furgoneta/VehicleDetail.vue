<template>
  <div>
    <!-- DESKTOP -->
    <div v-if="!$device.isMobile">
      <BookingImageBar />
      <div class="container">
        <section class="mainContentSection singlePackage">
          <BookingWizard step="1" />
          <div v-if="vehicle" class="hotelTitle">
            <h2>{{vehicle.Nombre}}</h2>
          </div>
          <div class="row">
            <div class="col-sm-8 col-xs-12">
              <div class="row">
                <div class="col-xs-12">
                  <VehicleCarousel :id="id" />
                  <div class="hotelDescription">
                    <div v-if="vehicle" class="hotelTitle">
                      <h2>Descripción</h2>
                      <p
                        style="text-align: justify"
                      >{{vehicle.Descripcion}} </p>
                    </div>
                  </div>
                  <VehicleFeatures
                    v-if="vehicle"
                    :vehicle="vehicle"
                    :extras="allExtras.filter(ex => ex.GroupID == null)"
                  />
                </div>
              </div>
            </div>
            <aside class="col-sm-4 col-xs-12">
              <BookingPanel 
                v-if="allExtras.length > 0 && vehicle"
                :vehicle="vehicle" 
                :allExtras="allExtras" />
            </aside>
          </div>
        </section>
      </div>
    </div>
    <!-- MOBILE -->
    <div class="mobile" v-else>
      <section v-show="!showBookingPanel" class="mainContentSection singlePackage">
        <VehicleCarousel :id="id" />
        <div v-if="vehicle" class="mobile-section">
          <h4>Descripción</h4>
          <p
            style="text-align: justify"
          >{{vehicle.DescripcionCorta}}</p>
          <VehicleFeatures
            v-if="vehicle"
            :vehicle="vehicle"
            :extras="allExtras.filter(ex => ex.GroupID == null)"
          />
          
        </div>
      </section>
      <BookingPanel
        v-if="allExtras.length > 0 && vehicle"
        :vehicle="vehicle"
        :allExtras="allExtras"
        v-show="showBookingPanel"
        @onClose="showBookingPanel = false"
      />
      <BookingFloatingButton v-show="!showBookingPanel" @onClick="showBookingPanel = true" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VehicleService from "~/services/VehicleService";
import ExtrasService from "~/services/ExtrasService";
import BookingWizard from "~/components/BookingWizard.vue";
import BookingImageBar from "~/components/BookingImageBar.vue";
import VehicleCarousel from "./components/VehicleCarousel.vue";
import VehicleFeatures from "./components/VehicleFeatures.vue";
import BookingFloatingButton from "./components/BookingFloatingButton.vue";
import BookingPanel from "./components/BookingPanel.vue";
import State from "~/services/state";
export default {
  components: {
    BookingWizard,
    BookingImageBar,
    VehicleCarousel,
    VehicleFeatures,
    BookingFloatingButton,
    BookingPanel
  },
  data() {
    return {
      vehicle: null,
      allExtras: [],
      showBookingPanel: false
    };
  },
  watch: {
    showBookingPanel() {
      State.footerVisible = !this.showBookingPanel;
      State.menuVisible = !this.showBookingPanel;
    }
  },
  props: ["id"],
  mounted() {
    this.getVehicle(this.id);
    this.getExtras();
  },
  methods: {
    async getVehicle(id) {
      this.vehicle = await VehicleService.getById(id);
    },
    async getExtras() {
      this.allExtras = await ExtrasService.getAll();
    }
  }
};
</script>
<style scoped>
.mobile .mainContentSection {
  padding: 0px;
}
.mobile .singlePackage .carousel {
  margin-bottom: 0px;
}
.mobile-section {
  padding: 15px;
}
.mobile-section p {
  line-height: 20px;
}
.mobile-section h4 {
  margin-bottom: 5px;
}
</style>

