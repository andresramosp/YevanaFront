<template>
  <PostList />
</template>

<script>
import PostList from "~/components/blog/PostList.vue";
import State from "~/services/state";
export default {
  components: {
    PostList
  },
  mounted() {
    State.menuOpen = false;
    State.activePage = 'Blog';
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  },
  head () {
    return {
      title: 'Blog de Yevana CAMPER | Camperización y alquiler furgonetas Madrid',
      meta: [
        { hid: 'description-contact', name: 'description', content: 'Contacta con nosotros a través del 661 71 38 61, info@yevana.com o ven a visitarnos, ¡Estamos en Madrid! ' }
      ]
    }
  }
};
</script>

<style>

</style>
