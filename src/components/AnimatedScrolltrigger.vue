<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".gsap-testing-activator", {
    scrollTrigger: {
      trigger: ".gsap-testing-activator",
      pinnedContainer: "main",
      start: "top center",
      scrub: true,
      pin: "main",
      // markers: "true",
      toggleAction: " restart none none none",
      // toggleClass: "pin"
    }
  })

  gsap.to(".fade-in", {
    x: 100,
    scrollTrigger: {
      trigger: ".gsap-testing-activator",
      pinnedContainer: "main",
      start: "top 0",
      end: "bottom 0",
      scrub: true,
      pin: "main",
      // markers: "true",
      toggleAction: " restart none none none",
      toggleClass: "pin"
    }
  })
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
  <div>
    <h2 class="gsap-testing">Testing Gsap</h2>
    <div class="gsap-testing-activator h-80 bg-teal-200 w-full border my-2">
      <h2>What is this?</h2>
      <!-- <ProfilePicture :svgOptions="profilePicture" /> -->
      <p></p>
      <h4>Scroll and add elements to this container</h4>
      <div class="fade-in h-20 w-20 bg-primary"></div>
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