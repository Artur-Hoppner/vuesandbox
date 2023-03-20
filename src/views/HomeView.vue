<script setup>
import { ref } from 'vue'
import InputAnimationGrid from '@/components/InputAnimationGrid.vue'
import Skillsets from '@/components/Skillsets.vue'
import SvgIcon from '@/components/parts/SvgIcon.vue'
import AnimatedScrolltrigger from '@/components/AnimatedScrolltrigger.vue'

const users = ref([
        {header: "Its creative", bgColor: "bg-pink-400", position: "justify-center sm:justify-start sm:items-end"},
        {header: "Challenging", bgColor: "bg-lime-50", position: "items-center sm:items-center"},
        {header: "Always new things to learn", bgColor: "bg-amber-200", position: "justify-end sm:justify-start"},
        {header: "Fun", bgColor: "bg-indigo-300", position: "items-end justify-center sm:items-center"},
        {header: "5", bgColor: "bg-zinc-300", position: "justify-center sm:items-end"},
        {header: "6", bgColor: "bg-sky-300", position: "items-center sm:items-center"},
        // {header: "7", bgColor: "bg-purple-300", position: "justify-end sm:justify-end sm:items-center"},
        // {header: "8", bgColor: "bg-red-200", position: "items-center justify-center sm:justify-end sm:items-start"},
        // {header: "9", bgColor: "bg-lime-400", position: "justify-center sm:justify-end"},
        // {header: "10", bgColor: "bg-orange-200",position: "items-center sm:justify-end sm:items-end" },
        // {header: "11", bgColor: "bg-teal-300", position: "items-center justify-end sm:items-end"},
        // {header: "12", bgColor: "bg-amber-100", position: "items-center justify-center sm:justify-end sm:items-end"}
      ]),
      profilePicture = ref({svgFile: "ProfilePicture", ajustToHeight: "100%", classes: "rounded-full border border-8 border-dashed dark:border-gray-400"}),
      githubIcon = ref({svgFile: "LanguageGitHub", fill: "black", ajustToHeight: "26px", link: "https://github.com/Artur-Hoppner/"}),
      lionkedinIcon = ref({svgFile: "linkedin", fill: "black", ajustToHeight: "26px", link: "https://www.linkedin.com/in/artur-h%C3%B6ppner/"}),
      waveBackground = ref({svgFile: "WaveBackground2", ajustToHeight: "", ajustToWidth: "100%"})
</script>

<template>
  <div class="scroll-pin-container flex items-center flex-col">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 h-96 bg-primary dark:bg-primarydark pt-10 dark-transition">
      <div class="flex flex-col justify-center items-center md:items-end">
        <div class="dark-transition">
          <h1 class="text-white dark:text-black text-4xl dark-transition">Hi there!</h1>
          <h2 class="text-white dark:text-black text-3xl">My name is Artur.</h2>
          <p class="text-white dark:text-black">I am a Frontend Developer based in Stockholm</p>
        </div>
      </div>
      <div class="">
        <SvgIcon :svgOptions="profilePicture" />
      </div>
    </div>

    <div class="tghfjgfhgsj w-full bg-primary dark:bg-primarydark">
      <SvgIcon  :svgOptions="waveBackground" />
      <!-- <a :href="githubIcon.link" target="_blank" rel="noopener noreferrer" class="block w-8">
          <SvgIcon class="hover:fill-slate-300 cursor-pointer" :svgOptions="githubIcon" />
        </a>
        <a :href="lionkedinIcon.link" target="_blank" rel="noopener noreferrer" class="block w-8">
          <SvgIcon class="hover:fill-slate-300 cursor-pointer" :svgOptions="lionkedinIcon" />
        </a> -->
    </div>

    <AnimatedScrolltrigger />

    <div class="h-20" ></div>

    <div id="bubbleContainer" class="w-full max-w-6xl bg-primary sm:mx-10 sm:rounded-lg p-4">
      <h3 class="text-slate-50 font-black">Why do i do it?</h3>
      <div role="group" aria-labelledby="quetions-group-label">
        <ul class="flex flex-row flex-wrap">
          <!-- rename component to have better naming logic -->
          <InputAnimationGrid 
            v-for="(user, index) in users" 
            :index="index"
            :user="user"
            :key="user.id" 
          />
        </ul>
      </div>
    </div>

    <div class="h-20" ></div>

    <Skillsets class="w-full max-w-6xl"/>
    <div class="h-20" ></div>

  </div>
</template>

<style scoped lang="scss">
</style>