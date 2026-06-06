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

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
      meta: [
        {
          name: "apple-mobile-web-app-title",
          content: "Damien",
        },
      ],
    },
  },
});
