<template>
  <div>
    <TopImageBar 
      image="tapiceria" 
      title="ALQUILER DE FURGONETAS CAMPER EN MADRID" 
      text="TODAS NUESTRAS CAMPER CUENTAN CON NUEVAS EXPERIENCIAS DE SERIE. <br /> VISÍTANOS EN NUETRAS INSTALACIONES DE MADRID." 
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
    State.activePage = "Alquiler";
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
        "Alquiler de furgonetas camper en Madrid | YEVANA",
      meta: [
        {
          hid: "description-alquileres",
          name: "description",
          content:
            "Alquiler de furgonetas camper en Madrid ✅ Mejores Precios desde 70€ ✅ Reserva online tu campervan ✅ Seguro a todo riesgo. ¡Alquila tu furgoneta camperizada!"
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
