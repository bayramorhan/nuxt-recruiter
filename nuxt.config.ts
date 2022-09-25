import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode'],
    colorMode: {
        classSuffix: 'mode',
    },
    css: ["~/assets/css/tailwind.css", "swiper/css"],
    purgeCSS: {
        whitelist: ['dark-mode']
    },
    build: {
        transpile: ['@heroicons/vue', '@headlessui/vue'],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    }
})
