<template>
  <div>
    <BookingImageBar v-if="!$device.isMobile" />
    <div class="main-wrapper container">
      <section class="mainContentSection singlePackage">
        <BookingWizard v-if="!$device.isMobile" />
        <div class="hotelTitle">
          <h2>{{'Emerald'}}</h2>
        </div>
        <div class="col-xs-12">
            <VehicleCarousel :id="id" />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import VehicleService from "~/services/VehicleService";
import BookingWizard from "./StaticBlocks/BookingWizard.vue";
import BookingImageBar from "./StaticBlocks/BookingImageBar.vue";
import VehicleCarousel from "./StaticBlocks/VehicleCarousel.vue";
export default {
  components: {
    BookingWizard,
    BookingImageBar,
    VehicleCarousel
  },
  data() {
    return {
      vehicle: { VehiculoID: 'EM'}
    };
  },
  props: ["id"],
  mounted() {},
  methods: {
    // async getVehicles() {
    //   this.vehicles = await VehicleService.getAll();
    // }
  }
};
</script>
<style scoped>
</style>

