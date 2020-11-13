<template>
  <div>
    <!-- <MainCarousel /> -->

    <!-- <div class="">
       <video playsinline autoplay muted loop id="clipHome">
          <source :src="`/video/CLIP_WEB_${$device.isMobile ? 'MOVIL' : 'PC'}1.mp4`" type="video/mp4" />
        </video>
    </div> -->
    <div v-if="!$device.isMobile" class="video-responsive">
          <iframe 
            :src="`https://player.vimeo.com/video/${'463587846'}?autoplay=1&loop=1&autopause=0&muted=1`" 
            width="640" height="360" 
            frameborder="0" 
            allow="autoplay; fullscreen" 
            allowfullscreen>
          </iframe>
    </div>
    <div v-else class="video-responsive">
        
           <iframe 
            :src="`https://player.vimeo.com/video/${'463587846'}?autoplay=1&loop=1&autopause=0&muted=1`" 
            width="640" height="360" 
            frameborder="0" 
            allow="autoplay; fullscreen" 
            allowfullscreen>
          </iframe>
        

    </div>


    <section class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <h1>
                 <nuxt-link to="/alquiler-campers">ALQUILER</nuxt-link>
                  Y <nuxt-link to="/modelo/dokker">VENTA</nuxt-link> 
                  DE FURGONETAS CAMPER EN MADRID
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VehiclesGrid :vehicles="vehicles ? vehicles : []" />
      <!-- <section class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 style="text-align: center">
              <span>
                <nuxt-link to="/alquiler-campers">ALQUILA </nuxt-link>SIN COMPROMISO TU CAMPER PARA ESTE OTOÑO-INVIERNO
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section> -->
    <section v-show="!$device.isMobile" class="promotionWrapper">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="promotionTable">
              <div class="promotionTableInner">
                <div class="promotionInfo">
                  <h2 style="color: #ffffffb5; margin: 0px">Engineering Van Art</h2>
                  <span>Descubre la perfecta aleación de ingeniería y arte plasmada en una furgoneta camper</span>
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
    <section>
      <PostList :preview="true" />
      <!-- <div class>
        <video id="myVideo" controls width="100%" allow="autoplay" preload="auto" muted class="autoPlay">
          <source
            src="https://www.dropbox.com/s/cd0fik8jbwdip80/videoHome.mp4?raw=1"
            type="video/mp4"
          />
        </video>
      </div> -->
    </section>
    <section class="blackSection blackSectionGradient">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <!-- <span>
                RECONQUISTA LA NATURALEZA DESDE TU
                <nuxt-link to="/alquiler-campers">CAMPER VAN</nuxt-link>
              </span> -->
              <img class="logo-menu-home-separator" src="/img/logo.png" style="height: auto" alt="Logo de Yevana" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <SocialMedia /> -->
    <CustomerComments />
  </div>
</template>

<script>
import MainCarousel from "~/components/home/MainCarousel.vue";
import VehiclesGrid from "~/components/home/VehiclesGrid.vue";
// import SocialMedia from "~/components/home/SocialMedia.vue";
import PostList from "~/components/blog/PostList.vue";
import CustomerComments from "~/components/home/CustomerComments.vue";
import VehicleService from "~/services/vehicleService";
import State from "~/services/state";
import homeMixins from "~/mixins/homeMixin";
export default {
  components: {
    CustomerComments,
    MainCarousel,
    VehiclesGrid,
    PostList,
    // SocialMedia
  },
  mixins: [homeMixins],
  async asyncData({ params }) {
    const vehiclesResult = []; // await VehicleService.getAll();
    return {
      vehicles: vehiclesResult,
      // width: window.outerWidth,
      // height: window.outerHeight,
    };
  },
  created() {
    State.menuOpen = false;
    State.menuOpaque = this.$device.isMobile;
    State.activePage = "Inicio";
  },
  head() {
    return {
      title:
        "YEVANA | Alquiler, camperización y venta de furgonetas camper en Madrid",
      meta: [
        {
          hid: "description-home",
          name: "description",
          content:
            "Diseño, camperización, alquiler y venta de furgonetas camper en Madrid. Camperizadores profesionales. Las camperizaciones más exclusivas del mercado. ¡Descubre nuestros modelos de autocaravanas camper de serie!"
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
