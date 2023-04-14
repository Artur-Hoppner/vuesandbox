<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import SvgIcon from '@/components/parts/SvgIcon.vue';

gsap.registerPlugin(ScrollTrigger);

const githubIcon = ref({svgFile: "LanguageGitHub", svgClasses: "h-[26px]", link: "https://github.com/Artur-Hoppner/vuesandbox"});


// Next: Add mediaquary to this:
// const mm = gsap.matchMedia();

// mm.add("(max-width: 600px)", () => {

// })

onMounted(() => {
  setTimeout(() => {
    gsap.timeline( {
      scrollTrigger: {
        
        id: "presentationTrigger",
        trigger: ".presentation-pin-container",
        start: "top 20",
        end: "bottom -2000",
        scrub: true,
        pin: ".scroll-pin-container",
      }
    })
    .from(".test1768", {
      opacity: 0,
      duration: 1
    })
    .from("#presentation-header", {
      opacity: 0,
      y: -25,
      duration: 2
    })
    .from("#presentation-svg-animation", {
      autoAlpha: 0.2,
      scale: 0.4  ,
      duration: 8
    })
    .from("#presentation-paragraph1", {
      opacity: 0,
      y: -25,
      duration: 2
    })
    .from("#presentation-paragraph2", {
      opacity: 0,
      x: 65,
      duration: 2
    })
    .from("#presentation-link", {
      opacity: 0,
      x: -65,
      duration: 2
    })
  }, 250 );
})

onUnmounted(() => {
  let pathsTrigger = ScrollTrigger.getById("presentationTrigger");
      pathsTrigger.kill();
})
</script>

<template>
  <div class="presentation-pin-container w-full bg-secondary-color h-screen flex items-center flex-col justify-center pt-10">
    <h3 id="presentation-header" class="text-center text-white text-3xl mb-4">What is this page for?</h3>

    <div class="test1768 h-4/5 md:h-96 w-11/12 md:w-4/5 max-w-5xl bg-gray-100 rounded flex flex-col md:flex-row items-center justify-center px-4 md:px-3 py-3 md:py-8">

      <div class="h-full md:w-6/12 flex justify-center items-center flex-col border bg-gray-200 p-2 overflow-hidden">
        <p id="presentation-paragraph1">It´s important for me to always set aside time for private project and try out new techniques. </p>
        <p id="presentation-paragraph2" class="py-4"> One of those examples is this webpage example. </p>
        <a id="presentation-link" :href="githubIcon.link" target="_blank" rel="noopener noreferrer" class="flex items-center">
          Checkout the github repo
          <SvgIcon class="block hover:fill-slate-300 cursor-pointer" :svgOptions="{svgFile: 'LanguageGitHub', containerClasses: 'w-10 pl-2', svgClasses: 'fill-white h-full', link: 'https://github.com/Artur-Hoppner/vuesandbox'}" />
        </a>
      </div>

      <div class="h-full w-full md:w-6/12 flex justify-center flex-col p-4">
          <SvgIcon id="presentation-svg-animation" :svgOptions="{svgFile: 'computer', containerClasses: '', svgClasses: 'w-full'}"/>
      </div>

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