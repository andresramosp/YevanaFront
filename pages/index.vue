<template>
  <div>
    <!-- <MainCarousel /> -->

    <div class="">
       <video autoplay muted loop id="clipHome">
          <source :src="`/video/CLIP_WEB_${$device.isMobile ? 'MOVIL' : 'PC'}1.mp4`" type="video/mp4" />
        </video>
    </div>

    <section class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span v-show="!$device.isMobile">
                ALQUILA O COMPRA UNA DE NUESTRAS ROADSUITES Y
                <nuxt-link to="/alquileres">ESCÁPATE</nuxt-link>
              </span>
              <span v-show="$device.isMobile">
                RESERVA UNA DE NUESTRAS ROADSUITES Y
                <nuxt-link to="/alquileres">ESCÁPATE</nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VehiclesGrid :vehicles="vehicles ? vehicles : []" />
    <section v-show="!$device.isMobile" class="promotionWrapper">
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
    <section class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span>
                <nuxt-link to="/alquileres">RESERVA </nuxt-link>SIN COMPROMISO TU VAN PARA ESTE VERANO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class>
        <video id="myVideo" controls width="100%" allow="autoplay" preload="auto" muted>
          <source
            src="https://www.dropbox.com/s/cd0fik8jbwdip80/videoHome.mp4?raw=1"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
    <section class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span>
                RECONQUISTA LA NATURALEZA DESDE TU
                <nuxt-link to="/alquileres">ROADSUITE</nuxt-link>
              </span>
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
import CustomerComments from "~/components/home/CustomerComments.vue";
import VehicleService from "~/services/vehicleService";
import State from "~/services/state";
import homeMixins from "~/mixins/homeMixin";
export default {
  components: {
    CustomerComments,
    MainCarousel,
    VehiclesGrid,
    SocialMedia
  },
  mixins: [homeMixins],
  async asyncData({ params }) {
    const vehiclesResult = await VehicleService.getAll();
    return {
      vehicles: vehiclesResult
    };
  },
  created() {
    State.menuOpen = false;
    State.menuOpaque = false;
    State.activePage = "Inicio";
  },
  head() {
    return {
      title:
        "YEVANA | Diseño, fabricación, alquiler y venta de furgonetas camper únicas | Madrid",
      meta: [
        {
          hid: "description-home",
          name: "description",
          content:
            "Diseño, fabricación, alquiler y venta de las furgonetas camper más exclusivas del mercado. Vans camperizadas a medida. Nos ajustamos a tu presupuesto. Estamos en Madrid. ¡Contáctanos!"
        }
      ]
    };
  }
};
</script>

<style scoped>

#clipHome {
  position: relative;
  right: 0;
  bottom: 0;
  width: 100%;
}

/* Add some content at the bottom of the video/page */
/* .content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
} */

video {
  display: block;
}
.mobile .container {
  padding: 0px;
  width: 90%;
}
.mobile .container video {
  padding-top: 20px;
  padding-bottom: 20px;
}
/* .promotionWrapper {
  height: 200px !important;
} */
</style>
