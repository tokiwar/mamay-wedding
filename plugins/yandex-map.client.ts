import plugin from 'vue-yandex-maps'
const settings = {
    apiKey: 'e90b6f41-a00d-4348-a9a5-32c6452af8d1',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
};
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(plugin, settings)
});