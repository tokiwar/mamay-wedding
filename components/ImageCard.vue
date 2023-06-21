<template>
  <div class="relative">
    <div :class="dynamicClass"
         class="absolute border-solid border-[#6F8079]"></div>
    <img :class="sizeClass" class="relative z-10 object-cover" :src="image" alt="фото" title="фото"/>
  </div>
</template>
<script>
export default {
  name: 'ImageCard',
  props: ['image', 'position', 'height', 'width'],
  data: () => ({
    dynamicClass: '',
    sizeClass: '',
    positionObject: {
      'left-top': 'bottom-[20px] right-[20px]',
      'left-bottom': 'top-[20px] right-[20px]',
      'right-top': 'bottom-[20px] left-[20px]',
      'right-bottom': 'top-[20px] left-[20px]',
      'left-top-mobile': 'bottom-[12px] right-[12px]',
      'left-bottom-mobile': 'top-[12px] right-[12px]',
      'right-top-mobile': 'bottom-[12px] left-[12px]',
      'right-bottom-mobile': 'top-[12px] left-[12px]',
    }
  }),
  created() {
    this.sizeClass = `2xl:h-[${this.height}px] 2xl:w-[${this.width}px] sm:w-[25vw] sm:h-[100%]`;
    this.dynamicClass = this.positionObject[this.position] + ' ' + this.sizeClass;
    this.dynamicClass += this.$device.isMobile ? ' border-[2px] ' : ' border-[3px] ';
  }
}
</script>