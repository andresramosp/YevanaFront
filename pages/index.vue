<template>
  <div>
    <MainCarousel />
    <section v-if="!$device.isMobile" class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span style="color: white; font-size: 25px">
                ALQUILA O COMPRA UNA DE NUESTRAS ROADSUITES Y
                <a
                  style="color: #ff891e; font-size: 25px"
                  href="/alquileres.html"
                  class="dropdown-toggle"
                >ESCÁPATE</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VehiclesGrid />
  </div>
</template>

<script>
import MainCarousel from "~/components/MainCarousel.vue";
import VehiclesGrid from "~/components/VehiclesGrid.vue";
export default {
  components: {
    MainCarousel,
    VehiclesGrid
  }
};
</script>

<style>
.mainContentSection, .blackSection {
    width: 100%;
    padding: 30px 0 30px 0;
    background-color: black;
    display: block;
}
</style>
