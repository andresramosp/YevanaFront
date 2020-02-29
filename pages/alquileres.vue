<template>
  <div style="margin-top: 85px !important">
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
  }
};
</script>

<style>
.page-bg {
  background-image: url("/img/alquileres/bg-alquileres.jpg");
}
</style>
