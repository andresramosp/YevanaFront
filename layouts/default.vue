<template>
  <div class="main-wrapper">
    <Menu 
      v-show="State.menuVisible"
      :class="State.menuOpaque ? 'menu-opaque' : ''"
      :opaque="State.menuOpaque" 
      :activePage="State.activePage" />
    <nuxt />
    <Footer 
      v-show="State.footerVisible" />
  </div>
</template>
<style scoped>
.menu-opaque {
  margin-bottom: 72px !important
}
</style>
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

