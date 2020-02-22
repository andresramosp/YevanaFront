<template>
  <div class="main-wrapper">
    <Menu />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Menu from "~/components/Menu.vue";
import Footer from "~/components/Footer.vue"
export default {
  components: {
    Menu,
    Footer
  }
};
</script>

