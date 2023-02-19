<script setup>
import { ref} from 'vue'
import Nav from '@/components/HeaderNav.vue';
import SvgIcon from '@/components/parts/SvgIcon.vue';
import { colorPreferenceStore  } from '@/stores/darkMode';

const generalStoreData = colorPreferenceStore();
const svgLightMode = ref({svgFile: "lightmode", fill: "white", ajustToHeight: "26px"}),
      svgDarkMode = ref({svgFile: "darkmode", fill: "white", ajustToHeight: "26px"})
      // pageLogo = ref({svgFile: "ahlogo"})
</script>

<template>
  <header class="dark:bg-secondary bg-primary">
    <!-- // Experiment so that you only use 1 SvgIcon -->
    <SvgIcon class="cursor-pointer absolute top-0 right-0 m-2 hover:fill-slate-600" v-if="generalStoreData.darkmodeToggle" :svgOptions="svgDarkMode" @click="generalStoreData.toggleDarkmode()" />
    <SvgIcon class="cursor-pointer absolute top-0 right-0 m-2 hover:fill-slate-300" v-if="!generalStoreData.darkmodeToggle" :svgOptions="svgLightMode" @click="generalStoreData.toggleDarkmode()" />
    <!-- fix logo size and ajustment to svg file -->
    <!-- <SvgIcon class="" :svgOptions="pageLogo" /> -->
    <img alt="Vue logo" class="logo p-1.5" src="@/assets/ahlogo.png" width="80" height="80" />
    <Nav />
  </header>
</template>