<template>
  <div class="flex flex-row space-x-[4.5vw] uppercase 2xl:text-[30px] sm:text-[2vw]" v-if="$device.isDesktop">
    <nuxt-link class="hover:underline decoration-[#6F8079]" v-for="item in menu" :key="item.key" :to="{path:item.link, hash:item.hash}">
      {{ item.text }}
    </nuxt-link>
  </div>
  <div class="absolute w-full text-end" v-else>
    <button class="hamburger hamburger--spin right-0" :class="{'is-active': opened}" type="button"
            @click.prevent="close">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
    </button>
    <transition name="fade">
      <div class="flex w-full absolute flex-col text-center text-[25px] leading-[25px] justify-between bg-[#CFD4D2]"
           v-if="opened">
        <span class="relative w-full h-[60px] flex items-center justify-center" v-for="item in menu" :key="item.key">
          <nuxt-link class="" :to="{path:item.link, hash:item.hash}">
            {{ item.text }}
          </nuxt-link>
          <span :class="{'left-0' : item.type === 'left', 'right-0' : item.type === 'right'}"
                class="absolute h-0 border-[1px] border-solid border-[#3F564C] bottom-0 w-[70%]"></span>
        </span>
      </div>
    </transition>
  </div>
</template>
<script type="ts">
export default {
  name: 'MenuTop',
  data: () => ({
    opened: false,
    menu: [
      {key: 0, text: 'Love story', link: '/', hash: '#love-story', type: 'left'},
      {key: 1, text: 'Программа', link: '/', hash: '#program', type: 'right'},
      {key: 2, text: 'Галерея', link: '/', hash: '#gallery', type: 'left'},
      {key: 3, text: 'Как добраться', link: '/', hash: '#how', type: 'right'},
      {key: 4, text: 'Контакты', link: '/', hash: '#contacts', type: 'left'},
    ]
  }),
  methods: {
    close() {
      this.opened = !this.opened;
    }
  }
}
</script>