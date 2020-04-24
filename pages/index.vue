<template>
  <div>
     <!-- Start of Async Callbell Code -->
    <script>
        window.callbellSettings = {
            token: "vGXXkmEMu5BmGgrb6KvCqG5R"
        };
    </script>
    <script>
        (function () { var w = window; var ic = w.callbell; if (typeof ic === "function") { ic('reattach_activator'); ic('update', callbellSettings); } else { var d = document; var i = function () { i.c(arguments) }; i.q = []; i.c = function (args) { i.q.push(args) }; w.Callbell = i; var l = function () { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://dash.callbell.eu/include/' + window.callbellSettings.token + '.js'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); }; if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })()
    </script>
    <!-- End of Async Callbell Code -->
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
                  href="/alquileres"
                  class="dropdown-toggle"
                >ESCÁPATE</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VehiclesGrid />
    <section class="promotionWrapper">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="promotionTable">
              <div class="promotionTableInner">
                <div class="promotionInfo">
                  <h1 style="color: #ffffffb5">Engineering Van Art</h1>
                  <span>La belleza está en los detalles</span>
                  <br />
                  <br />
                  <!--<a href="javscript:void(0)" style="color: white" class="btn buttonTransparent">Personaliza tu VAN</a>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SocialMedia />
    <CustomerComments />
  </div>
</template>

<script>
import MainCarousel from "~/components/home/MainCarousel.vue";
import VehiclesGrid from "~/components/home/VehiclesGrid.vue";
import SocialMedia from "~/components/home/SocialMedia.vue";
import CustomerComments from "~/components/home/CustomerComments.vue"
import State from "~/services/state";
export default {
  components: {
    CustomerComments,
    MainCarousel,
    VehiclesGrid,
    SocialMedia
  },
  mounted() {
    State.menuOpaque = false;
    State.activePage = 'Inicio';
  }
};
</script>

<style scoped>
.mainContentSection,
.blackSection {
  width: 100%;
  padding: 30px 0 30px 0;
  background-color: black;
  display: block;
  position: relative;
  z-index: 10;
}
</style>
