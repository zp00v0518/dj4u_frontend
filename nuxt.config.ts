// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
import { fileURLToPath } from "url";
import { dirname } from "path";

const { resolve } = createResolver(dirname(fileURLToPath(import.meta.url)));

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/eslint", "@nuxt/image", "@vueuse/nuxt"],
  css: [
    "@/assets/styles/index.scss",
    "vue-final-modal/style.css",
    // "@/node_modules/vue-final-modal/dist/style.css",
    // "@/node_modules/vue-skeletor/dist/vue-skeletor.css",
  ],
  alias: {
    "@": resolve("./app"),
  },
  app: {
    head: {
      title: "DJ4U",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Martian+Mono&family=Roboto:wght@400;700&family=Rock+Salt&display=swap",
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/abstracts/_functions" as *;',
        },
      },
    },
  },
  proxy: {
    "/api": {
      changeOrigin: true,
      target: "http://localhost:4000",
    },
  },
});
