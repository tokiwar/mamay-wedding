<template>
  <div class="flex flex-col sm:max-xl:h-[25vw] 2xl:w-[705px] sm:w-[40vw] justify-between"
       v-if="!$device.isMobile">
    <div class="flex flex-col 2xl:h-[74px] sm:h-[4vw] justify-between">
      <span class="2xl:text-[44px] 2xl:leading-[44px] sm:text-[3vw] sm:leading-[3vw] uppercase">{{ title }}</span>
      <span class="3xl:w-[705px] sm:w-[40vw] h-0 border-[1px] border-solid border-[#6F8079]"></span>
    </div>
    <div class="flex flex-col 2xl:h-[116px] sm:h-[8vw] justify-between" v-for="item in list" :key="item.key">
       <span
           class="flex flex-row 2xl:text-[32px] 2xl:leading-[32px] sm:text-[2.5vw] sm:leading-[2.5vw] 2xl:h-[116px] sm:h-[8vw] items-center 3xl:w-[705px] sm:w-[40vw] justify-between">
          <span v-html="item.title"/>
          <span v-html="item.text"/>
        </span>
      <span class="3xl:w-[705px] sm:w-[40vw] h-0 border-[1px] border-solid border-[#6F8079]"></span>
    </div>
  </div>
  <div v-else class="flex flex-col h-fit py-[10px] w-[346px]">
    <div class="flex flex-col justify-between h-[40px] self-center">
      <span class="text-[25px] leading-[25px] uppercase"
            :class="{'text-end' : titlePosition === 'right', 'text-start' : titlePosition === 'left'}">{{
          title
        }}</span>
      <span class="w-[350px] h-0 border-[1px] border-solid border-[#6F8079]"></span>
    </div>
    <div class="flex flex-col text-[22px] leading-[22px]" v-for="item in list" :key="item.key">
      <div class="flex flex-row justify-between items-center py-[20px]">
        <span v-html="item.title"/>
        <span v-html="item.text"/>
      </div>
      <span class="w-[350px] h-0 border-[1px] border-solid border-[#6F8079]"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TimeList',
  props: ['title', 'list', 'titlePosition']
}
</script>