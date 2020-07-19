<template>
  <div>
    <VehicleDetail :allExtras="allExtras" :vehicle="vehicle" :id="id" />
  </div>
</template>

<script>
import VehicleDetail from "~/components/furgoneta/VehicleDetail.vue";
import VehicleService from "~/services/vehicleService";
import ExtrasService from "~/services/extrasService";
import State from "~/services/state";
export default {
  components: {
    VehicleDetail
  },
  async asyncData({ params }) {
    const extrasResult = await ExtrasService.getAll();
    const vehicleResult = await VehicleService.getById(params.id);
    return {
      vehicle: vehicleResult,
      allExtras: extrasResult,
      id: params.id,
      showBookingPanel: false,
    };
  },
  created() {
    State.menuOpen = false;
    State.activePage = "Alquila";
    State.menuOpaque = true;
  },
  head() {
    return {
      title:
        "¡Alquila una furgoneta camper PREMIUM desde 60 €! | YEVANA | Madrid",
      meta: [
        {
          hid: "description-furgo",
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
</style>
