<template>
  <div class="bg-[#F5F5F5] w-full">
    <invite-modal/>
    <div class="w-full flex items-center flex-col">
      <div class="w-full bg-[#EBECE8] flex flex-col items-center">
        <section :class="{'3xl:w-[1700px] 2xl:h-[680px] sm:w-[98vw] sm:h-[45vw]' : isDesktop, 'h-[254px]' : !isDesktop}"
                 class="flex flex-col items-center">
          <logo-with-flowers/>
        </section>
      </div>
      <section :class="{'3xl:w-[1700px] sm:w-[98vw]' : isDesktop}">
        <wedding-timer/>
      </section>
    </div>
    <div class="flex flex-col w-full items-center">
      <section :class="{'3xl:w-[1700px] mt-[70px] sm:w-[98vw]' : isDesktop, 'mt-[20px] w-[345px] items-center' : !isDesktop}"
               class="flex flex-col">
        <section-title :title="'Мы женимся'" :subtitle="'Мы женимся'" :type="'left'"/>
        <wedding-text/>
      </section>
      <section :class="{'3xl:w-[1700px] mt-[90px] sm:w-[98vw]' : isDesktop, 'mt-[29px] w-[345px]' : !isDesktop}"
               id="love-story" class="flex flex-col">
        <section-title :title="'Наша история'" :subtitle="'Наша история'" :type="'right'"/>
        <div class="flex flex-col items-center justify-center font-['University'] uppercase relative"
             :class="{'mt-[15px]': !isDesktop}">
          <span class="absolute 2xl:h-[600px] border-[1px] 2xl:top-[60px] sm:h-[44vw] sm:top-[3vw] border-solid border-[#6F8079]"
                v-if="isDesktop"></span>
          <history-item v-for="item in historyItems" :key="item.key" :type="item.type" :data="item.data"/>
          <div class="relative flex flex-col bg-[#F5F5F5]"
               :class="{'2xl:w-[850px] 2xl:h-[215px] 2xl:mt-[60px] sm:w-[55vw] sm:h-[10vw] sm:mt-[4vw]' : isDesktop, 'w-[345px] h-[71px] mt-[25px]' : !isDesktop}">
            <span class="absolute border-[1px] border-solid border-[#6F8079]"
                  :class="{'2xl:w-[850px] 2xl:h-[110px] sm:w-[55vw] sm:h-[7vw]' : isDesktop, 'w-[340px] h-[40px]' : !isDesktop}"
            ></span>
            <span class="absolute bg-[#F5F5F5]"
                  :class="{'2xl:text-[80px] 2xl:leading-[80px] 2xl:left-[10px] 2xl:top-[-40px] sm:left-[1vw] sm:top-[-1.7vw] sm:text-[3.5vw] sm:leading-[3.5vw]' : isDesktop, 'text-[24px] leading-[24px] left-[25px] top-[-12px]' : !isDesktop}"
            >Свадьба</span>
            <span class="absolute bg-[#F5F5F5]"
                  :class="{'2xl:text-[150px] 2xl:leading-[150px] 2xl:right-[50px] 2xl:top-[30px] sm:text-[9vw] sm:leading-[9vw] sm:top-[2.5vw] sm:right-[4vw]' : isDesktop, 'text-[50px] leading-[50px]  right-[30px] top-[15px]' : !isDesktop}"
            >29 ИЮЛЯ 2023</span>
          </div>
        </div>
      </section>
      <section :class="{'3xl:w-[1700px] mt-[90px] sm:w-[98vw]' : isDesktop, 'mt-[29px] w-[345px]' : !isDesktop}"
               id="program" class="flex flex-col">
        <section-title :title="'Программа'" :subtitle="'Программа'" :type="'left'"/>
        <program-card :height="!isDesktop ? 289 : 401" :width="!isDesktop ? 334 : 559" :list="registerList"
                      :image="useAsset('img/photo2.png')"
                      :title="'Регистрация'"
                      :title-position="'right'"
                      :position="!isDesktop ? 'right-bottom-mobile' : 'right-bottom'" :type="'left'"
                      :class="{'mt-[40px]' : isDesktop, 'mt-[20px]' : !isDesktop}"/>
        <program-card :height="!isDesktop ? 289 : 401" :width="!isDesktop ? 334 : 559" :list="banquetList"
                      :image="useAsset('img/photo3.png')"
                      :title="'Банкет'"
                      :title-position="'left'"
                      :position="!isDesktop ? 'left-bottom-mobile' : 'left-bottom'" :type="'right'"
                      :class="{'2xl:mt-[20px] sm:mt-[5vw]' : isDesktop, 'mt-[20px]' : !isDesktop}"/>
        <ask-text/>
      </section>
      <section
          id="gallery" class="flex flex-col items-center"
          :class="{'mt-[90px] w-full' : isDesktop, 'mt-[29px] w-[345px]' : !isDesktop}"
      >
        <div :class="{'3xl:w-[1700px] sm:w-[98vw]': isDesktop, 'w-[345px]' : !isDesktop}"
             class="flex justify-end">
          <section-title :title="'Как это было'" :subtitle="'Наш альбом'" :type="'right'"/>
        </div>
        <div class="w-full flex flex-row justify-center items-center"
             :class="{'my-[40px]' : isDesktop, 'my-[10px]' : !isDesktop}">
          <slider :items="slides"/>
        </div>
      </section>
      <section id="how" class="flex flex-col items-center  w-full"
               :class="{'mt-[40px]' : isDesktop, 'mt-[20px]' : !isDesktop}">
        <div :class="{'3xl:w-[1700px] sm:w-[98vw]' : isDesktop, 'w-[345px]' : !isDesktop}">
          <section-title :title="'Как добраться'" :subtitle="'Как добраться'" :type="'left'"/>
        </div>
        <div class="mt-[40px] w-full">
          <map-item/>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import {useState} from "#app";
import WeddingTimer from "~/components/WeddingTimer.vue";
import ProgramCard from "~/components/ProgramCard.vue";
import Slider from "~/components/Slider.vue";
import MapItem from "~/components/MapItem.vue";
import LogoWithFlowers from "~/components/LogoWithFlowers.vue";
import {useMainStore} from "~/store";
import {storeToRefs} from 'pinia'
import AskText from "~/components/AskText.vue";

const {isMobile, isDesktopOrTablet, isDesktop} = useDevice();
useHead({
  title: 'Свадьба - Сергей и Кристина',
  bodyAttrs: {
    class: storeToRefs(useMainStore()).overflowClass
  }
});
const useAsset = function (path) {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/' + path]
}
const historyItems = useState('historyItems', () => {
  return [
    {key: 0, type: 'left', data: {number: 1, head: 'МЫ ПОЗНАКОМИЛИСЬ', month: 'Августа', year: '2021'}},
    {key: 1, type: 'right', data: {number: 25, head: 'НАЧАЛО ОТНОШЕНИЙ', month: 'Декабря', year: '2021'}},
    {key: 2, type: 'left', data: {number: 29, head: 'Первое путешествие', month: 'Августа', year: '2022'}},
    {key: 3, type: 'right', data: {number: 5, head: 'Предложение', month: 'Октября', year: '2022'}},
  ];
});
const slides = useState('slides', () => {
  return [
    {key: 0, 'src': useAsset('img/slider/1.jpg')},
    {key: 1, 'src': useAsset('img/slider/2.jpg')},
    {key: 2, 'src': useAsset('img/slider/3.jpg')},
    {key: 3, 'src': useAsset('img/slider/4.jpg')},
    {key: 4, 'src': useAsset('img/slider/5.jpg')},
    {key: 5, 'src': useAsset('img/slider/6.jpg')},
    {key: 6, 'src': useAsset('img/slider/7.jpg')},
    {key: 7, 'src': useAsset('img/slider/8.jpg')},
    {key: 8, 'src': useAsset('img/slider/9.jpg')},
    {key: 9, 'src': useAsset('img/slider/10.jpg')},
    {key: 10, 'src': useAsset('img/slider/11.jpg')},
    {key: 11, 'src': useAsset('img/slider/12.jpg')},
    {key: 12, 'src': useAsset('img/slider/13.jpg')},
    {key: 13, 'src': useAsset('img/slider/11.jpg')},
  ];
});
const registerList = useState('registerList', () => {
  return [
    {'key': 0, 'title': 'Время', 'text': '10:00'},
    {'key': 1, 'title': 'Место проведения', 'text': 'Краснодарский Дворец<br>бракосочетания<br>“Екатерининский зал”'},
    {'key': 2, 'title': 'Адрес', 'text': 'улица Офицерская, 47'},
  ];
});
const banquetList = useState('banquetList', () => {
  return [
    {'key': 0, 'title': 'Время', 'text': '17:00'},
    {'key': 1, 'title': 'Место проведения', 'text': 'Банкетный зал “MER HALL”'},
    {'key': 2, 'title': 'Адрес', 'text': 'улица Индустриальная, 45'},
  ];
});
// const {data, pending, error, refresh} = await useFetch('https://yugadar.ru/api/main/', {
//   onRequest({request, options}) {
//
//   },
//   onRequestError({request, options, error}) {
//     // Handle the request errors
//   },
//   onResponse({request, response, options}) {
//
//   },
//   onResponseError({request, response, options}) {
//     // Handle the response errors
//   }
// })
</script>