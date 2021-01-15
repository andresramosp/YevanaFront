<template>
  <div>
    <VehicleRentDetail :allExtras="allExtras" :vehicle="vehicle" :id="id" />
  </div>
</template>

<script>
import VehicleRentDetail from "~/components/furgoneta/VehicleRentDetail.vue";
import VehicleService from "~/services/vehicleService";
import ExtrasService from "~/services/extrasService";
import State from "~/services/state";
export default {
  components: {
    VehicleRentDetail
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
    State.activePage = "Alquiler";
    State.menuOpaque = true;
  },
  head() {
    return {
      title:
        `Furgoneta camper de alquiler | ${this.vehicle.Nombre}`,
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
