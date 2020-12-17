<template>
  <div>
    <!-- DESKTOP -->
    <div v-if="!$device.isMobile">
      <TopImageBar
        image="stars"
        title="¿Te gustaría dormir en un hotel de un millón de estrellas?"
        text="Todas nuestras furgonetas están equipadas con la útima tecnología para que puedas recorrer cada rincón del planeta sintiéndote como en casa."
      />
      <div class="container">
        <section class="mainContentSection singlePackage">
          <div class="hotelTitle">
            <h2>Furgoneta - {{vehicle.Nombre}}</h2>
          </div>
          <div class="row">
            <div :class="`col-xs-12`">
              <div class="row">
                <div class="col-xs-12">
                  <VehicleCarousel :vehicle="vehicle" refId="web" />
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
                  <VehicleElfsightGallery :vehicle="vehicle" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- MOBILE -->
    <div class="mobile" v-else>
      <section v-show="!showBookingPanel" class="mainContentSection singlePackage">
        <VehicleCarousel :vehicle="vehicle" refId="mobile" />
          <div class="mobile-section">
          <h4>Descripción</h4>
          <p style="text-align: justify">{{vehicle.DescripcionCorta}}</p>
          <VehicleFeatures :vehicle="vehicle" :extras="allExtras.filter(ex => ex.GroupID == null)" />
        </div>
        <VehicleElfsightGallery :vehicle="vehicle" />
      </section>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import TopImageBar from "~/components/TopImageBar.vue";
import VehicleCarousel from "./components/VehicleCarousel.vue";
import VehicleElfsightGallery from "./components/VehicleElfsightGallery.vue";
import VehicleFeatures from "./components/VehicleFeatures.vue";
import State from "~/services/state";
export default {
  components: {
    TopImageBar,
    VehicleCarousel,
    VehicleElfsightGallery,
    VehicleFeatures,
  },
  data() {
    return {
      showBookingPanel: false,
      seguroPopupVisible: false,
      state: State,
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

