<template>
  <div>
    <VehicleDetail v-if="vehicle && allExtras" :allExtras="allExtras" :vehicle="vehicle" :id="id" />
  </div>
</template>

<script>
import VehicleDetail from "~/components/furgoneta/VehicleDetail.vue";
import VehicleService from "~/services/VehicleService";
import ExtrasService from "~/services/ExtrasService";
import State from "~/services/state";
export default {
  components: {
    VehicleDetail
  },
  data() {
    return {
      vehicle: null,
      allExtras: [],
      showBookingPanel: false,
      id: this.$route.params.id
    };
  },
  async asyncData({ params }) {
    const extrasResult = await ExtrasService.getAll();
    const vehicleResult = await VehicleService.getById(params.id);
    return {
      vehicle: vehicleResult,
      allExtras: extrasResult,
      id: params.id
    };
  },
  created() {
    State.activePage = "Alquila";
    State.menuOpaque = true;
    this.$nextTick(async () => {
      if (process.client) {
        this.$nuxt.$loading.start();
        this.allExtras = await ExtrasService.getAll();
        this.vehicle = await VehicleService.getById(this.$route.params.id);
        this.$nuxt.$loading.finish();
      }
    });
  }
};
</script>

<style>
</style>
