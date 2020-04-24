<template>
  <div>
    <BookingConfirmation />
  </div>
</template>

<script>
import BookingConfirmation from "~/components/confirmacion/BookingConfirmation.vue";
import State from "~/services/state";
export default {
  components: {
    BookingConfirmation
  },
  mounted() {
    State.activePage = 'Alquila';
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  }
};
</script>

<style>
.page-bg {
  background-image: url("/img/alquileres/bg-alquileres.jpg");
}
</style>
