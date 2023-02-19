<script setup>
import {onMounted} from 'vue'

const arrayOf = []
const answerOfArrays = []

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

  <div class="w-24 h-24 relative  bg-primary">
    <div class="absolute top-0 left-0 p-4  rounded-full bg-secondary"></div>
    <div class="absolute top-0 right-0 p-4 rounded-full bg-secondary"></div>
    <div class="absolute bottom-0 left-0 p-4 rounded-full bg-secondary"></div>
    <div class="absolute bottom-0 right-0 p-4 rounded-full bg-secondary"></div>
    <div class="absolute 	inset-x-2/4		 p-4 bg-warning rounded-full bg-secondary"></div>

  </div>
  <!-- <img src="../assets/icons/charmander.ico" alt="">
  <img src="../assets/icons/mew.ico" alt=""> -->
  
</div>
</template>