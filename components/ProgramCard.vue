<template>
  <div
      :class="{'3xl:h-[23vw] 2xl:flex-row 2xl:justify-center 2xl:space-x-[5vw] sm:flex-col  sm:max-2xl:h-[50vw]': type ==='left' && !$device.isMobile, '3xl:h-[23vw] 2xl:justify-center 2xl:space-x-[5vw] 2xl:space-x-reverse 2xl:flex-row-reverse sm:flex-col sm:max-2xl:h-[50vw]' : type === 'right' && !$device.isMobile, 'flex-col-reverse justify-between' : $device.isMobile}"
      class="flex font-['University'] items-center">
    <div class="relative"
         :class="{'sm:h-[25vw] flex items-center' : !$device.isMobile}">
      <image-card :height="height" :width="width" :position="position" :image="image"/>
    </div>
    <time-list :list="list" :title="title" :title-position="titlePosition"/>
  </div>
</template>
<script>

export default {
  name: 'ProgramCard',
  props: ['type', 'image', 'position', 'height', 'width', 'list', 'title', 'titlePosition']
}
</script>