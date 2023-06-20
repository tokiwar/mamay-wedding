<template>
  <footer id="contacts"
          class="flex relative flex-col w-full bg-[#6F8079] font-['University'] text-white items-center justify-center">
    <section class="flex flex-col relative"
             :class="{'w-[60vw] sm:space-y-[3vw] h-full' : $device.isDesktop, 'py-[22px] space-y-[22px]' : !$device.isDesktop}">
      <img src="@/assets/img/footer.png" v-if="$device.isDesktop" class="absolute w-full object-contain"/>
      <div
          :class="{'w-[90%] items-start self-start 2xl:space-y-[25px] sm:space-y-[1vw]' : $device.isDesktop, 'w-[350px] space-y-[15px]' : !$device.isDesktop}"
          class="flex flex-col">
      <span
          :class="{'3xl:text-[82px] 3xl:leading-[82px] sm:text-[4vw] sm:leading-[4vw]' : $device.isDesktop, 'text-[26px] leading-[26px]' : !$device.isDesktop}"
      >Если у Вас остались вопросы  или Вы хотите с нами связаться: </span>
        <div
            :class="{'3xl:text-[50px] 3xl:leading-[50px] sm:text-[3vw] sm:leading-[3vw]' : $device.isDesktop, 'text-[24px] leading-[24px] space-y-[5px]' : !$device.isDesktop}">
          <div :class="{'w-[450px]' : $device.isDesktop, 'w-full' : !$device.isDesktop}"
               class="flex flex-row justify-between items-center">
            <span>Кристина</span>
            <span>+7 995 181 19 75</span>
          </div>
          <div :class="{'w-[450px]' : $device.isDesktop, 'w-full' : !$device.isDesktop}"
               class="flex flex-row justify-between items-center">
            <span>Сергей</span>
            <span>+7 918 324 95 88</span>
          </div>
        </div>
      </div>
      <div
          :class="{'w-[90%] items-end self-end space-y-[25px]' : $device.isDesktop, 'w-[350px] space-y-[15px]' : !$device.isDesktop}"
          class="flex flex-col">
      <span
          :class="{'3xl:text-[82px] 3xl:leading-[82px] sm:text-[4vw] sm:leading-[4vw]' : $device.isDesktop, 'text-[26px] leading-[26px]' : !$device.isDesktop}">
      По вопросам организации или если <br> у Вас есть интересные предложения: </span>
        <div
            :class="{'3xl:text-[50px] 3xl:leading-[50px] sm:text-[3vw] sm:leading-[3vw]' : $device.isDesktop, 'text-[24px] leading-[24px] space-y-[5px]' : !$device.isDesktop}">
          <div :class="{'w-[450px]' : $device.isDesktop, 'w-full' : !$device.isDesktop}"
               class="flex flex-row justify-between items-center">
            <span>Виктория</span>
            <span>+7 918 112 70 92</span>
          </div>
          <div :class="{'w-[450px]' : $device.isDesktop, 'w-full' : !$device.isDesktop}"
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