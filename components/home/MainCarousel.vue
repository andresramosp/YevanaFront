<template>
  <section class="bannercontainer">
    <div class="fullscreenbanner-container">
      <div class="fullscreenbanner carousel-image">
        <ul>
          <li
            data-transition="fade"
            data-slotamount="5"
            data-masterspeed="1000"
            data-title="Slide 1"
          >
          <!-- <div class="carousel-image"> -->
            <img
              :src="'/img/vehiculos/Carrusel/furgoneta_yevana_carrusel_1.jpg'"
              alt="Furgoneta Yevana en el campo"
              data-bgfit="cover"
              data-bgposition="center center"
              data-bgrepeat="no-repeat"
            />
          <!-- </div> -->
          
            <div class="slider-caption container">
              <div
                class="tp-caption rs-caption-1 sft start text-center"
                data-hoffset="0"
                data-x="center"
                data-y="230"
                data-speed="800"
                data-start="1000"
                data-easing="Back.easeInOut"
                data-endspeed="300"
              >
                <span style="margin-bottom: 20px">CAMPERVAN HIRE</span>
                Vive tu experiencia camper
              </div>

              <div
                class="tp-caption rs-caption-3 sft text-center"
                data-hoffset="0"
                :data-y="getDataY(630, 550)"
                data-x="center"
                data-speed="800"
                data-start="2000"
                data-easing="Power4.easeOut"
                data-endspeed="300"
                data-endeasing="Power1.easeIn"
                data-captionhidden="off"
              >
                <span class="page-scroll" style="margin-right: 20px">
                   <nuxt-link :to="'/alquileres'" class="btn buttonTransparent" style="color: white">Escapa YA!</nuxt-link>
                </span>
              </div>
            </div>
          </li>
          <li
            data-transition="fade"
            data-slotamount="5"
            data-masterspeed="700"
            data-title="Slide 1"
          >
           <!-- <div class="carousel-image"> -->
            <img
              :src="'/img/vehiculos/Carrusel/furgoneta_yevana_carrusel_2.jpg'"
              alt="Detalle del interior de una furgo de Yevana"
              data-bgfit="cover"
              data-bgposition="center center"
              data-bgrepeat="no-repeat"
            />
            <!-- </div> -->
        
            <div class="slider-caption container">
              <div
                :class="getCaptionClass('tp-caption rs-caption-1 sft start text-left' , 'tp-caption rs-caption-1 sft start text-center')"
                data-hoffset="0"
                data-x="center"
                data-y="270"
                data-speed="800"
                data-start="1000"
                data-easing="Back.easeInOut"
                data-endspeed="300"
              >
                <span
                  style="font-size: 18px !important;"
                >La comodidad de una suite, la libertad de una camper</span>
                <span>Road Suite</span>
              </div>

              <div
                :class="getCaptionClass('tp-caption rs-caption-1 sft start text-left' , 'tp-caption rs-caption-1 sft start text-center')"
                data-hoffset="0"
                data-x="center"
                :data-y="getDataY(485, 600)"
                data-speed="800"
                data-start="2000"
                data-easing="Power4.easeOut"
                data-endspeed="300"
                data-endeasing="Power1.easeIn"
                data-captionhidden="off"
              >
                <span class="page-scroll">
                  <nuxt-link :to="'/alquileres'" class="btn buttonTransparent" style="color: white">Alquílala</nuxt-link>
                </span>
              </div>
            </div>
          </li>
          <li
            data-transition="fade"
            data-slotamount="5"
            data-masterspeed="1000"
            data-title="Slide 2"
          >
            <!-- <div class="carousel-image"> -->
            <img
              :src="'/img/vehiculos/Carrusel/furgoneta_yevana_carrusel_3.jpg'"
              alt="Detalle del interior de una furgo de Yevana"
              data-bgfit="cover"
              data-bgposition="center center"
              data-bgrepeat="no-repeat"
            />
            <!-- </div> -->
      
            <div class="slider-caption container">
              <div
                :class="`tp-caption rs-caption-1 sft start ${$device.isMobile ? 'text-center' : 'text-left'}`"
                data-hoffset="0"
                data-x="left"
                data-y="270"
                data-speed="800"
                data-start="1000"
                data-easing="Back.easeInOut"
                data-endspeed="300"
              >
                Detalles que marcan la diferencia
                <span style="margin-top: 0px">Quality & Safe</span>
              </div>

              <div
                :class="`tp-caption rs-caption-3 sft ${$device.isMobile ? 'text-center' : 'text-left'}`"
                data-hoffset="0"
                data-x="left"
                :data-y="getDataY(485, 550)"
                data-speed="800"
                data-start="2000"
                data-easing="Power4.easeOut"
                data-endspeed="300"
                data-endeasing="Power1.easeIn"
                data-captionhidden="off"
              >
                <span class="page-scroll">
                  <nuxt-link :to="'/alquileres'" class="btn buttonTransparent" style="color: white">Escapa YA!</nuxt-link>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  mounted() {
    $(".fullscreenbanner").revolution({
      delay: 3000,
      startwidth: 1170,
      startheight: 745,
      fullWidth: "on",
      fullScreen: "on",
      hideCaptionAtLimit: "",
      // dottedOverlay: "twoxtwo",
      navigationStyle: "none",
      fullScreenOffsetContainer: "",
      hideTimerBar: "on",
      navigationArrows: 'none',
      parallax:"on",
    });
  },
  methods: {
    getCaptionClass(desktop, mobile) {
      return !this.$device.isMobile ? desktop : mobile;
    },
    getDataY(desktop, mobile) {
      return !this.$device.isMobile ? desktop : mobile;
    }
  }
};
</script>
<style scoped>
/* .desktop .carousel-image {
  animation-name: zoomin;
  animation-duration: 17s;
  animation-fill-mode: forwards;
}

@keyframes zoomin {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    100% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

} */
/* .fullscreenbanner {
  z-index: -1;
} */
</style>



