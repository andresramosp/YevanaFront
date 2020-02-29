<template>
  <div style="margin-top: 72px !important">
    <VehicleDetail :id="$route.params.id" />
  </div>
</template>

<script>
import VehicleDetail from "~/components/furgoneta/VehicleDetail.vue";
import State from "~/services/state";
export default {
  components: {
    VehicleDetail
  },
   mounted() {
    State.activePage = 'Alquila';
  }
};
</script>

<style>
</style>
