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
      profilePicture = ref(),
      githubIcon = ref({svgFile: "LanguageGitHub", fill: "black", ajustToHeight: "26px", link: "https://github.com/Artur-Hoppner/"}),
      lionkedinIcon = ref({svgFile: "linkedin", fill: "black", ajustToHeight: "26px", link: "https://www.linkedin.com/in/artur-h%C3%B6ppner/"})
</script>

<template>
  <div class="scroll-pin-container flex items-center flex-col">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 h-96 bg-primary dark-mode dark:bg-primarydark pt-10 dark-transition">
      <div class="flex flex-col justify-center items-center md:items-end">
        <div class="dark-mode dark-transition">
          <h1 class="text-white dark-mode dark:text-black text-4xl dark-transition">Hi there!</h1>
          <h2 class="text-white dark-mode dark:text-black text-3xl">My name is Artur.</h2>
          <p class="text-white dark-mode dark:text-black">I am a Frontend Developer based in Stockholm</p>
        </div>
      </div>
        <SvgIcon :svgOptions="{svgFile: 'ProfilePicture', containerClasses: 'w-auto', svgClasses: 'w-auto h-full rounded-full border border-8 border-dashed dark-mode dark:border-gray-400'}" />
    </div>

    <div class="wave-background-container background w-full bg-primary dark-mode dark:bg-primarydark">
      <SvgIcon :svgOptions="{svgFile: 'WaveBackground',  svgClasses: 'w-full '}" />
    </div>

    <AnimatedScrolltrigger />

    <div class="container max-w-3xl">
      <div
        class="flex flex-col md:grid grid-cols-9 mx-auto text-blue-50"
      >
        <!-- left -->
        <div class="flex flex-row-reverse md:contents">
          <div
            class="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
          >
            <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p class="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary pointer-events-none"></div>
            </div>
            <div
              class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow"
            ></div>
          </div>
        </div>
        <!-- right -->
        <div class="flex md:contents">
          <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary pointer-events-none"></div>
            </div>
            <div
              class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow"
            ></div>
          </div>
          <div
            class="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
          >
            <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p class="leading-tight text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Vitae, facilis.
            </p>
          </div>
        </div>
        <!-- left -->
        <div class="flex flex-row-reverse md:contents">
          <div
            class="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
          >
            <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p class="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow">
            </div>
          </div>
        </div>
        <!-- left -->
        <div class="flex flex-row-reverse md:contents">
          <div
            class="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
          >
            <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p class="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary pointer-events-none"></div>
            </div>
            <div
              class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow"
            ></div>
          </div>
        </div>
        <!-- right -->
        <div class="flex md:contents">
          <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary pointer-events-none"></div>
            </div>
            <div
              class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow"
            ></div>
          </div>
          <div
            class="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
          >
            <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p class="leading-tight text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Vitae, facilis.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="h-20" ></div>

    <div id="bubbleContainer" class="w-full max-w-6xl bg-primary sm:mx-10 sm:rounded-lg p-4">
      <h3 class="text-slate-50 font-black">Why do i do code?</h3>
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

    <div class="h-40" ></div>

    <Skillsets class="w-full max-w-6xl"/>
    <div class="h-20" ></div>

  </div>
</template>

<style scoped lang="scss">
</style>