<script setup>
  import { ref } from 'vue'
  import SvgIcon from '@/components/parts/SvgIcon.vue';

  const loadingScreen = ref({svgFile: "pikachu", fill: "white", ajustToHeight: "100%"})
</script>

<template>
  <div class="loading-screen bg-neutral-800  absolute top-0 left-0  flex justify-center justify-items-center items-center z-50 h-full w-full">
    <SvgIcon :svgOptions="loadingScreen" />
  </div>

  <div>
    <h1>Vincents önskelista</h1>
    <p class="text-primary"> Hej snart är det min födelsedag. Här är min önskelista!</p>
    <ul>
      <li>Gravitax 400-700kr</li>
      <li><a href="https://cdon.se/leksaker/pokemon-sword-shield-11-lost-origin-elite-trainer-box-p111482130?gclid=CjwKCAiA3KefBhByEiwAi2LDHAgZqlKLPeITEWQ_gobqoREsag8wraGdUopD4-sJN4hD3na6lj9gtxoC-AUQAvD_BwE" target="_blank" rel="noopener noreferrer">Giratina Box 500 kr</a></li>
      <li><a href="https://www.teknikproffset.se/leksaker-barn-babyprodukter/leksaker-2/sallskapsspel/barnspel/pokemon-tcg-pokemon-go-elite-trainer-box?gclid=CjwKCAiA3KefBhByEiwAi2LDHFaobr-lC1OOzeA04A5LmRlAydAreDpCZOt6SO_kPmcrQxOsyJbPEhoCFDQQAvD_BwE" target="_blank" rel="noopener noreferrer">Pokémon TCG: Pokémon GO - Elite Trainer Box 500kr </a></li>
      <li><a href="https://www.spelochsant.se/products/view/id/42601?ref=prisjakt">Pokemon TCG Sword & Shield Fusion Strike Elite Trainer Box 549 Kr</a></li>
    </ul>
    <p>arceusboxen från Mamma och Pappa</p>
    <li><a href="https://toyspace.se/pokemon-tcg-swsh10-astral-radiance-build-and-battle-stadium-stor-lada-med-kort-pok85040" target="_blank" rel="noopener noreferrer">Pokémon TCG: Sword & Shield - Brilliant Stars Build & Battle Stadium</a></li>
    eller
    <li><a href="https://www.amazon.se/Pok%C3%A9mon-TCG-Brilliant-Stadium-Boosters/dp/B09L5G7LKW/ref=asc_df_B09L5G7LKW/?tag=shpngadsglede-21&linkCode=df0&hvadid=476425745949&hvpos=&hvnetw=g&hvrand=15103660050916488645&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1012228&hvtargid=pla-1636004128225&psc=1" target="_blank" rel="noopener noreferrer">Pokémon TCG: Sword & Shield - Brilliant Stars Build & Battle Stadium</a></li>
    <p></p>
  </div>
</template>


<style>
.loading-screen {
  animation:2s fadeIn;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  visibility: visible;
}
@keyframes fadeIn {

  85% {
    opacity: 100%;

  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
}
</style>