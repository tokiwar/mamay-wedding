<template>
  <div class="flex relative"
       :class="{
          '2xl:mr-[625px] sm:mr-[30vw] flex-row' : type === 'left' && !$device.isMobile,
          '2xl:ml-[625px] sm:ml-[30vw] flex-row-reverse' : type === 'right' && !$device.isMobile,
          'flex-row' : type === 'left' && $device.isMobile,
          'flex-row-reverse' : type === 'right' && $device.isMobile,
          '2xl:w-[525px] 2xl:h-[150px] sm:w-[30vw] sm:h-[8vw] justify-around' : !$device.isMobile,
          'w-[344px] h-[80px] justify-end mt-[12px]' : $device.isMobile
        }">
    <div v-if="$device.isMobile" class="border-[1px] border-solid border-[#6F8079] absolute top-[35px] w-[223px]"
         :class="{'left-0' : type === 'right','right-0': type ==='left',}"
    />
    <div class="flex relative" :class="{'2xl:w-[125px] sm:w-[5vw]' : !$device.isMobile, 'w-[60px]' : $device.isMobile}">
      <div class="absolute z-10"
           :class="{
              'left-0' : type === 'left',
              'right-0': type ==='right',
              '2xl:text-[150px] 2xl:leading-[150px] sm:text-[8vw] sm:leading-[8vw]' : !$device.isMobile,
              'text-[80px] leading-[60px] bottom-0' : $device.isMobile
            }">{{ data.number }}
      </div>
      <div class="border-[1px] border-solid border-[#6F8079] absolute 2xl:top-[60px] sm:top-[3vw]"
           v-if="!$device.isMobile"
           :class="{
              'left-0' : type === 'left',
              'right-0': type ==='right',
              '2xl:w-[575px] sm:w-[30vw]' : !$device.isMobile,
              'w-[223px]' : $device.isMobile
            }"></div>
      <div
          class="bg-[#F5F5F5] absolute border-[1px] border-solid border-[#6F8079] rounded-full"
          :class="{
              'left-0' : type === 'left',
              'right-0': type ==='right',
              '2xl:h-[80px] 2xl:w-[80px] 2xl:top-[20px] sm:h-[4.5vw] sm:w-[4.5vw] sm:top-[0.5vw]' : !$device.isMobile,
              'h-[50px] w-[50px] top-[10px]' : $device.isMobile
           }"></div>
    </div>
    <div class="flex flex-col"
         :class="{'2xl:w-[400px] justify-between sm:w-[25vw] sm:max-2xl:ml-[5vw]' : !$device.isMobile, 'w-[200px] justify-around' : $device.isMobile, 'items-end' : $device.isMobile && type === 'left', 'items-start' : $device.isMobile && type === 'right'}">
      <div
          :class="{'2xl:text-[44px] 2xl:leading-[44px] sm:text-[2.5vw] sm:leading-[2.5vw]' : !$device.isMobile, 'text-[24px] leading-[24px]' : $device.isMobile}">
        {{ data.head }}
      </div>
      <template v-if="!$device.isMobile">
        <div class="flex flex-row relative items-end sm:space-x-[1vw]">
        <span
            :class="{'2xl:text-[80px] 2xl:leading-[80px] sm:text-[4vw] sm:leading-[4vw]' : !$device.isMobile}"
            class="text-[#6F8079]">{{ data.month }}</span>
          <span
              :class="{'2xl:text-[50px] 2xl:leading-[65px] sm:text-[3vw] sm:leading-[3.5vw]' : !$device.isMobile}"
              class=" text-[#6F8079]">{{ data.year }}</span>
        </div>
      </template>
      <template v-else>
        <div class="flex flex-row relative items-end" :class="{'space-x-[24px]' : $device.isMobile}">
          <template v-if="type === 'right'">
            <span
                :class="{ 'text-[36px] leading-[36px]' : $device.isMobile}"
                class=" text-[#6F8079]">{{ data.year }}</span>
            <span
                :class="{'text-[36px] leading-[36px]' : $device.isMobile}"
                class="text-[#6F8079]">{{ data.month }}</span>
          </template>
          <template v-else>
                    <span
                        :class="{'text-[36px] leading-[36px]' : $device.isMobile}"
                        class="text-[#6F8079]">{{ data.month }}</span>
            <span
                :class="{ 'text-[36px] leading-[36px]' : $device.isMobile}"
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