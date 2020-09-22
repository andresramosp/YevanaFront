<template>
  <div>
    <TopImageBar image="carretera" />
    <section class="mainContentSection">
      <div class="container">
        <h1 class="blog-title">
          NOTICIAS, CONSEJOS E INFORMACIÓN PRÁCTICA SOBRE EL MUNDO CAMPER Y LAS AUTOCARAVANAS
        </h1>
        <div v-for="post in posts" :key="post.id" class="row">
          <div class="col-xs-12">
            <div class="media blogPostListItem">
              <a class="media-left" href="#">
                <img class="media-object" :src="getImgUrlFromPost(post)" alt="blog-image" />
              </a>
              <div class="media-body">
                <h4>
                  <a href="javascript:void(0)" @click="goToPost(post.id)" class="blogTitle">{{post.title}}</a>
                </h4>
                <ul class="list-inline blogInfo">
                  <li>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <a href="#">{{post.author.displayName}}</a>
                  </li>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    {{new Date(post.published).toCustomString()}}
                  </li>
                </ul>
                <p style="text-align: justify">{{getPreviewTextFromPost(post)}}</p>
                <a @click="goToPost(post.id)" class="btn buttonTransparent">Seguir Leyendo</a>
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
import TopImageBar from "~/components/TopImageBar.vue";
import BlogService from "~/services/blogService";
export default {
  components: {
    TopImageBar
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.posts = await BlogService.getPosts();
    },
    getImgUrlFromPost(post) {
      const parser = new DOMParser();
      const html = parser.parseFromString(post.content, "text/html");
      const img = html.querySelector("img");
      return img.src;
    },
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
    goToPost(postId) {
      this.$router.push({
        path: `/post/${postId}`
      });
    }
  }
};
</script>
<style scoped>
.blog-title {
  color: black; 
  margin-bottom: 30px; 
  font-size: 19px; 
  font-weight: bold; 
  margin-left: 0px; 
  margin-right: 0px
}
</style>

