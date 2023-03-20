<script setup>
import {onMounted, ref} from 'vue';
import Listing from '@/components/projects/Listing.vue'
import { useMouse } from '@/composables/mousePosition.js';
import { debouncer } from '@/composables/debouncer.js';
import StoreToRef from '@/components/StoreToRef.vue';
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
      answerOfArrays = []
//__________________________



// Testing algoritm of what numbers from 1-100 that can both be divided på 3 and 5
onMounted(() => {
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
    <StoreToRef />
    <button @click="debouncedFunction" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">Debouncer Function</button>
    <!-- ADD A TOGGLE COMPONENT WITH FUNCTION TO NOT SHOW ALL PROJETS AT THE SAME TIME -->
    <!-- Refactor code and migraste css to tailwind/sass -->
    <Listing />
  </div>
</template>