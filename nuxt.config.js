export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'accordion',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Work+Sans",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [

  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',

  ],

  styleResources: {
    scss: [
      '~/assets/style/variables.scss',
      '~/assets/style/mixins.scss',
      '~/assets/style/functions.scss'
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
 
  modules: [
    '@nuxtjs/svg-sprite',
  ],

    svgSprite: {
    // manipulate module options
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
