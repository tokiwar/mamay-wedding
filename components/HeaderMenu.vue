<template>
  <header
      :class="{'h-[120px] space-x-[5vw]' : !$device.isMobile, 'h-[60px]' : $device.isMobile}"
      class="w-full bg-[#EBECE8] font-['University'] flex flex-row justify-center items-center fixed z-20">
    <div>
      <img :class="{'h-[100px]' :!$device.isMobile, 'h-[60px]' : $device.isMobile}" src="@/assets/img/logo.png" alt="лого" title="лого"/>
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