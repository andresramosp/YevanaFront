<template>
  <div>
    <TopImageBar image="carretera" />
    <section class="mainContentSection blogSidebar">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-xs-12">
            <div class="thumbnail blogSinglePost">
              <div class="caption">
                <h2>{{post.title}}</h2>
                <ul class="list-inline blogInfo">
                  <li>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <a href="#">{{post.author.displayName}}</a>
                  </li>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>{{new Date(post.published).toCustomString()}}
                  </li>
                </ul>
                <span v-html="post.content" />
              </div>
              <!-- <div class="well" style="margin-top: 15px">
                <span>Share it</span>
                <ul class="list-inline">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
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
  async asyncData({ params }) {
    return {
      post: await BlogService.getPostByPath(params.id) || await BlogService.getPostById(params.id)
    };
  },
  created() {
    State.menuOpen = false;
    State.activePage = "Blog";
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  },
  methods: {
    getPreviewTextFromPost(post) {
      const parser = new DOMParser();
      const html = parser.parseFromString(post.content, "text/html");
      const spans = html.querySelectorAll("span");
      let text = ""
      for (var span of spans) {
        text += span.innerText;
      }
      return text.substring(0, 300) + "...";
    },
  },
  head() {
    return {
      title: `${this.post.title} | Blog de Yevana Camper`,
      meta: [
        {
          hid: "description-furgo",
          name: "description",
          content:
            this.getPreviewTextFromPost(this.post)
        }
      ]
    };
  }
};
</script>

<style scoped>
.blogSinglePost h2 {
  font-size: 25px !important;
}
</style>