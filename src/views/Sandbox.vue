<script setup>
import {onMounted, ref} from 'vue'
import SvgIcon from '@/components/parts/SvgIcon.vue';
import FallbackContent from '@/components/parts/FallbackContent.vue';
import { useMouse } from '@/composables/mousePosition.js';
const { positionX, positionY } = useMouse()

const arrayOf = [],
      answerOfArrays = [],
      testingThis = ref({svgFile: "pikachu", fill: "white", ajustToHeight: "100%"}),
      timeOutSuspense = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              object: "Testing of VUE 3 Experimental Feature Suspense"
            })
          }, 1000)
        })
      },
      testingSuspens = ref(await timeOutSuspense());

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
  {{ positionX }}{{ positionY }}
  <div >
    <!-- <img src="../assets/icons/charmander.ico" alt="">
    <img src="../assets/icons/mew.ico" alt=""> -->

  <!-- <div class="loading-screen">
    <SvgIcon :svgOptions="testingThis" />
  </div> -->

  </div>
</template>

<style  scoped>
</style>