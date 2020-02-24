<template>
  <div style="margin-top: 95px !important">
    <section v-if="!$device.isMobile" class="pageTitle page-bg">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="titleTable">
              <div class="titleTableInner">
                <div class="pageTitleInfo">
                  <h1>Nuestra flota</h1>
                  <div class="under-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
