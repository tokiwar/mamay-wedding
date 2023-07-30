<template>
  <div
      :class="{'2xl:w-[995px] 2xl:ml-[130px] 2xl:mr-auto 2xl:mt-[-100px] 2xl:h-[205px] py-2 px-8 sm:w-[65vw] sm:h-[14vw] sm:mt-[-7vw] sm:ml-[6.5vw]' : !$device.isMobile, 'h-[74px] w-[305px] mt-[-35px] px-[6px] py-[6px]' : $device.isMobile}"
      class="relative bg-[#58615E] flex flex-col font-['University'] text-[#EBECE8]">
    <span
        :class="{'2xl:text-[44px] 2xl:leading-[44px] sm:text-[3vw] sm:leading-[3vw]' : !$device.isMobile, 'text-[20px] leading-[16px]' : $device.isMobile}">До нашего праздника осталось:</span>
    <div class="relative h-[205px] flex flex-row justify-end items-end">
      <span
          :class="{'2xl:text-[190px] 2xl:leading-[160px] sm:text-[13vw] sm:leading-[8vw]' : !$device.isMobile, 'text-[50px] leading-[30px]' : $device.isMobile}">
        Готово
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeddingTimer',
  data: () => ({
    date: '2023-07-29T17:00:00',
    secondsLeft: 0,
  }),
  created() {
    const currentDate = new Date();
    const desiredDate = new Date(this.date);
    const timeDifference = desiredDate.getTime() - currentDate.getTime();
    this.secondsLeft = Math.floor(timeDifference / 1000);
    if (this.secondsLeft > 0) {
      const interval = setInterval(() => {
        this.secondsLeft -= 1;
        if (this.secondsLeft <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
  },
}
</script>