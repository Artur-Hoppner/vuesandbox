<script setup>
  import { ref, onMounted } from 'vue'
  import SvgIcon from '@/components/parts/SvgIcon.vue';

  const loadingScreen = ref({svgFile: "pikachu", fill: "white", ajustToHeight: "100%"})


  onMounted(() => {
    document.body.style.overflow = "hidden"

    setTimeout(() => {
      document.body.style.overflow = "visible"
    }, 2000)
  })
</script>

<template>
  <div class="loading-screen bg-neutral-800  absolute top-0 left-0  flex justify-center justify-items-center items-center z-50 h-full w-full">
    <SvgIcon :svgOptions="loadingScreen" />
  </div>

  <div class="bg-gray-50 min-h-screen sm:px-12 py-6">
    <h1 class="text-3xl">Vincents önskelista</h1>
    <p class="text-1xl"> Hej, snart är det min födelsedag. Här är min önskelista!</p>
    <p class="text-xs text-gray-500  color-primary">Kolla gärna av innan ni köper så inte olika personer köper samma</p>
    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 lx:grid-cols-5 gap-10 mt-6">
      <a href="https://speltrollet.se/86-pokemon/pokemon-sword-shield-105-pokmon-go-elite-trainer-box" target="_blank" rel="noopener noreferrer" class="cursor-pointer mx-auto mt-1 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg border-2 border-gray-400 border-opacity-20">
        <img class="h-48 w-full object-cover object-center" src="https://quickbutik.imgix.net/20406I/products/6299e1e828c0c.jpeg" alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Pokemon Sword & Shield 10.5: Pokémon GO Elite Trainer Box</h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Box med pokemonkort.</p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">599kr</p>
          </div>
        </div>
      </a>
      <a href="https://speltrollet.se/86-pokemon/pokemon-sword-shield-10-astral-radiance-elite-trainer-box" target="_blank" rel="noopener noreferrer"  class="cursor-pointer mx-auto mt-1 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg border-2 border-gray-400 border-opacity-20">
        <img class="h-48 w-full object-cover object-center" src="https://quickbutik.imgix.net/20406I/products/6246f73747b64.png" alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Pokemon Sword & Shield 10 - Astral Radiance Elite Trainer Box</h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Box med pokemonkort.</p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">549kr</p>
          </div>
        </div>
      </a>
      <a href="https://speltrollet.se/86-pokemon/pokemon-sword-shield-11-lost-origin-elite-trainer-box" target="_blank" rel="noopener noreferrer" class="cursor-pointer mx-auto mt-1 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg border-2 border-gray-400 border-opacity-20">
        <img class="h-48 w-full object-cover object-center" src="https://quickbutik.imgix.net/20406I/products/630744872a1ed.jpeg" alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Pokemon Sword & Shield - Lost Origin Elite Trainer Box</h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Box med pokemonkort.</p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">479kr</p>
          </div>
        </div>
      </a>
      <a href="https://speltrollet.se/pokemon-tillbehor/pokemon-sword-shield-astral-radiance-sleeves-65st" target="_blank" rel="noopener noreferrer" class="cursor-pointer mx-auto mt-1 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg border-2 border-gray-400 border-opacity-20">
        <img class="h-48 w-full object-cover object-center" src="https://quickbutik.imgix.net/20406I/products/63e6559f66459.jpeg" alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Pokemon Sword & Shield Astral Radiance Sleeves (65st)</h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Plastfickor för pokemonkort.</p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">49kr</p>
          </div>
        </div>
      </a>
      <a href="https://www.pricerunner.se/pl/1583-4595469/Nintendo-Switch-spel/Pokemon-Let-s-Go-Eevee%21-priser" target="_blank" rel="noopener noreferrer" class="cursor-pointer mx-auto mt-1 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg border-2 border-gray-400 border-opacity-20">
        <img class="h-48 w-full object-cover object-center" src="https://www.pricerunner.se/product/640x640/3000334866/Pokemon-Let-s-Go--Eevee!.jpg" alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Nintendo Switch Pokemonspel</h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Önskar sig inget specifikt spel och många av dem finns att köpa begagnat</p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">400-600kr</p>
          </div>
        </div>
      </a>
      <a href="https://www.pricerunner.se/pl/613-3201276626/Saellskapsspel/Pokemon-Sword-Shield-Astral-Radiance-Build-Battle-Stadium-priser" target="_blank" rel="noopener noreferrer" class="cursor-pointer mx-auto mt-1 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg border-2 border-gray-400 border-opacity-20">
        <img class="h-48 w-full object-cover object-center" src="https://www.pricerunner.se/product/640x640/3004484881/Pokemon-Sword-Shield-Astral-Radiance-Build---Battle-Stadium.jpg" alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Pokémon TCG: Sword & Shield - Brilliant Stars Build & Battle Stadium (2 däck, 12 boosters och mer)</h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Plastfickor för pokemonkort</p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">800kr</p>
          </div>
        </div>
      </a>
      <a href="https://www.pricerunner.se/pl/613-3200347525/Saellskapsspel/Pokemon-Sword-Shield-Fusion-Strike-Elite-Trainer-Box-priser" target="_blank" rel="noopener noreferrer" class="cursor-pointer mx-auto mt-1 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg border-2 border-gray-400 border-opacity-20">
        <img class="h-48 w-full object-cover object-center" src="https://www.pricerunner.se/product/640x640/3002728545/Pokemon-Sword-Shield-Fusion-Strike-Elite-Trainer-Box.jpg" alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Pokémon Sword & Shield Fusion Strike Elite Trainer Box

</h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Plastfickor för pokemonkort</p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">549kr</p>
          </div>
        </div>
      </a>
    </div>

    
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


<style scoped>

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