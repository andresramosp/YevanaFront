<template>
  <div>
    <TopImageBar 
      image="tapiceria" 
      title="Compra una de nuestras Campers" 
      text="Todas nuestras Camper cuentan con nuevas experiencias de serie. <br /> Visítanos en nuestras instalaciones de Madrid." 
    />
    <VehiclesList 
      v-if="vehicles.length > 0" 
      :mode="'compra'"
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
    State.activePage = "Compra";
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  },
  head() {
    return {
      title:
        "YEVANA | Venta de furgonetas Camper en Madrid",
      meta: [
        {
          hid: "description-alquileres",
          name: "description",
          content:
            "Venta de furgonetas Camper en Madrid. Compra una de nuestras furgonetas camperizadas y vive una experiencia única. ✅"
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
