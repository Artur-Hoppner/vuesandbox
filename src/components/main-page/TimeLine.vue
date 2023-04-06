<script setup>


import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const timelineItems = [
        {position: "left", header: "header", text: "Text of the item"},
        {position: "right", header: "header", text: "Text of the item"},
        {position: "left", header: "header", text: "Text of the item"},
        {position: "left", header: "header", text: "Text of the item"},
        {position: "right", header: "header", text: "Text of the item"}
      ],
      headers = ['.timeline-0', '.timeline-2', '.timeline-3']

onMounted(() => {
  animateOnScroll();
})
  
function animateOnScroll() {
  for (let index = 0; index < timelineItems.length; index++) {
    gsap.from(`.timeline-${index}`, {
      duration: 2,
      x: timelineItems[index].position === 'left' ? -50 : 50,
      opacity: 0,
      scrollTrigger: {
        trigger: `.timeline-${index}`,
        start: '2100',
        toggleActions: 'play none none none',
      }
    })
    
  }
  // headers.forEach(header => {
  //   gsap.from(header, {
  //     duration: 5,
  //     x: header === '.group2' ? 100 : -100,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: header,
  //       start: '2400',
  //       toggleActions: 'play none none none',
  //     }
  //   })
  // })
}

</script>

<template>
  <div class="container w-11/12 md:w-4/5 max-w-5xl">
    <div
      class="flex flex-col md:grid grid-cols-9 mx-auto text-blue-50"
    >
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
            class="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
          >
            <h3 class="font-semibold text-lg mb-1">
              {{items.header}}
            </h3>
            <p class="leading-tight text-justify">
              {{ items.text }}  
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

        <!-- right timeline item -->
        <div
          v-if="items.position === 'right'"
          class="flex md:contents"
        >
          <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary pointer-events-none"></div>
            </div>
            <div
              class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow"
            ></div>
          </div>
          <div
            :class="`timeline-${index}`"
            class="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
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




<!-- 


  <script setup>


import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

    animateOnScroll();
  })
  
  function animateOnScroll() {

      const headers = ['.group1']
      // eslint-disable-next-line arrow-parens
      headers.forEach(header => {
        console.log(header)
        gsap.from(header, {
          duration: 20,
          x: 400,
          opacity: 0,
          scrollTrigger: {
            trigger: header,
            start: 'top 50%',
            toggleActions: 'restart none none none',
            markers: true
          }
        })
      })
      const headers2 = ['.group2']
      // eslint-disable-next-line arrow-parens
      headers2.forEach(header => {
        console.log(header)
        gsap.from(header, {
          duration: 20,
          x: 400,
          opacity: 0,
          scrollTrigger: {
            trigger: header,
            start: 'top 50%',
            toggleActions: 'restart none none none',
            markers: true
          }
        })
      })
    }

</script>

<template>
  <div id="app">
    <div class="group1">
        <h1>Title One</h1>
        <p>body text here</p>
    </div>

    <div class="group">
        <h1>Title Two</h1>
        <p>body text here</p>
    </div>
    <div class="group">
        <h1>Title Two</h1>
        <p>body text here</p>
    </div>
    <div class="group">
        <h1>Title Two</h1>
        <p>body text here</p>
    </div>
    <div class="group">
        <h1>Title Two</h1>
        <p>body text here</p>
    </div>
    <div class="group">
        <h1>Title Two</h1>
        <p>body text here</p>
    </div>
    <div class="group">
        <h1>Title Two</h1>
        <p>body text here</p>
    </div>
    <div class="group">
        <h1>Title Two</h1>
        <p>body text here</p>
    </div>
    <div class="group">
        <h1>Title Two</h1>
        <p>body text here</p>
    </div>
    
    <div class="group2">
        <h1>Title Three</h1>
        <p>body text here</p>
    </div>

  </div>
</template>
 -->