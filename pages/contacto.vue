<template>
  <div>
    <Contacto />
  </div>
</template>

<script>
import Contacto from "~/components/contacto/Contacto.vue";
import State from "~/services/state";
export default {
  components: {
    Contacto
  },
  mounted() {
    State.menuOpen = false;
    State.activePage = 'Contacto';
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  },
  head () {
    return {
      title: 'Contacto Yevana CAMPER | Camperización, venta y alquiler de furgonetas camper en Madrid',
      meta: [
        { hid: 'description-contact', name: 'description', content: 'Contacta con nosotros a través del 661 71 38 61, info@yevana.com o ven a visitarnos, ¡Estamos en Madrid! ' }
      ]
    }
  }
};
</script>

<style>
.page-bg {
  background-image: url("/img/alquileres/bg-alquileres.jpg");
}
</style>
