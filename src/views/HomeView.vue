<script setup>
import { ref, onMounted } from 'vue'
import InputAnimationGrid from '@/components/InputAnimationGrid.vue'
import gsap from 'gsap'
import ProfilePicture from '@/components/parts/SvgIcon.vue'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const users = ref([
        {header: "Creative", bgColor: "bg-pink-400", position: "justify-center sm:justify-start sm:items-end"},
        {header: "Challenging", bgColor: "bg-lime-50", position: "items-center sm:items-center"},
        {header: "3", bgColor: "bg-amber-200", position: "justify-end sm:justify-start"},
        {header: "4", bgColor: "bg-indigo-300", position: "items-end justify-center sm:items-center"},
        {header: "5", bgColor: "bg-zinc-300", position: "justify-center sm:items-end"},
        {header: "6", bgColor: "bg-sky-300", position: "items-center sm:items-center"},
        // {header: "7", bgColor: "bg-purple-300", position: "justify-end sm:justify-end sm:items-center"},
        // {header: "8", bgColor: "bg-red-200", position: "items-center justify-center sm:justify-end sm:items-start"},
        // {header: "9", bgColor: "bg-lime-400", position: "justify-center sm:justify-end"},
        // {header: "10", bgColor: "bg-orange-200",position: "items-center sm:justify-end sm:items-end" },
        // {header: "11", bgColor: "bg-teal-300", position: "items-center justify-end sm:items-end"},
        // {header: "12", bgColor: "bg-amber-100", position: "items-center justify-center sm:justify-end sm:items-end"}
      ]),
      profilePicture = ref({svgFile: "ProfilePicture", fill: "white", ajustToHeight: "100%"})


onMounted(() => {
  gsap.to(".gsap-testing-activator", {
    scrollTrigger: {
      trigger: ".gsap-testing-activator",
      pinnedContainer: "main",
      start: "top center",
      scrub: true,
      pin: "main",
      markers: "true",
      toggleAction: " restart none none none",
      // toggleClass: "pin"
    }
  })

  gsap.to(".gsap-testing-activator", {
    scrollTrigger: {
      trigger: ".fade-in",
      pinnedContainer: "main",
      start: "top 0",
      end: "bottom 0",
      scrub: true,
      pin: "main",
      markers: "true",
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
    <div class="h-40"></div>
    <div class="h-80 bg-primary">
      <ProfilePicture :svgOptions="profilePicture" />

    </div>
    <div class="h-40 bg-secondary">
      <ProfilePicture :svgOptions="profilePicture" />
    </div>
    <div class="p-12 h-38 border my-2">
      Hi and welcome to my sandbox.
    </div>
    <div class="p-12">
      <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, laudantium incidunt molestias in fugiat architecto perspiciatis facilis earum repudiandae vitae. Illum consequuntur totam maiores mollitia? Ad, voluptatibus similique. Tempore, corrupti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic eos fugiat cum quis dolorum blanditiis in nesciunt. Libero debitis aut a tempora excepturi sequi adipisci, et repudiandae aliquam voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, pariatur vel soluta autem, labore at vero dolores, quas nam assumenda deleniti natus nesciunt temporibus inventore adipisci eum perferendis distinctio. Maxime.</h4>
    </div>
    <div class="h-28" ></div>
    <div id="bubbleContainer" class="bg-primary sm:mx-10 sm:rounded-lg p-4">
      <h3 class="text-slate-50 font-black">My Bubbles</h3>
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
    <div class="w-full h-48 border my-2">
      <h3>My Skills</h3>
      <!-- list of items -->
      <ul class="grid grid-cols-4">
        <li>Vue 3</li>
        <li>Pinia</li>
        <li>Git</li>
        <li>Gitlab</li>
        <li>Github</li>
        <li>Bitbucket</li>
        <li>Foundation</li>
        <li>Tailwind</li>
        <li>Node</li>
        <li>Javascript</li>
        <li>DigitalOcean</li>
        <li>Heroku</li>
        <li>Docker</li>
        <li>Twig</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>GA</li>
      </ul>
    </div>
    <div class="h-80"></div>
    <div class="h-80"></div>
    <h2 class="gsap-testing">Testing Gsap</h2>
    <div class="h-80"></div>
    <div class="gsap-testing-activator h-80 bg-teal-200 w-full border my-2">
      <h2>What is this?</h2>
      <!-- <ProfilePicture :svgOptions="profilePicture" /> -->
      <p></p>
      <h4>Scroll and add elements to this container</h4>
      <div class="fade-in h-20 w-20 bg-primary"></div>
      <RouterLink to="/sandbox">See my Sandbox</RouterLink>
    </div>
    <!-- <button class="custor-pointer my-12" @click="testing">activating gsap testing</button> -->
    <div class="h-80"></div>
    <div class="h-80"></div>
    <div class="h-80"></div>
    <div class="h-80"></div>
    <div class="h-80"></div>
  </div>
</template>

<style scoped>


.pin {
  position: fixed;
  bottom: 0;
  /* variable for border */
  left: 2.5rem;
  background-color: green;
  width: calc(100% - 5rem);
}

</style>