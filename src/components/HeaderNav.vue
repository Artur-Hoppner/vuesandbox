<script setup>
import {onMounted, ref} from 'vue'
import { colorPreferenceStore  } from '@/stores/darkMode';
import SvgIcon from '@/components/parts/SvgIcon.vue';

const generalStoreData = colorPreferenceStore();
const svgLightMode = ref({svgFile: "lightmode", fill: "white", ajustToHeight: "100%"}),
      svgDarkMode = ref({svgFile: "darkmode", fill: "white", ajustToHeight: "100%"})

</script>

<template >
  <nav class="grid grid-cols-8">
    <RouterLink  to="/">Home</RouterLink>
    <RouterLink to="/sandbox">Sandbox</RouterLink>
    <RouterLink to="/styleguide">Styleguide</RouterLink>
    <Router-link to="/logout">Logout</Router-link>
    <div class="cursor-pointer absolute top-0 right-0 m-2">
      <SvgIcon v-if="generalStoreData.darkmodeToggle" :svgOptions="svgDarkMode" @click="generalStoreData.toggleDarkmode()" />
      <SvgIcon v-if="!generalStoreData.darkmodeToggle" :svgOptions="svgLightMode" @click="generalStoreData.toggleDarkmode()" />
    </div>
  </nav>
</template>

<style scoped>

</style>