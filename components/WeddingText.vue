<template>
  <div class="flex font-['University']"
       :class="{'flex-row  2xl:ml-[146px] mt-[40px] sm:ml-[8vw]' : !$device.isMobile, 'flex-col w-full mt-[15px]' : $device.isMobile}">
    <div :class="{'2xl:ml-[120px] sm:ml-[5vw]' : !$device.isMobile}" class="flex flex-col">
      <div
          :class="{'2xl:text-[28px] 2xl:leading-[28px] 2xl:w-[415px] 2xl:space-y-[55px] sm:w-[30vw] sm:text-[2.5vw] sm:leading-[2.5vw]' : !$device.isMobile, 'text-[20px] leading-[20px] space-y-[15px] text-center' : $device.isMobile}"
          class="flex flex-col">
        <span>Дорогие друзья, родные и близкие!</span>
        <span>Мы счастливы пригласить вас на нашу свадьбу.<br> Для нас очень важно, чтобы вы смогли разделить с нами самое счастливое мгновение в нашей жизни. <br>Порадуйте нас своим присутствием:</span>
      </div>
      <div
          :class="{'2xl:mt-[55px] space-y-[16px] sm:mt-[3vw]' : !$device.isMobile, 'mt-[20px] space-y-[11px]' : $device.isMobile}"
          class="flex flex-col font-['Garamond']">
              <span :class="{'2xl:w-[415px]' : !$device.isMobile, 'w-full' : $device.isMobile}"
                    class="h-0 border-[1px] border-solid border-[#6F8079]"></span>
        <span :class="{'2xl:w-[415px]' : !$device.isMobile, 'w-full' : $device.isMobile}"
              class="text-center 2xl:text-[32px] 2xl:leading-[36px] sm:text-[2vw] sm:leading-[2vw]">29 ИЮЛЯ 2023 года</span>
        <span :class="{'2xl:w-[415px]' : !$device.isMobile, 'w-full' : $device.isMobile}"
              class="h-0 border-[1px] border-solid border-[#6F8079]"></span>
      </div>
      <div v-if="!$device.isMobile"
           class="2xl:text-[28px] 2xl:leading-[28px] sm:text-[2.5vw] sm:leading-[2.5vw] 2xl:mt-[45px] sm:mt-[2vw]">
        С любовью, Сергей и Кристина
      </div>
    </div>
    <div
        :class="{'2xl:ml-auto 2xl:mr-[266px] top-[-20px] sm:mr-[15vw] sm:ml-auto' : !$device.isMobile, 'mt-[26px] flex flex-col space-y-[20px] items-center justify-center' : $device.isMobile}"
        class="relative">
      <image-card :height="$device.isMobile? 276 :465" :width="$device.isMobile? 229 : 415"
                  :position="$device.isMobile ? 'left-bottom-mobile' :'left-bottom'"
                  :image="useAsset('img/photo1.png')"/>
      <div v-if="$device.isMobile" class="text-[20px] leading-[20px]">С любовью, Сергей и Кристина</div>
    </div>
  </div>
</template>
<script>
import ImageCard from "~/components/ImageCard.vue";

export default {
  name: 'WeddingText',
  components: {ImageCard},
  methods: {
    useAsset(path) {
      const assets = import.meta.glob('~/assets/**/*', {
        eager: true,
        import: 'default',
      })
      return assets['/assets/' + path]
    }
  }
}
</script>