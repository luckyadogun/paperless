require('dotenv').config();

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'paperless',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Abel&family=Abhaya+Libre:wght@700&family=Actor&family=Inter:wght@300;900&family=PT+Sans:wght@700&display=swap' },
    ],
    scripts: [
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/css/tailwind.css', 
],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['nuxt-fontawesome', {
            component: 'fa',
            imports: [
              {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['faDollarSign', 'faEye']
              }
            ]
          }]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  }
}
