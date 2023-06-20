<template>
  <div
      :class="{'mt-[105px] 2xl:ml-[130px] 2xl:mr-auto space-y-[50px] sm:ml-[5vw] sm:mr-[30vw]' : !$device.isMobile, 'w-[375px] space-y-[12px]' : $device.isMobile}"
      class="relative flex flex-col font-['University'] items-center  h-max text-[#3F564C]">
    <span
        :class="{'2xl:text-[160px] 2xl:leading-[160px] sm:text-[10vw] sm:leading-[10vw]' : !$device.isMobile,'text-[55px] leading-[55px] mt-[40px]' : $device.isMobile}">Кристина & Сергей</span>
    <span
        :class="{'2xl:text-[140px] 2xl:leading-[140px] sm:text-[9vw] sm:leading-[9vw]' : !$device.isMobile,'text-[55px] leading-[55px]' : $device.isMobile}">29 июля 2023 г</span>
    <span :class="{'border-[2px] w-full absolute' : !$device.isMobile, 'border-[2px] w-[340px]' : $device.isMobile}"
          class="h-0 border-solid border-[#6F8079] bottom-0"></span>
  </div>
  <div v-if="!$device.isMobile" class="absolute  2xl:h-[680px]  sm:h-[40vw] sm:w-[98vw]">
    <img class="relative 3xl:mr-[10vw] 2xl:ml-auto 2xl:mr-[3vw] 2xl:h-[720px] sm:h-[45vw] sm:mr-0 sm:ml-auto"
         src="~/assets/img/logo-main.png"/>
  </div>
</template>
<script>
export default {
  name: 'LogoWithFlowers'
}
</script>