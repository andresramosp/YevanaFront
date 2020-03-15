<template>
  <div>
    <VehiclesList />
  </div>
</template>

<script>
import VehiclesList from "~/components/alquileres/VehiclesList.vue";
import State from "~/services/state";
export default {
  components: {
    VehiclesList
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
