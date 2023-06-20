<template>
  <footer id="contacts"
          class="flex relative flex-col w-full bg-[#6F8079] font-['University'] text-white items-center justify-center">
    <img v-if="!$device.isMobile" class="absolute top-0 right-0 sm:h-[20vw] 3xl:h-[12vw]" src="@/assets/img/top-flower.png"/>
    <img v-if="!$device.isMobile" class="absolute bottom-0 left-0 sm:h-[25vw] 3xl:h-[17vw]" src="@/assets/img/bottom-flower.png"/>
    <section class="flex flex-col relative py-[1vw]"
             :class="{'w-[60vw] sm:space-y-[3vw] h-full' : !$device.isMobile, 'py-[22px] space-y-[22px]' : $device.isMobile}">
      <div
          :class="{'w-[90%] items-start self-start 2xl:space-y-[25px] sm:space-y-[1vw]' : !$device.isMobile, 'w-[350px] space-y-[15px]' : $device.isMobile}"
          class="flex flex-col">
      <span
          :class="{'3xl:text-[82px] 3xl:leading-[82px] sm:text-[4vw] sm:leading-[4vw]' : !$device.isMobile, 'text-[26px] leading-[26px]' : $device.isMobile}"
      >Если у Вас остались вопросы  или Вы хотите с нами связаться: </span>
        <div
            :class="{'3xl:text-[50px] 3xl:leading-[50px] sm:text-[3vw] sm:leading-[3vw]' : !$device.isMobile, 'text-[24px] leading-[24px] space-y-[5px]' : $device.isMobile}">
          <div :class="{'w-[450px]' : !$device.isMobile, 'w-full' : $device.isMobile}"
               class="flex flex-row justify-between items-center">
            <span>Кристина</span>
            <span>+7 995 181 19 75</span>
          </div>
          <div :class="{'w-[450px]' : !$device.isMobile, 'w-full' : $device.isMobile}"
               class="flex flex-row justify-between items-center">
            <span>Сергей</span>
            <span>+7 918 324 95 88</span>
          </div>
        </div>
      </div>
      <div
          :class="{'w-[90%] items-end self-end space-y-[25px]' : !$device.isMobile, 'w-[350px] space-y-[15px]' : $device.isMobile}"
          class="flex flex-col">
      <span
          :class="{'3xl:text-[82px] 3xl:leading-[82px] sm:text-[4vw] sm:leading-[4vw]' : !$device.isMobile, 'text-[26px] leading-[26px]' : $device.isMobile}">
      По вопросам организации или если <br> у Вас есть интересные предложения: </span>
        <div
            :class="{'3xl:text-[50px] 3xl:leading-[50px] sm:text-[3vw] sm:leading-[3vw]' : !$device.isMobile, 'text-[24px] leading-[24px] space-y-[5px]' : $device.isMobile}">
          <div :class="{'w-[450px]' : !$device.isMobile, 'w-full' : $device.isMobile}"
               class="flex flex-row justify-between items-center">
            <span>Виктория</span>
            <span>+7 918 112 70 92</span>
          </div>
          <div :class="{'w-[450px]' : !$device.isMobile, 'w-full' : $device.isMobile}"
               class="flex flex-row justify-between items-center">
            <span>Кира</span>
            <span>+7 928 464 87 77</span>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
<script setup lang="ts">
</script>