<template>
  <div>
    <VehiclesList v-if="vehicles.length > 0" :vehicles="vehicles" />
  </div>
</template>

<script>
import VehiclesList from "~/components/alquileres/VehiclesList.vue";
import State from "~/services/state";
import VehicleService from "~/services/vehicleService";
export default {
  components: {
    VehiclesList
  },
  data() {
    return {
      vehicles: null
    };
  },
  async asyncData({ params }) {
    const result = await VehicleService.getAll();
    return {
      vehicles: result
    };
  },
  created() {
    State.menuOpen = false;
    State.activePage = "Alquila";
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
    // this.$nextTick(async () => {
    //   if (process.client) {
    //     this.$nuxt.$loading.start();
    //     this.vehicles = await VehicleService.getAll();
    //     this.$nuxt.$loading.finish();
    //   }
    // });
  },
  transition: "default",
};
</script>

<style>
.page-bg {
  background-image: url("/img/alquileres/bg-alquileres.jpg");
}
</style>
