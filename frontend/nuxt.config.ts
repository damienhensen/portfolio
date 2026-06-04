import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/icon"],
  devtools: { enabled: false },
  compatibilityDate: "2024-04-03",

  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["embla-carousel-vue"],
    },
  },

  fonts: {
    families: [
      {
        name: "Geist",
        weights: [400, 500, 600, 700],
      },
      {
        name: "Inter",
        weights: [400, 500, 600],
      },
    ],
  },
});
