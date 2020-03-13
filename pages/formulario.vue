<template>
  <div>
    {{JSON.stringify(reserva)}}
  </div>
</template>

<script>
import State from "~/services/state";
export default {
  components: {
  },
  data() {
    return {
      reserva: State.get('reserva')
    }
  },
  mounted() {
    State.activePage = 'Alquila';
    State.menuOpaque = true;
  }
};
</script>

<style>
.page-bg {
  background-image: url("/img/alquileres/bg-alquileres.jpg");
}
</style>
