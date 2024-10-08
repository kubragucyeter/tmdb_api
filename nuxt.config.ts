// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxtjs/color-mode', '@pinia/nuxt',],

  css : ['primeflex/primeflex.css'],
  runtimeConfig: {
    public: {
       tmdbApiKey : process.env.TMDB_API,
      tmdbToken :process.env.TMDB_TOKEN,
    }
  }
})
