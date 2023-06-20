import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        menuOpened: false,
        overflowClass: ''
    }),
    actions: {
        openMenu() {
            this.menuOpened = true;
        },
        closeMenu() {
            this.menuOpened = false;
        },
        toggleOverflowOn() {
            this.overflowClass = 'overflow-hidden';
        },
        toggleOverflowOff() {
            this.overflowClass = '';
        }
    },
})