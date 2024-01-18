// export default defineNuxtConfig({
//   tailwindcss: {
//     cssPath: "~/assets/css/tailwind.css",
//     configPath: "tailwind.config",
//     exposeConfig: true,
//     exposeLevel: 2,
//     config: {
//       /* Extend the Tailwind config here */
//       darkMode: "class",
//       content: [
//         "content/**/**.md",
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx}",
//       ],
//       theme: {
//         extend: {},
//       },
//       plugins: [],
//     },
//     injectPosition: "first",
//     viewer: true,
//   },
// });

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
