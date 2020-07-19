<template>
  <div >
    <TopImageBar image="carretera"  />
        <section class="mainContentSection">
      <div class="container">

        <div v-for="post in posts" :key="post.id" class="row">
          <div class="col-xs-12">
            <div class="media blogPostListItem">
              <a class="media-left" href="#">
                <img class="media-object" :src="getImgUrlFromPost(post)" alt="blog-image">
              </a>
              <div class="media-body">
                <h4><a  href="#" class="blogTitle">{{post.title}}</a></h4>
                <ul class="list-inline blogInfo">
                  <li><i class="fa fa-user" aria-hidden="true"></i><a href="#">{{post.author.displayName}}</a></li>
                  <li><i class="fa fa-calendar" aria-hidden="true"></i>{{new Date(post.published).toCustomString()}}</li>
                </ul>
                <p>{{getPreviewTextFromPost(post)}}</p>
                <a href="#" class="btn buttonTransparent">Seguir Leyendo</a>
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
      const html = parser.parseFromString(post.content, 'text/html');
      const img = html.querySelector('img');
      return img.src;
    },
    getPreviewTextFromPost(post) {
      const parser = new DOMParser();
      const html = parser.parseFromString(post.content, 'text/html');
      const img = html.querySelector('span');
      return img.innerText.substring(0, 300) + "...";
    }
  }
};
</script>
<style scoped>
</style>

