<template>
  <div>
    <vue-modaltor
      v-show="seguroPopupVisible"
      :visible="true"
      @hide="seguroPopupVisible = false"
      :default-width="$device.isMobile ? '100%' : '30%'"
      :close-scroll="false"
      :bg-overlay="'#000000a3'"
      :bg-panel="'white'"
    >
      TIPOS DE SEGURO
      <SeguroTable />
      <p class="modal-note">
        <b>Nota importante</b>: La edad mínima del conductor debe ser de al menos 23 años con 2 años de carnet de conducir
      </p>
    </vue-modaltor>
    <!-- DESKTOP -->
    <div v-if="!$device.isMobile">
      <TopImageBar
        image="stars"
        title="Road Suite"
        text="¿Te gustaría dormir en un hotel de un millón de estrellas?"
      />
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
                      <h2 id="vehicle-desc-title">Descripción</h2>
                      <p id="vehicle-desc">{{vehicle.Descripcion}}</p>
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
                @clickSeguro="seguroPopupVisible = true"
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
        @clickSeguro="seguroPopupVisible = true"
      />
      <BookingFloatingButton v-show="!showBookingPanel" @onClick="showBookingPanel = true" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import BookingWizard from "~/components/BookingWizard.vue";
import TopImageBar from "~/components/TopImageBar.vue";
import VehicleCarousel from "./components/VehicleCarousel.vue";
import VehicleFeatures from "./components/VehicleFeatures.vue";
import BookingFloatingButton from "./components/BookingFloatingButton.vue";
import BookingPanel from "./components/BookingPanel.vue";
import SeguroTable from "~/components/furgoneta/components/SeguroTable.vue";
import State from "~/services/state";
export default {
  components: {
    BookingWizard,
    TopImageBar,
    VehicleCarousel,
    VehicleFeatures,
    BookingFloatingButton,
    BookingPanel,
    SeguroTable
  },
  data() {
    return {
      showBookingPanel: false,
      seguroPopupVisible: false
    };
  },
  watch: {
    showBookingPanel() {
      State.footerVisible = !this.showBookingPanel;
      State.menuVisible = !this.showBookingPanel;
    }
  },
  props: ["id", "vehicle", "allExtras"]
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
.modal-note {
   font-size: 12px;
   line-height: normal;
}
.modal-note b {
  color: orange;
}
#vehicle-desc {
  text-align: justify;
  font-size: 14.5px;
  line-height: 22px;
  color: #777;
}
#vehicle-desc-title, #vehicle-desc {
  text-indent: 30px;
}
</style>

