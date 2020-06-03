
export default {
  // router: {
  //   mode: 'hash'
  // },
  generate: {
    routes: [
      '/furgoneta/EM',
      '/furgoneta/RD',
      '/furgoneta/BL'
    ]
  },
  loading: false, //'~/components/Loading.vue',
  env: {
    baseUrl:
      process.env.BASE_URL || 'https://yevana.com'
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'YEVANA | Diseño, fabricación, alquiler y venta de furgonetas camper únicas.',
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
      { name: 'keywords', content: 'camper, van, alquiler furgonetas, furgonetas, yevana' },
      // { name: 'robots', content: 'noindex' },
      // { name: 'googlebot', content: 'noindex' },
      { name: 'description', content: "Diseño, fabricación, alquiler y venta de las furgonetas camper más exclusivas del mercado. Vans camperizadas a medida. Nos ajustamos a tu presupuesto. ¡Contáctanos!" }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', body: true },
      { src: '/plugins/jquery-ui/jquery-ui.js', body: true },
      { src: '/plugins/bootstrap/js/bootstrap.min.js', body: true },
      { src: '/plugins/rs-plugin/js/jquery.themepunch.tools.min.js', body: true },
      { src: '/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js', body: true },
      { src: '/plugins/selectbox/jquery.selectbox-0.1.3.min.js', body: true },
      { src: '/plugins/datepicker/bootstrap-datepicker.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js', body: true },
      { src: '/plugins/counter-up/jquery.counterup.min.js', body: true },
      { src: '/plugins/isotope/isotope.min.js', body: true },
      { src: '/plugins/countdown/jquery.syotimer.js', body: true },
      { src: '/plugins/swipebox/jquery.swipebox.js', body: true },
      { src: '/custom.js', body: true },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png', body: true },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700', body: true },
      { rel: 'stylesheet', href: '/plugins/jquery-ui/jquery-ui.css', body: true },
      { rel: 'stylesheet', href: '/plugins/bootstrap/css/bootstrap.min.css', body: true },
      { rel: 'stylesheet', href: '/plugins/font-awesome/css/font-awesome.min.css', body: true },
      { rel: 'stylesheet', href: '/plugins/rs-plugin/css/settings.css', media: 'screen', body: true },
      { rel: 'stylesheet', href: '/plugins/selectbox/select_option1.css', body: true },
      { rel: 'stylesheet', href: '/plugins/datepicker/datepicker.css', body: true },
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
    'mdbvue/nuxt'
  ],
  mdbvue: {
    icons: false, // FA5
    roboto: false, // font Roboto
    css: false, // MDB CSS
    bootstrap: false // Bootstrap CSS
  },
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
