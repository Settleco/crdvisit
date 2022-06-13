import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@unocss/reset/tailwind.css'],
    modules: [
        '@unocss/nuxt',
      ],
      head: {
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {
            rel: 'stylesheet',
            href: 'http://fonts.cdnfonts.com/css/sf-pro-display'
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'
          }
        ],
    }
})