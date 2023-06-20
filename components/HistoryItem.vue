<template>
  <div class="flex relative"
       :class="{
          '2xl:mr-[625px] sm:mr-[30vw] flex-row' : type === 'left' && $device.isDesktop,
          '2xl:ml-[625px] sm:ml-[30vw] flex-row-reverse' : type === 'right' && $device.isDesktop,
          'flex-row' : type === 'left' && !$device.isDesktop,
          'flex-row-reverse' : type === 'right' && !$device.isDesktop,
          '2xl:w-[525px] 2xl:h-[150px] sm:w-[30vw] sm:h-[8vw] justify-around' : $device.isDesktop,
          'w-[344px] h-[80px] justify-end mt-[12px]' : !$device.isDesktop
        }">
    <div v-if="!$device.isDesktop" class="border-[1px] border-solid border-[#6F8079] absolute top-[35px] w-[223px]"
         :class="{'left-0' : type === 'right','right-0': type ==='left',}"
    />
    <div class="flex relative" :class="{'2xl:w-[125px] sm:w-[5vw]' : $device.isDesktop, 'w-[60px]' : !$device.isDesktop}">
      <div class="absolute z-10"
           :class="{
              'left-0' : type === 'left',
              'right-0': type ==='right',
              '2xl:text-[150px] 2xl:leading-[150px] sm:text-[8vw] sm:leading-[8vw]' : $device.isDesktop,
              'text-[80px] leading-[60px] bottom-0' : !$device.isDesktop
            }">{{ data.number }}
      </div>
      <div class="border-[1px] border-solid border-[#6F8079] absolute 2xl:top-[60px] sm:top-[3vw]"
           v-if="$device.isDesktop"
           :class="{
              'left-0' : type === 'left',
              'right-0': type ==='right',
              '2xl:w-[575px] sm:w-[30vw]' : $device.isDesktop,
              'w-[223px]' : !$device.isDesktop
            }"></div>
      <div
          class="bg-[#F5F5F5] absolute border-[1px] border-solid border-[#6F8079] rounded-full"
          :class="{
              'left-0' : type === 'left',
              'right-0': type ==='right',
              '2xl:h-[80px] 2xl:w-[80px] 2xl:top-[20px] sm:h-[4.5vw] sm:w-[4.5vw] sm:top-[0.5vw]' : $device.isDesktop,
              'h-[50px] w-[50px] top-[10px]' : !$device.isDesktop
           }"></div>
    </div>
    <div class="flex flex-col"
         :class="{'2xl:w-[400px] justify-between sm:w-[25vw] sm:max-2xl:ml-[5vw]' : $device.isDesktop, 'w-[200px] justify-around' : !$device.isDesktop, 'items-end' : !$device.isDesktop && type === 'left', 'items-start' : !$device.isDesktop && type === 'right'}">
      <div :class="{'2xl:text-[44px] 2xl:leading-[44px] sm:text-[2.5vw] sm:leading-[2.5vw]' : $device.isDesktop, 'text-[24px] leading-[24px]' : !$device.isDesktop}">
        {{ data.head }}
      </div>
      <template v-if="$device.isDesktop">
        <div class="flex flex-row relative items-end sm:space-x-[1vw]">
        <span
            :class="{'2xl:text-[80px] 2xl:leading-[80px] sm:text-[4vw] sm:leading-[4vw]' : $device.isDesktop}"
            class="text-[#6F8079]">{{ data.month }}</span>
          <span
              :class="{'2xl:text-[50px] 2xl:leading-[65px] sm:text-[3vw] sm:leading-[3.5vw]' : $device.isDesktop}"
              class=" text-[#6F8079]">{{ data.year }}</span>
        </div>
      </template>
      <template v-else>
        <div class="flex flex-row relative items-end" :class="{'space-x-[24px]' : !$device.isDesktop}">
          <template v-if="type === 'right'">
            <span
                :class="{ 'text-[36px] leading-[36px]' : !$device.isDesktop}"
                class=" text-[#6F8079]">{{ data.year }}</span>
            <span
                :class="{'text-[36px] leading-[36px]' : !$device.isDesktop}"
                class="text-[#6F8079]">{{ data.month }}</span>
          </template>
          <template v-else>
                    <span
                        :class="{'text-[36px] leading-[36px]' : !$device.isDesktop}"
                        class="text-[#6F8079]">{{ data.month }}</span>
            <span
                :class="{ 'text-[36px] leading-[36px]' : !$device.isDesktop}"
                class=" text-[#6F8079]">{{ data.year }}</span>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HistoryItem',
  props: ['data', 'type'],
}
</script>