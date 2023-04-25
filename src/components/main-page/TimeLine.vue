<script setup>


import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const timelineItems = [
        {position: "left", header: "Frontend", text: "Built with Vue3 and Pinia. In this I'm trying out some experimental features, for example suspense. I'm using Tailwind for styling and GSAP for animation features."},
        {position: "right", header: "Pipeline", text: "Deployment is easy when I'm using GitHub's own workflow that automatically updates DockerHub repository when pushed to master."},
        {position: "left", header: "Server", text: "Using an Nginx reverse proxy server in a droplet on DigitalOcean to manage multiple apps. There is a watcher in the droplet that automatically updates the deployed site if DockerHub repository is updated."},
        {position: "right", header: "Future project", text: "Connect login functionality to a backend and database. The frontend has a basic login function with no backend connecten."}
      ]

onMounted(() => {
  animateOnScroll(timelineItems);
})

// Add mediaquary for mobile to make all elemets come from right
function animateOnScroll(timelineObject) {
  for (let index = 0; index < timelineObject.length; index++) {
    gsap.from(`.timeline-${index}`, {
      duration: 1.2,
      ease: "elastic.out(0.8, 0.4)",
      x: window.innerWidth <= 700 && timelineObject[index].position === 'left' ? 40 : timelineObject[index].position === 'left' ? -40 : 40,
      opacity: 0,
      scrollTrigger: {
        trigger: `.timeline-${index}`,
        start: '2100',
        toggleActions: 'play none none none',
      }
    })
  }
}

</script>

<template>
  <div class="container w-11/12 md:w-4/5 max-w-5xl">
    <div
      class="flex flex-col md:grid grid-cols-9 mx-auto text-blue-50"
    >
      <div class="h-20 col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-secondary-color pointer-events-none"></div>
        </div>
      </div>
      <div class="bg-secondary-color rounded-xl md:col-start-5 md:col-end-6">
          <p class="p-2 ">Techstack</p>
      </div>
      <div class="h-20 col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-secondary-color pointer-events-none"></div>
        </div>
      </div>

      <div
        v-for="(items, index) in timelineItems"
        class="contents"
      >
        <!-- left timeline item -->
        <div 
          v-if="items.position === 'left'"
          class="flex flex-row-reverse md:contents"
        >
          <div
            :class="`timeline-${index}`"
            class="self-center bg-primary-color col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto md:mr-0 md:ml-auto shadow-md"
          >
            <h3 class="font-semibold text-lg mb-1">
              {{items.header}}
            </h3>
            <p class="leading-tight text-justify">
              {{ items.text }}  
            </p>
          </div>
          <div class="h-60 col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary-color pointer-events-none"></div>
            </div>
            <div
              class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary-color shadow"
            ></div>
          </div>
        </div>

        <!-- right timeline item -->
        <div
          v-if="items.position === 'right'"
          class="flex md:contents"
        >
          <div class="h-60 col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary-color pointer-events-none"></div>
            </div>
            <div
              class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary-color shadow"
            ></div>
          </div>
          <div
            :class="`timeline-${index}`"
            class="self-center bg-primary-color col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
          >
            <h3 class="font-semibold text-lg mb-1">
              {{items.header}}
            </h3>
            <p class="leading-tight text-justify">
              {{items.text}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>