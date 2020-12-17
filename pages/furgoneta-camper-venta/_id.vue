<template>
  <div>
    <VehicleSellDetail :allExtras="allExtras" :vehicle="vehicle" :id="id" />
  </div>
</template>

<script>
import VehicleSellDetail from "~/components/furgoneta/VehicleSellDetail.vue";
import VehicleService from "~/services/vehicleService";
import ExtrasService from "~/services/extrasService";
import State from "~/services/state";
export default {
  components: {
    VehicleSellDetail
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
    State.activePage = "Venta";
    State.menuOpaque = true;
  },
  head() {
    return {
      title:
        "YEVANA | Alquiler furgonetas Camper en Madrid",
      meta: [
        {
          hid: "description-furgo",
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
</style>
