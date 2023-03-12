<script setup>
import { ref} from 'vue'
import Nav from '@/components/HeaderNav.vue';
import SvgIcon from '@/components/parts/SvgIcon.vue';
import { colorPreferenceStore  } from '@/stores/darkMode';
import HamburgeMenu2 from '@/components/parts/HamburgerMenu2.vue';

const generalStoreData = colorPreferenceStore();
const svgLightMode = ref({svgFile: "lightmode", fill: "black", ajustToHeight: "26px"}),
      svgDarkMode = ref({svgFile: "darkmode", fill: "black", ajustToHeight: "26px"})
</script>

<template>
  <header class="flex ">
    <!-- // Uppdate to just use one -->
    <SvgIcon class="cursor-pointer absolute top-2 right-16 m-2 hover:fill-slate-600" v-if="generalStoreData.darkmodeToggle" :svgOptions="svgDarkMode" @click="generalStoreData.toggleDarkmode()" />
    <SvgIcon class="cursor-pointer absolute top-2 right-16 m-2 hover:fill-slate-300" v-if="!generalStoreData.darkmodeToggle" :svgOptions="svgLightMode" @click="generalStoreData.toggleDarkmode()" />
    <Nav />
  </header>
</template>
