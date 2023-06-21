<template>
  <div v-if="isOpen" class="fixed w-full h-full bg-black-rgba top-0 z-40 left-0 flex items-center justify-center"
       @click.self="close">
    <div :class="{'h-[90vh] w-[63vh]' : !$device.isMobile,'h-[85vh] w-[58vh]' : $device.isMobile}"
         class="bg-white flex relative">
      <button class="absolute right-[3vh] top-[3vh] z-20 close-button h-[2vh] w-[2vh]" @click.prevent="close"></button>
      <img class="object-cover z-10" src="@/assets/img/invite-flower.png" alt="фон" title="фон"/>
      <div class="absolute w-full h-full flex flex-col justify-between items-center">
        <div class="w-full h-[25%] flex flex-col items-end pt-[10vh] pr-[10vh]">
          <div class="flex h-full flex-col items-center justify-between">
            <img class="h-[8vh] w-[8vh] z-10" src="@/assets/img/svg/sk-green.svg"/>
            <div
                class="flex flex-col items-center justify-center uppercase font-['University'] text-[2vh] leading-[2vh]">
              <span>29 июля 2023 года</span>
              <span>день нашей свадьы</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-[63%] space-y-[2vh] font-['University']">
          <span class="text-[4vh] leading-[4vh]">{{ names[code] || names['default'] }}</span>
          <div
              :class="{'text-[2.8vh] leading-[2.8vh]' : !$device.isMobile, 'text-[2.5vh] leading-[2.5vh]' : $device.isMobile}"
              class="flex flex-col space-y-[2vh]">
            <span>Мы решили стать одной семьей и будем стаслитвы, <br> если вы украсите наше счастилвое торжество <br> своим присутствием! Разделите с нами радость <br> самого красочного дня в жизни влюбленных!</span>
            <span>Торжественная церемония бракосочетания<br>состоится в Большом зале Екатериненского ЗАГСа<br>г. Краснодар, ул. Офицерская, 47<br>в 10:00</span>
            <span>Праздник продолжится в ресторане "Mer Hall"<br>г. Краснодар, ул. Индустриальная, 45<br>Ждем вас к 17:00</span>
          </div>
          <span class="text-[3vh] leading-[3vh]">Сергей и Кристина</span>
        </div>
      </div>
      <span class="absolute bottom-0 left-[8vh] h-[8vh] border-[1px] border-solid border-[#6F8079]"></span>
      <span class="absolute top-[14vh] right-[4vh] h-[50vh] border-[1px] border-solid border-[#6F8079]"></span>
      <span class="absolute top-[14vh] right-[4vh] h-0 w-[45vh] border-[1px] border-solid border-[#6F8079]"></span>
    </div>
  </div>
</template>
<script>
import {useMainStore} from "~/store";

export default {
  name: 'InviteModal',
  data: () => ({
    isOpen: false,
    store: useMainStore(),
    code: 'default',
    names: {
      tarbeevy: 'Валюша и Василий!',
      sysoevy: 'Вячеслав и Виктория!',
      grabelnikovy: 'Жанна и Александр!',
      kiselevy: 'Никита и Даша!',
      shkill: 'Костя и Наташа!',
      default: 'Дорогие гости!'
    }
  }),
  mounted() {
    this.open();
    this.$bus.$on("openModal", () => {
      this.open(true);
    });
  },
  methods: {
    open(skip = false) {
      if (skip || this.checkModalParam()) {
        this.store.openMenu();
        this.store.toggleOverflowOn();
        this.isOpen = true;
      }
    },
    close() {
      if (this.checkModalParam()) {
        this.store.closeMenu();
        this.store.toggleOverflowOff();
        this.isOpen = false;
        this.$router.replace('/');
      }
    },
    checkModalParam() {
      const queryParam = this.$route.query.invite;
      this.code = queryParam;
      return !!queryParam;
    },
  },
}
</script>
<style scoped>
.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.close-button:before,
.close-button:after {
  content: "";
  position: absolute;
  width: 3vh;
  height: 3px;
  background-color: #6F8079;
}

.close-button:before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-button:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>