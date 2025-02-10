import { applyPlugins } from "#app";
import plugin from "tailwindcss";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ['@nuxt/icon', '@nuxtjs/color-mode', '@nuxthub/core'],

  postcss: {
    plugins: {
      tailwindcss: {}
    }
  },
  
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storage: 'cookie'
  },

  compatibilityDate: '2024-11-01'
})