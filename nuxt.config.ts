// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    ssr: true,
    css: ['@/assets/css/main.css', '@/assets/css/fonts.css', '@/assets/css/hamburgers.css'],
    modules: [
        '@pinia/nuxt',
        ['@nuxtjs/tailwindcss',
            {
                mode: 'jit',
                config: {
                    theme: {
                        extend: {
                            colors: {
                                'olive': '#EBECE8'
                            },
                            screens: {
                                '3xl': '1800px'
                            }
                        }
                    },
                    safelist: [
                        '3xl:h-[401px]',
                        '2xl:h-[401px]',
                        'xl:h-[401px]',
                        'h-[401px]',
                        '3xl:w-[559px]',
                        '2xl:w-[559px]',
                        'xl:w-[559px]',
                        'w-[559px]',
                        'w-[415px]',
                        'h-[465px]',
                        'h-[276px]',
                        'w-[229px]',
                        'w-[334px]',
                        'h-[289px]',
                        'overflow-hidden'
                    ]
                }
            }
        ],
        'nuxt-swiper',
        ['@nuxtjs/device',
            {refreshOnResize: true}
        ]
    ]
})
