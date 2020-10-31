
export default {
  // router: {
  //   mode: 'hash'
  // },
  generate: {
    routes: [
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
      '/post/5638534278643358515'
    ]
  },
  loading: false, //'~/components/Loading.vue',
  env: {
    baseUrl:
      process.env.BASE_URL || 'https://yevana.com',
      // process.env.BASE_URL || 'http://localhost:49491'
    blogId: '2009247855473385443', //'8090363088623260794',
    blogKey: ' AIzaSyAeWsSP2dhWi4R2UzbhoXVsh4k6MRdYbew',
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'YEVANA | Alquiler, camperización y venta de furgonetas camper en Madrid.',
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
      { src: '/plugins/bootstrap/js/bootstrap.min.js', body: true },
      // { src: '/plugins/rs-plugin/js/jquery.themepunch.tools.min.js', body: true },
      // { src: '/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js', body: true },
      { src: '/plugins/isotope/isotope.min.js', body: true },
      { src: '/plugins/swipebox/jquery.swipebox.js', body: true },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon_.png' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700', body: true },
      { rel: 'stylesheet', href: '/plugins/bootstrap/css/bootstrap.min.css', body: true },
      { rel: 'stylesheet', href: '/plugins/font-awesome/css/font-awesome.min.css', body: true },
      // { rel: 'stylesheet', href: '/plugins/rs-plugin/css/settings.css', media: 'screen', body: true },
      { rel: 'stylesheet', href: '/plugins/isotope/jquery.fancybox.css', body: true },
      { rel: 'stylesheet', href: '/plugins/isotope/isotope.css', body: true },
      { rel: 'stylesheet', href: '/plugins/swipebox/swipebox.css', body: true },
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
      {defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'}
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
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
