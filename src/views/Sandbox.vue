<script setup>
import {onMounted, ref} from 'vue';
import SvgIcon from '@/components/parts/SvgIcon.vue';
import FallbackContent from '@/components/parts/FallbackContent.vue';
import Listing from '@/components/projects/Listing.vue'
import { useMouse } from '@/composables/mousePosition.js';
import { debouncer } from '@/composables/debouncer.js';
import StoreToRef from '@/components/StoreToRef.vue';
import gsap from 'gsap';
const { positionX, positionY } = useMouse()

// Debouncer testing:
const testStringDebouncer = "Debounder string parameter",
      debouncedFunction = debouncer( function() {saveInput(testStringDebouncer)}, 500)

function saveInput(parameter){
  console.log('Debouncer: ', parameter);
}
//__________________________



// Testing Suspense function
const arrayOf = [],
      answerOfArrays = [],
      timeOutSuspense = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              object: "Testing of VUE 3 Experimental Feature Suspense"
            })
          }, 500)
        })
      },
      testingSuspens = ref(await timeOutSuspense());
//__________________________



// Testing algoritm of what numbers from 1-100 that can both be divided på 3 and 5
onMounted(() => {
  gsap.to(".gtesting", {
    duration: 5.5,
    x: -400,
  });

  let numbertext = 0
  for (let i = 0; i < 1000; ++i) {
    numbertext = +i + 1
    // console.log(numbertext)
  arrayOf.push(numbertext)
  }
  
  for (let i = 0; i < 1000; ++i) {
    if(arrayOf[i] % 3 == 0 && arrayOf[i] % 5 == 0 ) {
        // console.log(arrayOf[i])
        answerOfArrays.push(arrayOf[i])
    }
  }
  // console.log(answerOfArrays)
})
</script>

<template>
  <div>
    <h3 class="gtesting">GSAP testing</h3>
    <transition name="slide-fade">
      <h2>Hejsan</h2>
    </transition>

    <StoreToRef />
    <button @click="debouncedFunction" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">Debouncer Function</button>

    <!-- Refactor code and migraste css to tailwind/sass -->
    <Listing />

  </div>
</template>

<style  scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>