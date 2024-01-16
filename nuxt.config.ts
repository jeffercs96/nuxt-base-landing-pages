// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/html-validator",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    defaultLocale: "es",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
      },
      {
        code: "es",
        iso: "es-MX",
        file: "es-MX.json",
      },
    ],
    langDir: 'locales/',
    
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
