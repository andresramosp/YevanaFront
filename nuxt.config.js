
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
  env: {
    baseUrl:
      process.env.BASE_URL || 'http://api.yevana.com'
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js' },
      { src: '/plugins/jquery-ui/jquery-ui.js' },
      { src: '/plugins/bootstrap/js/bootstrap.min.js' },
      { src: '/plugins/rs-plugin/js/jquery.themepunch.tools.min.js' },
      { src: '/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js' },
      { src: '/plugins/selectbox/jquery.selectbox-0.1.3.min.js' },
      { src: '/plugins/datepicker/bootstrap-datepicker.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js' },
      { src: '/plugins/counter-up/jquery.counterup.min.js' },
      { src: '/plugins/isotope/isotope.min.js' },
      { src: '/plugins/countdown/jquery.syotimer.js' },
      { src: '/custom.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700' },
      { rel: 'stylesheet', href: '/plugins/jquery-ui/jquery-ui.css' },
      { rel: 'stylesheet', href: '/plugins/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/plugins/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/plugins/rs-plugin/css/settings.css', media: 'screen' },
      { rel: 'stylesheet', href: '/plugins/selectbox/select_option1.css' },
      { rel: 'stylesheet', href: '/plugins/datepicker/datepicker.css' },
      { rel: 'stylesheet', href: '/plugins/isotope/jquery.fancybox.css' },
      { rel: 'stylesheet', href: '/plugins/isotope/isotope.css' },
      { rel: 'stylesheet', href: '/style.css' },
      { rel: 'stylesheet', href: '/colors/default.css', id: 'option_color' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  { src: '~/plugins/vue-calendar.js', ssr: false },
  { src: '~/plugins/vue-toast.js', ssr: false },
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
    ]
  ],
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
