<template>
  <div
      :class="{'h-[150px] ' : !$device.isMobile,
      'h-[60px] w-fit justify-center' : $device.isMobile,
      'self-start' :  type === 'left',
      'self-end' :  type === 'right',
      '2xl:ml-[146px] sm:ml-[7vw]': type === 'left' && !$device.isMobile,
      '2xl:mr-[146px] sm:mr-[7vw]': type === 'right' && !$device.isMobile,
  }"
      class="relative flex uppercase font-['University']">
          <span class="text-[#CFD4D2]"
                :class="{'2xl:text-[140px] 2xl:leading-[140px] sm:text-[8vw] sm:leading-[12vw]' : !$device.isMobile, 'text-[55px] leading-[55px]' : $device.isMobile}">{{title}}</span>
    <span class="absolute bottom-0"
          :class="{'text-[70px] leading-[70px]' : !$device.isMobile, 'text-[30px] leading-[30px]' : $device.isMobile}">{{subtitle}}</span>
  </div>
</template>
<script>
export default {
  name: 'SectionTitle',
  props: ['title', 'subtitle', 'type']
}
</script>