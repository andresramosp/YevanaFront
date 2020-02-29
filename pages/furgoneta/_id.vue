<template>
  <div style="margin-top: 72px !important">
    <VehicleDetail :id="$route.params.id" />
  </div>
</template>

<script>
import VehicleDetail from "~/components/alquileres/VehicleDetail.vue";
export default {
  components: {
    VehicleDetail
  }
};
</script>

<style>
</style>
