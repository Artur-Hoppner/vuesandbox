<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import SvgIcon from '@/components/parts/SvgIcon.vue'

const PlaygorundIcon = ref({svgFile: "Playgorund", fill: "#ffffff", ajustToHeight: "80px", link: "https://www.linkedin.com/in/artur-h%C3%B6ppner/"})

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  setTimeout(() => {
    gsap.timeline( {
      scrollTrigger: {
        id: "testingId",
        trigger: ".gsap-testing-activator",
        start: "top ",
        end: "bottom -2400",
        scrub: true,
        pin: ".scroll-pin-container",
      }
    })
    .from("#idfstwo", {
      autoAlpha: 0,
      scale: 0.5,
      duration: 4
    })
    .from("#idone", {
      opacity: 0,
      x: 50,
      duration: 1
    })
    .from("#idtwo", {
      opacity: 0,
      x: 50,
      duration: 1
    })
  }, 100 );
})

onUnmounted(() => {
  let pathsTrigger = ScrollTrigger.getById("testingId")
      pathsTrigger.kill()
})
</script>

<template>
  <div class="gsap-testing-activator w-full bg-secondary dark:bg-secondarydark h-screen flex items-start justify-center pt-10">
    <div class=" h-80 w-4/5 bg-gray-200 rounded gap-4 flex items-center justify-center flex-wrap">
      <div>
        <p id="idone">One important rutin for me is to always set aside time for projects to try out new technologies. One example of this is this webpage that acts as my private sandbox </p>
        <RouterLink id="idtwo" to="/sandbox">See my Sandbox</RouterLink>
      </div>
      <SvgIcon id="idfstwo" class="" :svgOptions="{svgFile: 'computer', ajustToHeight: '50%'}"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .pin {
    position: fixed;
    bottom: 0;
    /* variable for border */
    left: 2.5rem;
    background-color: green;
    width: calc(100% - 5rem);
  }
</style>