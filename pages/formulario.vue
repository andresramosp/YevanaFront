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
  data() {
    return {
      reserva: State.get("reserva")
    };
  },
  mounted() {
    State.activePage = "Alquila";
    State.menuOpaque = true;
  }
};
</script>

<style>
.page-bg {
  background-image: url("/img/alquileres/bg-alquileres.jpg");
}
</style>
