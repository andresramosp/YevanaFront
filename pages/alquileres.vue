<template>
  <div style="margin-top: 85px !important">
    <VehiclesList />
  </div>
</template>

<script>
import VehiclesList from "~/components/alquileres/VehiclesList.vue";
export default {
  components: {
    VehiclesList
  }
};
</script>

<style>
.page-bg {
  background-image:url('/img/alquileres/bg-alquileres.jpg');
}
</style>
