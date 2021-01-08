<template>
  <div>
     <section class="mainContentSection blogSidebar">
      <div class="container">
         <span v-if="landing" v-html="landing.content" />
      </div>
     </section>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import State from "~/services/state";
import TopImageBar from "~/components/TopImageBar.vue";
import BlogService from "~/services/blogService";
export default {
  components: {
    TopImageBar
  },
  data() {
    return {
      landing: null
    };
  },
  created() {
    this.getLanding();
    State.menuOpen = false;
    State.activePage = null;
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  },
  methods: {
    async getLanding() {
      let parts = $nuxt.$route.path.split('/');
      let path = parts[parts.length - 1];
      this.landing = await BlogService.getLandingPostByPartialPath(path);
    }
  },
  // head() {
  //   return {
  //     title: `${this.post.title} | Blog de Yevana Camper`,
  //     meta: [
  //       {
  //         hid: "description-furgo",
  //         name: "description",
  //         content:
  //           this.getPreviewTextFromPost(this.post)
  //       }
  //     ]
  //   };
  // }
};
</script>

<style scoped>
.blogSinglePost h2 {
  font-size: 25px !important;
}
</style>