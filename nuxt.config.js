
export default {
  mode: 'universal',
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
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
// <script src="plugins/jquery-ui/jquery-ui.js"></script>
// <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
// <script src="plugins/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
// <script src="plugins/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
// <script src="plugins/selectbox/jquery.selectbox-0.1.3.min.js"></script>
// <script src="plugins/datepicker/bootstrap-datepicker.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
// <script src="plugins/counter-up/jquery.counterup.min.js"></script>
// <script src="plugins/isotope/isotope.min.js"></script>
// <script src="plugins/c"></script>
// <script src="plugins/isotope/isotope-triger.js"></script>
// <script src="plugins/countdown/jquery.syotimer.js"></script>
// <script src="js/custom.js"></script>
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js' },
      { src: 'plugins/jquery-ui/jquery-ui.js' },
      { src: 'plugins/bootstrap/js/bootstrap.min.js' },
      { src: 'plugins/rs-plugin/js/jquery.themepunch.tools.min.js' },
      { src: 'plugins/rs-plugin/js/jquery.themepunch.revolution.min.js' },
      { src: 'plugins/selectbox/jquery.selectbox-0.1.3.min.js' },
      { src: 'plugins/datepicker/bootstrap-datepicker.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js' },
      { src: 'plugins/counter-up/jquery.counterup.min.js' },
      { src: 'plugins/isotope/isotope.min.js' },
      { src: 'plugins/countdown/jquery.syotimer.js' },
      { src: '/custom.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
