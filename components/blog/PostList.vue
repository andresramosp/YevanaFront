<template>
  <div>
    <TopImageBar image="carretera" v-if="!preview" />
    <section class="mainContentSection" style="background-color: #f0f9f2">
      <div class="container">
        <h1 v-if="!preview" class="blog-title">
          NOTICIAS, CONSEJOS E INFORMACIÓN PRÁCTICA SOBRE EL MUNDO CAMPER Y LAS
          AUTOCARAVANAS
        </h1>
        <div v-else class="sectionTitle">
          <h2>
            <span style="background-color: #f0f9f2">BLOG de Yevana</span>
          </h2>
          <div>
            Echa un ojo a los últimos artículos de nuestro
            <nuxt-link :to="'/blog'" class="dropdown-toggle"
              >Blog.</nuxt-link
            >
            En él encontrarás noticias, consejos e información práctica sobre el mundo
            de las autocaravanas y las campers. 
          </div>
        </div>
        <div v-for="post in posts" :key="post.id" class="">
          <div :class="preview ? 'col-md-4 col-xs-12' : 'col-xs-12'">
            <div
              :class="`media blogPostListItem ${
                preview ? 'blogPostListItemPrev' : ''
              }`"
            >
              <a class="media-left" href="#">
                <img
                  :class="`lazyload media-object ${preview ? 'previewImg' : 'fullImg'}`"
                  :data-src="getImgUrlFromPost(post)"
                  alt="blog-image"
                />
              </a>
              <div class="media-body">
                <h4>
                  <a
                    href="javascript:void(0)"
                    @click="goToPost(post.id)"
                    class="blogTitle"
                    >{{ post.title }}</a
                  >
                </h4>
                <ul class="list-inline blogInfo">
                  <li>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <a href="#">{{ post.author.displayName }}</a>
                  </li>
                  <li>
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    {{ new Date(post.published).toCustomString() }}
                  </li>
                </ul>
                <p style="text-align: justify">
                  {{ getPreviewTextFromPost(post) }}
                </p>
                <!-- <a @click="goToPost(post.id)" class="btn buttonCustomPrimary"
                  >Seguir Leyendo</a
                > -->
                   <nuxt-link 
                    :to="`/post/${post.id}`" 
                    class="btn buttonTransparent btn-orange-solid">
                    Seguir Leyendo
                  </nuxt-link>
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
    TopImageBar,
  },
  data() {
    return {
      posts: [],
    };
  },
  props: ["preview"],
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      let result = await BlogService.getPosts();
      if (this.preview) result = result.slice(0, 3);
      this.posts = result;
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
      let text = "";
      for (var span of spans) {
        text += span.innerText;
      }
      return text.substring(0, !this.preview ? 350 : 200) + "...";
    },
    goToPost(postId) {
      this.$router.push({
        path: `/post/${postId}`,
      });
    },
  },
};
</script>
<style scoped>
.blog-title {
  color: black;
  margin-bottom: 30px;
  font-size: 19px;
  font-weight: bold;
  margin-left: 0px;
  margin-right: 0px;
}
.previewImg {
  height: 220px !important
}
.fullImg {
  width: 500px !important;
  height: 350px !important
}
</style>

