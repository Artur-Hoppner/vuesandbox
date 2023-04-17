<script setup>
import { ref, watch} from 'vue'
import SvgIcon from '@/components/parts/SvgIcon.vue';
import { colorPreferenceStore  } from '@/stores/darkMode';
import { storeToRefs } from 'pinia';
import { userAuthentication } from '@/stores/authentication';

const authentication = userAuthentication()
const routerUserLogin = ref("Login")

const { darkmodeToggle } = storeToRefs(colorPreferenceStore()),
      generalStoreData = colorPreferenceStore(),
      svgLightMode = ref({svgFile: darkmodeToggle.value, svgClasses: 'w-12 h-12',containerClasses: 'mt-4 w-12 h-12', watcher: true})

watch(() => darkmodeToggle.value, (param) => svgLightMode.value.svgFile = param);

</script>

<template>
  <header class="fixed top-0 z-50 h-0 w-screen flex justify-between p-3">
    <SvgIcon class="cursor-pointer" :svgOptions="svgLightMode" @click="generalStoreData.toggleDarkmode()" />

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
      <!-- <Router-link class="m-3 p-2 bg-gray-400 rounded translate-x-2 rotate-6 duration-500 hover:rotate-0 hover:translate-x-0 hover:bg-secondary" to="/logout">
        {{ authentication.routerLinkString }}
      </Router-link> -->
    </nav>
  </header>
</template>


<style scoped lang="scss">
  .fadetest-enter-active {
    transition:  2s ;
    /* transition: transform 1.7s; */
  }

  .fadetest-leave-to,
  .fadetest-enter-from {
    opacity: 0;
    transform: translateX(10px);
  }

  label {
    width: 110px;
    height: 50px;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 200px;
    box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
      inset 0px -5px 15px rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: 0.3s;
    &:after {
      content: "";
      width: 45px;
      height: 45px;
      position: absolute;
      top: 3px;
      left: 3px;
      background: linear-gradient(180deg, #ffcc89, #d8860b);
      border-radius: 180px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }
    svg {
      position: absolute;
      width: 40px;
      top: 5px;
      z-index: 100;
      &.sun {
        left: 5px;
        fill: #fff;
        transition: 0.3s;
      }
      &.moon {
        left: 67px;
        fill: #7e7e7e;
        transition: 0.3s;
      }
    }
  }

  input {
    width: 0;
    height: 0;
    visibility: hidden;
    &:checked + label {
      background: #242424;
      &:after {
        left: 108px;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #777, #3a3a3a);
      }
      svg {
        &.sun {
          fill: #7e7e7e;
        }
        &.moon {
          fill: #fff;
        }
      } 
    }
    &:active:after {
      width: 65px;
    }
  }
</style>