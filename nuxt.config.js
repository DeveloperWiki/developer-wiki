import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://rsms.me/inter/inter.css',
      },
    ],
  },
  css: ['tailwindcss/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  },
})
