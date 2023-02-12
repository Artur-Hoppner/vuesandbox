<script setup>
import { ref} from 'vue'
import Nav from '@/components/HeaderNav.vue';
import SvgIcon from '@/components/parts/SvgIcon.vue';
import { userAuthentication } from '@/stores/authentication';
import { colorPreferenceStore  } from '@/stores/darkMode';

const generalStoreData = colorPreferenceStore();
const svgLightMode = ref({svgFile: "lightmode", fill: "white", ajustToHeight: "100%"}),
      svgDarkMode = ref({svgFile: "darkmode", fill: "white", ajustToHeight: "100%"})
      // pageLogo = ref({svgFile: "ahlogo"})
const authentication = userAuthentication() 
</script>

<template>
  <header class="dark:bg-primary bg-secondary">
    <!-- // Experiment so that you only use 1 SvgIcon -->
    <SvgIcon class="cursor-pointer absolute top-0 right-0 m-2" v-if="generalStoreData.darkmodeToggle" :svgOptions="svgDarkMode" @click="generalStoreData.toggleDarkmode()" />
    <SvgIcon class="cursor-pointer absolute top-0 right-0 m-2" v-if="!generalStoreData.darkmodeToggle" :svgOptions="svgLightMode" @click="generalStoreData.toggleDarkmode()" />
    <!-- fix logo size and ajustment to svg file -->
    <!-- <SvgIcon class="" :svgOptions="pageLogo" /> -->
    <img alt="Vue logo" class="logo p-1.5" src="@/assets/ahlogo.png" width="80" height="80" />
    <Nav v-if="authentication.authenticatedUser" />
  </header>
</template>