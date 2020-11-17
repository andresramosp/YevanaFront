<template>
  <div>
    <div v-if="!$device.isMobile" class="video-responsive">
      <iframe
        :src="`https://player.vimeo.com/video/${'463587846'}?autoplay=1&loop=1&autopause=0&muted=1`"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      >
      </iframe>
    </div>
    <div v-else class="video-responsive">
      <iframe
        :src="`https://player.vimeo.com/video/${'463587846'}?autoplay=1&loop=1&autopause=0&muted=1`"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      >
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
    <div class="loadWithScroll_" id="vehiclesGrid">
      <section class="whiteSection">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="sectionTitle" style="margin-bottom: 25px">
                <h2>
                  <span>PRUEBA NUESTRAS CAMPERS MÁS EXCLUSIVAS</span>
                </h2>
                <div>
                  Bienvenido a Yevana Camper. Aquí podrás descubrir las mejores
                  furgonetas camperizadas de Madrid. Somos especialistas en
                  diseño, fabricación, alquiler y venta de furgonetas camper.
                  Nuestro equipo de ingenieros y artesanos llevan años diseñando
                  las mejores experiencias camper para hacer de tu vida un
                  continuo viaje. Somos camperizadores profesionales y
                  disponemos de modelos camper de serie.
                  <nuxt-link to="/modelo/dokker">¡Descúbrelos!</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <VehiclesGrid v-if="vehiclesGridVisible" />
        </div>
      </section>
    </div>
    <section
      v-show="!$device.isMobile"
      class="promotionWrapper lazyload"
      data-bg="/img/home/homeParalax.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="promotionTable">
              <div class="promotionTableInner">
                <div class="promotionInfo">
                  <h2 style="color: #ffffffb5; margin: 0px">
                    Engineering Van Art
                  </h2>
                  <span
                    >Descubre la perfecta aleación de ingeniería y arte plasmada
                    en una furgoneta camper</span
                  >
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <PostList :preview="true" />
    </section>
    <section class="blackSection blackSectionGradient">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div style="text-align: center">
              <img
                class="lazyload logo-menu-home-separator"
                data-src="/img/logo.png"
                style="height: auto"
                alt="Logo de Yevana"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="loadWithScroll" percentVisible="-500" id="customerComments">
      <section class="whiteSection">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="sectionTitle" style="margin-bottom: 0px">
                <h2>
                  <span>QUÉ OPINAN NUESTROS VIAJEROS</span>
                </h2>
                <div>
                  No queremos contártelo, queremos que seas tú el que lo
                  descubra. Deja de soñar y emprende ya tu viaje en autocaravana
                  camper. Aquí te dejamos las opiniones y experiencias de otros
                  viajeros, aunque ya sabes... no es lo mismo vivirlo a que te
                  lo cuenten.
                </div>
              </div>
            </div>
          </div>
          <div v-if="customerCommentsVisible">
            <script
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></script>
            <div
              class="elfsight-app-00c90827-7dcb-4b11-be9c-308448fb88db"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VehiclesGrid from "~/components/home/VehiclesGrid.vue";
import PostList from "~/components/blog/PostList.vue";
import State from "~/services/state";
import homeMixins from "~/mixins/homeMixin";
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
export default {
  components: {
    VehiclesGrid,
    PostList,
  },
  mixins: [homeMixins],
  async asyncData({ params }) {
    return {
      vehiclesGridVisible: true,
      customerCommentsVisible: false,
    };
  },
  created() {
    State.menuOpen = false;
    State.menuOpaque = this.$device.isMobile;
    State.activePage = "Inicio";
  },
  head: {
    title:
      "YEVANA | Alquiler, camperización y venta de furgonetas camper en Madrid",
    meta: [
      {
        hid: "description-home",
        name: "description",
        content:
          "Diseño, camperización, alquiler y venta de furgonetas camper en Madrid. Camperizadores profesionales. Las camperizaciones más exclusivas y económicas del mercado. ¡Descubre nuestros modelos de autocaravanas camper de serie!",
      },
    ],
  },
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
