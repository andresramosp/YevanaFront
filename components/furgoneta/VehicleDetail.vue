<template>
  <div>
    <!-- DESKTOP -->
    <div v-if="!$device.isMobile">
      <BookingImageBar />
      <div class="container">
        <section class="mainContentSection singlePackage">
          <BookingWizard />
          <div class="hotelTitle">
            <h2>{{'Emerald'}}</h2>
          </div>
          <div class="row">
            <div class="col-sm-8 col-xs-12">
              <div class="row">
                <div class="col-xs-12">
                  <VehicleCarousel :id="id" />
                  <div class="hotelDescription">
                    <div class="hotelTitle">
                      <h2>Descripción</h2>
                      <p
                        style="text-align: justify"
                      >Sublime elección de elementos que hacen de esta combinación un auténtico deseo adulto. Dentro de la Black Label podrás disfrutar de una exquisita tapicería de cuero crema, con encimeras de nogal y un panelado artesano en madera de roble que te harán sentir como en un traje hecho a medida por costureros de alta talla. Sin duda, su exterior negro y su interior color crema con maderas nobles la catalogan como la elegancia hecha camper. Ideal para escaparte con tu pareja, disfrutar de un festival e incluso un viaje de negocios, les dejarás helados. La suite cuenta con todas las comodidades, las paredes y el techo están perfectamente aislados y panelados para mantener tu confort. El habitáculo cuenta con la más alta tecnología, iluminación led táctil, calefacción estacionaria con regulador de temperatura, placa solar con inversor para conectar el ordenador a 220V, televisión led HD conectada a los altavoces del vehículo y entrada de USB para que puedas ver películas con sonido envolvente, nevera eléctrica, fregadero integrado, cocina de gas, toma rápida de agua para conectar una ducha exterior, múltiples armarios con luz interior y cierre autobloqueante. Los asientos traseros se convierten en una cómoda cama de 110 x 190 cm de color arena del caribe en tapicería extrasuave, además este modelo cuenta con techo sobre elevado para que puedas estar sentado en la cama cómodamente y moverte por la camper sin tocar el techo. Todos los elementos están perfectamente homologados y legalizados. Si te gusta escoger el vaso para tu licor favorito, sabrás disfrutar las sensaciones de viajar en una suite sobre ruedas.</p>
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
              <BookingPanel v-if="allExtras.length > 0" :vehicleId="id" :allExtras="allExtras" />
            </aside>
          </div>
        </section>
      </div>
    </div>
    <!-- MOBILE -->
    <div class="mobile" v-else>
      <section v-show="!showBookingPanel" class="mainContentSection singlePackage">
        <VehicleCarousel :id="id" />
        <div class="mobile-section">
          <h4>Descripción</h4>
          <p
            style="text-align: justify"
          >Una guerrera con mucha clase, equipada con la más alta tecnología para que disfrutes de tus festivales favoritos durante todo el año. Les dejarás flipando cuando te vean llegar con la auténtica Red Devil.</p>
          <VehicleFeatures
            v-if="vehicle"
            :vehicle="vehicle"
            :extras="allExtras.filter(ex => ex.GroupID == null)"
          />
          
        </div>
      </section>
      <BookingPanel
        v-if="allExtras.length > 0"
        :vehicleId="id"
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
import BookingImageBar from "./components/BookingImageBar.vue";
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

