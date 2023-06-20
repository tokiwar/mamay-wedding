<template>
  <header
      :class="{'h-[120px] space-x-[5vw]' : $device.isDesktop, 'h-[60px]' : !$device.isDesktop}"
      class="w-full bg-[#EBECE8] font-['University'] flex flex-row justify-center items-center fixed z-20">
    <div>
      <img :class="{'h-[100px]' :$device.isDesktop, 'h-[60px]' : !$device.isDesktop}" src="@/assets/img/logo-2.png"/>
    </div>
    <menu-top/>
  </header>
</template>
<script>
import Header from "~/layouts/Header.vue";
import MenuTop from "~/components/MenuTop.vue";

export default {
  name: 'HeaderMenu',
  components: {MenuTop, Header}
}
</script>