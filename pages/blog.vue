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
      title: 'Blog de Yevana CAMPER | Noticias y consejos sobre el mundo camper y autocaravaning',
      meta: [
        { hid: 'description-blog', name: 'description', content: 'Artículos, noticias e información práctica sobre el mundo de las campers, minicampers, caravanas y autocaravanas' }
      ]
    }
  }
};
</script>

<style>

</style>
