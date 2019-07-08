module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'}
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },


  auth: {
      login: '/login',
      logout: '/',
      strategies: {
        local: {
          endpoints: {
            login: {url: '/login', method: 'post', propertyName: 'success.token'},
            logout: {url: '/logout', method: 'post'},
            user: {url: '/details', method: 'get', propertyName: 'user'},
          },
          tokenRequired: true,
          tokenType: 'Bearer',
        },
      }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

