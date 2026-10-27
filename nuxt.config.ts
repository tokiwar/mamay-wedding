// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: process.env.NUXT_APP_BASE_URL || '/mamay-wedding/',
        head: {
            link: [{rel: 'icon', type: 'image/svg+xml', href: `${process.env.NUXT_APP_BASE_URL || '/mamay-wedding/'}favicon.svg`}],
            meta: [{name: 'robots', content: 'noindex, follow'}, {name: 'description', content: 'Архив свадебного сайта Сергея и Кристины. 29 июля 2023 года.'}]
        }
    },
    // @ts-ignore
    ssr: false,
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
                        'sm:w-[27vw]',
                        'sm:h-[100%]',
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
