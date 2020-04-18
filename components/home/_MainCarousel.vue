<template>
  <div :class="`${$device.isMobile ? 'mobile' : 'desktop'}`">
    <mdb-carousel :items="items" :interval="5000" controlls></mdb-carousel>
  </div>

  
</template>
<script>
import { mdbCarousel } from "mdbvue";
export default {
  components: {
    mdbCarousel
  },
  data() {
    return {
      items: [
        // {
        //   img: true,
        //   src: require('~/assets/Vehiculos/Carrusel/furgoneta_yevana_carrusel_1.jpg')
        // },
        // {
        //   img: true,
        //   src: require('~/assets/Vehiculos/Carrusel/furgoneta_yevana_carrusel_2.jpg')
        // },
        // {
        //   img: true,
        //   src: require('~/assets/Vehiculos/Carrusel/furgoneta_yevana_carrusel_3.jpg')
        // }

        // {
        //     img: true,
        //     src:
        //       "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        //   },
        //   {
        //     img: true,
        //     src:
        //       "https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg"
        //   },
        //   {
        //     img: true,
        //     src:
        //       "https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
        //   }

        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
          mask: "black-light",
          alt: "First Slide",
          caption: {
            title: "First slide",
            text: "Caption's text (String)",
            animation: "Animation class - default: fadeIn (String)"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
          mask: "black-strong",
          caption: {
            title: "Second slide"
          }
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
          mask: "black-slight",
          caption: {
            title: "Third slide"
          }
        }
      ]
    };
  },
  mounted() {
    // $(".fullscreenbanner").revolution({
    //   delay: 5000,
    //   startwidth: 1170,
    //   startheight: 745,
    //   fullWidth: "on",
    //   fullScreen: "on",
    //   hideCaptionAtLimit: "",
    //   dottedOverlay: "twoxtwo",
    //   navigationStyle: "preview4",
    //   fullScreenOffsetContainer: "",
    //   hideTimerBar: "on"
    // });
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
<style>
.desktop .w-100 {
  width: 100% !important;
}
.mobile .d-block {
  transform: translate(-40%, 0%);
  height: 100vh;
}
/* .carousel-item.active, 
.carousel-item-next, 
.carousel-item-prev {
display: flex;
overflow: hidden;
height: 100vh;
} */
</style>



