<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import SvgIcon from '@/components/parts/SvgIcon.vue'

const PlaygorundIcon = ref({svgFile: "Playgorund", fill: "#ffffff", ajustToHeight: "80px", link: "https://www.linkedin.com/in/artur-h%C3%B6ppner/"})


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // gsap.to(".gsap-testing-activator", {
  //   scrollTrigger: {
  //     trigger: ".gsap-testing-activator",
  //     pinnedContainer: "main",
  //     start: "top",
  //     scrub: true,
  //     pin: "main",
  //     // markers: "true",
  //     toggleAction: " restart none none none",
  //     // toggleClass: "pin"
  //   }
  // })

  
  // gsap.to(section.querySelector(".gsap-testing-activator"), {
  //   opacity: 1,
  //   scrollTrigger: {
  //     trigger: section,
  //     pinnedContainer: "main",
  //     start: "top 0",
  //     end: "bottom 0",
  //     pin: "main",
  //     start: "center center",
  //     end: "+=300",
  //     toggleActions: "play none none reverse"
  //   }
  // });
})
</script>

<template>
  <div class="w-full bg-secondary h-80">
    <div class="gsap-testing-activator h-80">
      <p>One important rutin for me is to always set aside time for projects to try out new technologies. One example of this is this webpage that acts as my private sandbox </p>
      <div class="h-20 w-20 bg-primary"></div>
      <div class="fade-in h-20 w-20 bg-primary"></div>
      <SvgIcon class="" :svgOptions="PlaygorundIcon"/>
      <RouterLink to="/sandbox">See my Sandbox</RouterLink>
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