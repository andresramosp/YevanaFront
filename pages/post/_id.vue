<template>
  <div>
    <TopImageBar image="carretera" />
    <section class="mainContentSection blogSidebar">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-xs-12">
            <div class="thumbnail blogSinglePost">
              <img src="img/blog/blog-single-01.jpg" alt="blog-single-image" />
              <div class="caption">
                <h2>{{post.title}}</h2>
                <ul class="list-inline blogInfo">
                  <li>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <a href="#">Adam Smith</a>
                  </li>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>Mar 20, 2016
                  </li>
                  <li>
                    <i class="fa fa-tags" aria-hidden="true"></i>Travel
                  </li>
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>8 com
                  </li>
                </ul>
                <span v-html="post.content" />
              </div>
              <div class="well" style="margin-top: 15px">
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
              </div>
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
      post: await BlogService.getPost(params.id)
    };
  },
  created() {
    State.menuOpen = false;
    State.activePage = "Blog";
    State.menuOpaque = true;
    State.footerVisible = true;
    State.menuVisible = true;
  },
  methods: {},
  head() {
    return {
      title: `Camperizaciones de serie YEVANA en Madrid | Furgonetas camper únicas en calidad y diseño | Modelo Dokker Minicamper`,
      meta: [
        {
          hid: "description-furgo",
          name: "description",
          content:
            "YEVANA camper desarrolla modelos de furgonetas camperizadas de serie únicas en el mercado del caravaning. Nuestra filosofía se basa en combinar la precisión de la ingeniería con la delicadeza del trabajo artesano y un cuidado diseño para ofrecerte la motorhome de tus sueños"
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