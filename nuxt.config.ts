// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/html-validator", '@vueuse/nuxt',],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
});
