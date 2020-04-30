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
  }
};
</script>

<style>
.page-bg {
  background-image: url("/img/alquileres/bg-alquileres.jpg");
}
</style>
