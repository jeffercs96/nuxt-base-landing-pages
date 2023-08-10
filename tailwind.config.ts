export default defineNuxtConfig({
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true,
    exposeLevel: 2,
    config: {
      /* Extend the Tailwind config here */
      content: ["content/**/**.md"],
    },
    injectPosition: "first",
    viewer: true,
  },
});
