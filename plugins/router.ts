export default defineNuxtPlugin(({$router}) => {
    // @ts-ignore
    $router.options.scrollBehavior = (to: { hash: any }, from: any, savedPosition: any) => {
        if (to.hash) {
            return {
                el: to.hash,
                top: 150,
                behavior: 'smooth'
            }
        }
    }
});