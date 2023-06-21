<template>
  <div
      class="flex flex-col justify-center items-center font-['University'] space-y-[16px]"
      :class="{'2xl:text-[28px] 2xl:leading-[28px] 2xl:mt-[70px] sm:text-[3vw] sm:leading-[3vw] sm:mt-[10vw]' : !$device.isMobile, 'text-[24px] leading-[24px] mt-[40px]' : $device.isMobile}">
          <span class="h-0 border-[1px] border-solid border-[#3F564C]"
                :class="{'2xl:w-[1430px] sm:w-full' : !$device.isMobile, 'w-[343px]' : $device.isMobile}"></span>
    <span class="text-center">Дорогие гости, у нас не предусмотрена программа между регистрацией и банкетом.<br>
      Мы ждем Вас к 17.00 в банкетном зале. <br>Если Вы хотите присуствовать на росписи , будем рады Вас видеть в ЗАГСе.<br>
      Пожалуйста, не дарите нам цветы, так как мы не успеем насладиться их красотой.<br>
      Вместо этого мы будем рады бутылочке вашего любимого напитка </span>
    <span class="h-0 border-[1px] border-solid border-[#3F564C]"
          :class="{'2xl:w-[1430px] sm:w-full' : !$device.isMobile, 'w-[343px]' : $device.isMobile}"></span>
  </div>
</template>
<script>
export default {
  name: 'AskText'
}
</script>