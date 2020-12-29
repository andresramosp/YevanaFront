

import BlogService from "./services/blogService";
import axios from 'axios'

let blogId = '2009247855473385443';
let blogKey = ' AIzaSyAeWsSP2dhWi4R2UzbhoXVsh4k6MRdYbew';

String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

export default {
  // router: {
  //   mode: 'hash'
  // },
  generate: {
    routes() {
      let webRoutes = [
        '/furgoneta-camper/EM',
        '/furgoneta-camper/RD',
        '/furgoneta-camper/BL',
        '/modelo/dokker',
        '/post/4381080862445630100',
        '/post/3519479694605154648',
        '/post/7987496031410243081',
        '/post/7133907318056571291',
        '/post/1352079496290084635',
        '/post/8002161982124026134',
        '/post/9072674918793369935',
        '/post/3774327612395101908',
        '/post/5638534278643358515',
        '/post/6102359653929218092',
        '/post/8870621897334720883',
        '/post/7631244907980995900'
      ]
      return axios.get(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/?key=${blogKey}`)
      .then(res => {
        let blogRoutes = res.data.items.map(post => {
          return '/post/' + BlogService.getPathFromPost(post)
        });
      return webRoutes.concat(blogRoutes);
      })
    },
    // routes: [
    //   '/furgoneta-camper/EM',
    //   '/furgoneta-camper/RD',
    //   '/furgoneta-camper/BL',
    //   '/modelo/dokker',
    //   '/post/4381080862445630100',
    //   '/post/3519479694605154648',
    //   '/post/7987496031410243081',
    //   '/post/7133907318056571291',
    //   '/post/1352079496290084635',
    //   '/post/8002161982124026134',
    //   '/post/9072674918793369935',
    //   '/post/3774327612395101908',
    //   '/post/5638534278643358515',
    //   '/post/6102359653929218092',
    //   '/post/8870621897334720883',
    //   '/post/7631244907980995900'
    // ]
  },
  loading: false, //'~/components/Loading.vue',
  env: {
    baseUrl:
      process.env.BASE_URL || 'https://yevana.com',
    // process.env.BASE_URL || 'http://localhost:49491',
    blogId: blogId, //'8090363088623260794',
    blogKey: blogKey,
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'YEVANA CAMPER | Alquiler, camperización y venta.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Yevana' },
      { name: 'publisher', content: 'Yevana' },
      { name: 'publisher-email', content: 'info@yevana.com' },
      { name: 'language', content: 'es' },
      { name: 'rating', content: 'general' },
      { name: 'distribution', content: 'global' },
      { name: 'audience', content: 'all' },
      { name: 'keywords', content: 'camper, van, alquiler furgonetas, furgonetas, yevana, madrid' },
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', body: true },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.swipebox/1.4.4/js/jquery.swipebox.min.js', body: true },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon_.png' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', body: true },
      { rel: 'stylesheet', href: '/plugins/font-awesome/css/font-awesome.min.css', body: true },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css', body: true },
      { rel: 'stylesheet', href: '/plugins/isotope/isotope.css', body: true },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.swipebox/1.4.4/css/swipebox.min.css', body: true },
      { rel: 'stylesheet', href: '/style.css', body: true },
      { rel: 'stylesheet', href: '/colors/default.css', id: 'option_color', body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-calendar.js', ssr: false },
    { src: '~/plugins/vue-toast.js', ssr: false },
    { src: '~/plugins/vue-modal.js', ssr: false },
    { src: '~/plugins/lazysizes.client.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/device',
      { defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36' }
    ],
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  }
}
