<template>
  <div class="main-wrapper">
    <Menu :opaque="State.menuOpaque" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Menu from "~/components/Menu.vue";
import Footer from "~/components/Footer.vue"
import State from "~/services/state"
export default {
  components: {
    Menu,
    Footer
  },
  data() {
    return {
      State
    }
  }
};
</script>

