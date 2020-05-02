<template>
  <div>
    <MainCarousel />
    <section v-show="!$device.isMobile" class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span style="color: white; font-size: 25px">
                ALQUILA O COMPRA UNA DE NUESTRAS ROADSUITES Y
                <nuxt-link to="/alquileres">ESCÁPATE</nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VehiclesGrid :vehicles="vehicles ? vehicles : []" />
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
    <section v-show="!$device.isMobile" class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span style="color: white; font-size: 25px">
                VUELVE A DESCUBRIR LA NATURALEZA DESDE TU
                <nuxt-link to="/alquileres">ROADSUITE</nuxt-link>
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
            src="https://www.dropbox.com/s/d097rsqc5g5scwp/videoHome.mp4?raw=1"
            type="video/mp4"
          />
        </video>
        <!-- <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          width="100%"
          height="750px"
          type="text/html"
          src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
        >
        
        </iframe>-->
      </div>
    </section>
    <section v-show="!$device.isMobile" class="blackSection">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <span style="color: white; font-size: 25px">
                ALQUILA O COMPRA UNA DE NUESTRAS ROADSUITES Y
                <nuxt-link to="/alquileres">ESCÁPATE</nuxt-link>
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
export default {
  components: {
    CustomerComments,
    MainCarousel,
    VehiclesGrid,
    SocialMedia
  },
  data() {
    return {
      vehicles: []
    };
  },
  async asyncData({ params }) {
    const vehiclesResult = await VehicleService.getAll();
    return {
      vehicles: vehiclesResult
    };
  },
  mounted() {
    let video = document.querySelector("video");
    window.addEventListener("scroll", () => {
      if (this.isScrollIntoView(video, 50)) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  created() {
    State.menuOpen = false;
    State.menuOpaque = false;
    State.activePage = "Inicio";
    // this.$nextTick(async () => {
    //   if (process.client) {
    //     this.$nuxt.$loading.start();
    //     this.vehicles = await VehicleService.getAll();
    //     this.$nuxt.$loading.finish();
    //   }
    // });
  },
  methods: {
    isScrollIntoView(el, percentVisible) {
      let rect = el.getBoundingClientRect(),
        windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

      return !(
        Math.floor(
          100 - ((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100
        ) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
          percentVisible
      );
    }
  }
  //transition: "default",
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
</style>
