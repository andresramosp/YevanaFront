<template>
  <BookingForm />
</template>

<script>
import State from "~/services/state";
import BookingForm from "~/components/formulario/BookingForm";
export default {
  components: {
    BookingForm
  },
  mounted() {
    State.activePage = "Alquiler";
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  },
  head() {
    return {
      title:
        "¡Alquila una furgoneta camper PREMIUM desde 60 €! | YEVANA | Madrid",
      meta: [
        {
          hid: "description-formulario",
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
