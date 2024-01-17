// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/html-validator",
    "@vueuse/nuxt",
    'nuxt-icon',
    "nuxt-headlessui",
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: ["~/assets/css/main.css"],
  headlessui: {
    prefix: "Headless",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
