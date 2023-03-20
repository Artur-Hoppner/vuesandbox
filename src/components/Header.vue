<script setup>
import { ref, watch} from 'vue'
import SvgIcon from '@/components/parts/SvgIcon.vue';
import { colorPreferenceStore  } from '@/stores/darkMode';
import { storeToRefs } from 'pinia';
import { userAuthentication } from '@/stores/authentication';
import HamburgeMenu from '@/components/parts/HamburgerMenu.vue';
import HamburgeMenu2 from '@/components/parts/HamburgerMenu2.vue';

const authentication = userAuthentication()
const routerUserLogin = ref("Login")

const { darkmodeToggle } = storeToRefs(colorPreferenceStore()),
      generalStoreData = colorPreferenceStore(),
      svgLightMode = ref({svgFile: darkmodeToggle.value, fill: "#ffffff", ajustToHeight: "40px", watcher: true}),
      SunAnimated = ref({svgFile: darkmodeToggle.value, fill: "#ffffff", ajustToHeight: "40px", watcher: true});

watch(() => darkmodeToggle.value, (param) => svgLightMode.value.svgFile = param);

</script>

<template>
  <header class="fixed top-0 z-50 h-0 w-screen flex justify-between p-3">
    <SvgIcon class="cursor-pointer" :svgOptions="svgLightMode" @click="generalStoreData.toggleDarkmode()" />

    <transition name="fadetest" appear>
    <nav class="transition-all invisible xl:visible text-white grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 text-center m-5">
        <RouterLink class=" m-3 p-2 bg-gray-400 rounded translate-x-2 rotate-[-3deg] duration-500 hover:rotate-2 hover:translate-x-[-0.25rem] hover:bg-secondary"  to="/">
          Home
        </RouterLink>
        <RouterLink class="m-3 p-2 bg-gray-400 rounded translate-x-[-0.25rem] rotate-6 duration-500 hover:rotate-[-1deg] hover:translate-x-1 hover:bg-secondary" to="/sandbox">
          Sandbox
        </RouterLink>
        <RouterLink class="m-3 p-2 bg-gray-400 rounded rotate-[-2deg] duration-500 hover:rotate-2 hover:translate-x-1 hover:bg-secondary" v-if="authentication.authenticatedUser" to="/styleguide">
          Styleguide
        </RouterLink>
        <Router-link class="m-3 p-2 bg-gray-400 rounded translate-x-2 rotate-6 duration-500 hover:rotate-0 hover:translate-x-0 hover:bg-secondary" to="/logout">
          {{ authentication.routerLinkString }}
        </Router-link>
        <!-- <HamburgeMenu  /> -->
      </nav>
    </transition>
    <!-- <HamburgeMenu2 class="invisible" /> -->
  </header>
</template>


<style scoped>
.fadetest-enter-active {
  transition:  2s ;
  /* transition: transform 1.7s; */
}

.fadetest-leave-to,
.fadetest-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
</style>