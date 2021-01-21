<template>
  <div>
    <script src="https://apps.elfsight.com/p/platform.js"></script>
    <section class="mainContentSection blogSidebar">
      <div>
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
    TopImageBar,
  },
  async asyncData() {
    return {
      landing: await BlogService.getLandingPostByCurrentPath($nuxt.$route.path),
    };
  },
  created() {
    State.menuOpen = false;
    State.activePage = null;
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  },
  methods: {
    getSnippetFromLanding(landing) {
      const parser = new DOMParser();
      const html = parser.parseFromString(landing.content, "text/html");
      const descEle = html.querySelector("#meta-desc");
      const titleEle = html.querySelector("#meta-title");
      return {
        desc: descEle ? descEle.value : 'YEVANA CAMPER | Alquiler, camperización y venta.',
        title: titleEle ? titleEle.value : 'YEVANA CAMPER | Alquiler, camperización y venta.',
      };
    },
  },
  head() {
    return {
      title: `${this.getSnippetFromLanding(this.landing).title}`,
      meta: [
        {
          hid: "description-landing",
          name: "description",
          content: this.getSnippetFromLanding(this.landing).desc,
        },
      ],
    };
  },
};
</script>

<style scoped>
.blogSinglePost h2 {
  font-size: 25px !important;
}
</style>