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
      vehicles: []
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
  head() {
    return {
      title:
        "¡Alquila una furgoneta camper PREMIUM desde 60 €! | YEVANA | Madrid",
      meta: [
        {
          hid: "description-alquileres",
          name: "description",
          content:
            "Viaja en una furgoneta camper Premium totalmente equipada. Asistencia, seguro a todo riesgo y numerosos extras disponibles para hacer tu escapada inolvidable."
        }
      ]
    };
  }
};
</script>

<style>
.page-bg {
  background-image: url("/img/alquileres/bg-alquileres.jpg");
}
</style>
