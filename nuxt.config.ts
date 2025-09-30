// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "lithor",
      link: [{ rel: "icon", type: "image/png", href: "/images/i.png" }],
      script: [
        { src: "/richtexteditor/js/rte.js" },
        { src: "/richtexteditor/js/all_plugins.js" },
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: ["/"], // Add any additional routes you want pre-rendered
    },
  },
  // For full static site generation
  ssr: false, // Set to true if you want SSR
});
