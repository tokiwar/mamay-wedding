<template>
  <Swiper
      :modules="[SwiperAutoplay, SwiperFreeMode]"
      :slides-per-view="'auto'"
      :loop="true"
      :class="'h-[375px]'"
      :autoplay="{
        disableOnInteraction: false,
        delay: 0,
        reverseDirection: false,
        stopOnLastSlide: false,
    }"
      :speed="9000"
      :space-between="20"
      :freeMode="{
              enabled: true,
              momentum: true,
              momentumBounce: false,
              momentumBounceRatio: 0,
              momentumRatio: 0.8,
              momentumVelocityRatio: 1,
      }"
  >
    <SwiperSlide v-for="item in items" :key="item.key">
      <img :src="item.src" class="w-full h-full object-cover"/>
    </SwiperSlide>
  </Swiper>
</template>
<script>
export default {
  name: 'Slider',
  props: ['items']
}
</script>
<style lang="scss">
.swiper-wrapper {
  align-items: center;
}

.swiper-slide {
  width: 345px;
  height: 345px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    width: 375px;
    height: 375px;
  }
}
</style>