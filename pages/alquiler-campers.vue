<template>
  <div>
    <TopImageBar 
      image="tapiceria" 
      title="Alquila una de nuestras Campers" 
      text="Todas nuestras Camper cuentan con nuevas experiencias de serie. <br /> Visítanos en nuestro taller de Madrid." 
    />
     <VehiclesList 
      v-if="vehicles.length > 0" 
      :mode="'alquiler'"
      :vehicles="vehicles" 
    />
  </div>
</template>

<script>
import VehiclesList from "~/components/alquileres/VehiclesList.vue";
import TopImageBar from "~/components/TopImageBar.vue";
import State from "~/services/state";
import VehicleService from "~/services/vehicleService";
export default {
  components: {
    VehiclesList,
    TopImageBar
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
        "YEVANA | Alquiler furgonetas Camper en Madrid",
      meta: [
        {
          hid: "description-alquileres",
          name: "description",
          content:
            "Alquiler de furgonetas Camper en Madrid. Vive una experiencia única. ✅ Reserva online tus vacaciones. Seguro a todo riesgo. ¡Asesoramiento en tu escapada!"
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
