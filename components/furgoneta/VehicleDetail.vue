<template>
  <div>
    <!-- DESKTOP -->
    <div v-if="!$device.isMobile">
      <BookingImageBar />
      <div class="container">
        <section class="mainContentSection singlePackage">
          <BookingWizard step="1" />
          <div class="hotelTitle">
            <h2>{{vehicle.Nombre}}</h2>
          </div>
          <div class="row">
            <div class="col-sm-8 col-xs-12">
              <div class="row">
                <div class="col-xs-12">
                  <VehicleCarousel :id="id" refId="web" />
                  <div class="hotelDescription">
                    <div class="hotelTitle">
                      <h2>Descripción</h2>
                      <p style="text-align: justify">{{vehicle.Descripcion}}</p>
                    </div>
                  </div>
                  <VehicleFeatures
                    :vehicle="vehicle"
                    :extras="allExtras.filter(ex => ex.GroupID == null)"
                  />
                </div>
              </div>
            </div>
            <aside class="col-sm-4 col-xs-12" style="position: sticky; top: 110px">
              <BookingPanel
                v-if="allExtras.length > 0 && vehicle"
                :vehicle="vehicle"
                :allExtras="allExtras"
              />
            </aside>
          </div>
        </section>
      </div>
    </div>
    <!-- MOBILE -->
    <div class="mobile" v-else>
      <section v-show="!showBookingPanel" class="mainContentSection singlePackage">
        <VehicleCarousel :id="id" refId="mobile" />
        <div class="mobile-section">
          <h4>Descripción</h4>
          <p style="text-align: justify">{{vehicle.DescripcionCorta}}</p>
          <VehicleFeatures :vehicle="vehicle" :extras="allExtras.filter(ex => ex.GroupID == null)" />
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
      showBookingPanel: false
    };
  },
  watch: {
    showBookingPanel() {
      State.footerVisible = !this.showBookingPanel;
      State.menuVisible = !this.showBookingPanel;
    }
  },
  props: ["id", "vehicle", "allExtras"],
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

