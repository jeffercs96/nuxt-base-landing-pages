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
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}