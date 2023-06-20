<template>
  <div class="h-screen flex flex-col items-center select-none">
    <Header/>
    <div v-if="store.$state.menuOpened" class="fixed h-full w-full z-30 bg-black opacity-90"></div>
    <NuxtPage :class="{'mt-[120px]' : !$device.isMobile, 'mt-[59px]' : $device.isMobile}"/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import {useMainStore} from "~/store";

const store = useMainStore();
export default {
  components: {
    Header, Footer
  },
  data: () => ({
    store: store,
  })
};
</script>