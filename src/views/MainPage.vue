<script setup>
import { ref } from 'vue'
import BubbleAnimation from '@/components/main-page/BubbleIntersectionObserver.vue'
import Skillsets from '@/components/Skillsets.vue'
import SvgIcon from '@/components/parts/SvgIcon.vue'
import PagePresentation from '@/components/main-page/PagePresentation.vue'
import Timeline from '@/components/main-page/TimeLine.vue'

const profilePicture = ref(),
      githubIcon = ref({svgFile: "LanguageGitHub", fill: "black", ajustToHeight: "26px", link: "https://github.com/Artur-Hoppner/"}),
      lionkedinIcon = ref({svgFile: "linkedin", fill: "black", ajustToHeight: "26px", link: "https://www.linkedin.com/in/artur-h%C3%B6ppner/"})
</script>

<template>
  <div class="scroll-pin-container flex items-center flex-col">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 h-[90vh] md:h-96 bg-primary-color pt-10 dark-transition">
      <div class="flex flex-col justify-center items-center md:items-end">
        <div class="dark-transition">
          <h1 class="text-white dark:text-black text-4xl dark-transition">Hi there!</h1>
          <h2 class="text-white dark:text-black text-3xl">My name is Artur.</h2>
          <p class="text-white dark:text-black">I am a Frontend Developer based in Stockholm</p>
        </div>
      </div>
      <SvgIcon :svgOptions="{svgFile: 'ProfilePicture', containerClasses: 'w-auto', svgClasses: 'w-auto h-full rounded-full border border-8 border-dashed dark:border-gray-400'}" />
    </div>

    <div class="wave-background-container background w-full bg-primary-color">
      <SvgIcon :svgOptions="{svgFile: 'WaveBackground',  svgClasses: 'w-full -mb-1'}" />
    </div>

    <PagePresentation />

    <Timeline />

    <BubbleAnimation />

    <div class="h-40" ></div>
    <Skillsets class="w-full max-w-6xl"/>
    <div class="h-20" ></div>
  </div>
</template>