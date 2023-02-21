<script setup>
import {onMounted, ref} from 'vue'
import SvgIcon from '@/components/parts/SvgIcon.vue';
import FallbackContent from '@/components/parts/FallbackContent.vue';

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
  <div >

    <h1>Vincents Önskelista</h1>
    <ul>
      <li>Gravitax 400-700kr</li>
      <li><a href="https://cdon.se/leksaker/pokemon-sword-shield-11-lost-origin-elite-trainer-box-p111482130?gclid=CjwKCAiA3KefBhByEiwAi2LDHAgZqlKLPeITEWQ_gobqoREsag8wraGdUopD4-sJN4hD3na6lj9gtxoC-AUQAvD_BwE" target="_blank" rel="noopener noreferrer">Giratina Box</a></li>
      <li><a href="https://www.teknikproffset.se/leksaker-barn-babyprodukter/leksaker-2/sallskapsspel/barnspel/pokemon-tcg-pokemon-go-elite-trainer-box?gclid=CjwKCAiA3KefBhByEiwAi2LDHFaobr-lC1OOzeA04A5LmRlAydAreDpCZOt6SO_kPmcrQxOsyJbPEhoCFDQQAvD_BwE" target="_blank" rel="noopener noreferrer">Pokémon TCG: Pokémon GO - Elite Trainer Box</a></li>
    </ul>

    <!-- <img src="../assets/icons/charmander.ico" alt="">
    <img src="../assets/icons/mew.ico" alt=""> -->


  <!-- <div class="loading-screen">
    <SvgIcon :svgOptions="testingThis" />
  </div> -->
        

  </div>
</template>

<style  scoped>
</style>