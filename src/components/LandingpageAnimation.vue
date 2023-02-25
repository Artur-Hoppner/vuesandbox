<script setup>
  import { ref, onMounted } from 'vue'
  import { generalStore } from '@/stores/general';

  const generalFunction = generalStore();
  let terminalString = ref("")
  let terminalString2 = ref("")
  const yayor = ("sudo restart nginx").split("")
  const yayor2 = ("Starting upp server on 17236.912313.361. Init port 56:39").split("")
  let displayAnimationBoolian = ref(false)

  function testingfunction() {
    for( let i = 0; i < yayor2.length; i++) {
      setTimeout(() => {
        terminalString2.value = terminalString2.value + yayor2[i]
      }, (i*5))
    }
  }

  onMounted(() => {
    displayAnimationBoolian.value = generalFunction.cookieConsentStatus

    if(!displayAnimationBoolian.value){
      document.body.style.overflow = "hidden"
    }

    for( let i = 0; i < yayor.length; i++) {
      setTimeout(() => {
        terminalString.value = terminalString.value + yayor[i]
      }, (i*100)+2400)
    }

    setTimeout(() => {
      testingfunction()
    }, 5200)

    setTimeout(() => {
      displayAnimationBoolian.value = true;
      document.body.style.overflow = "visible"
      }, 7000)
  })

</script>

<template>
  <div v-if="!displayAnimationBoolian" class="text-gray-7 00 flex items-center justify-center flex-col bg-gray-50 fixed top-0 left-0 w-full h-full z-40">
    <p class="text-grey-500 text-8xl font-extrabold">404</p>
    <p class="text-2xl py-4">Page not found.</p>
    <p>The page you are looking for does not exist or an other error occurred.</p>
  </div>
  <div v-if="!displayAnimationBoolian" :class="!displayAnimationBoolian ? 'terminal-container' : ''" class="text-gray-7 00 flex items-center justify-center flex-col bg-gray-50 fixed top-0 left-0 w-full h-full z-40">
    <div class="w-full h-72 flex items-center z-50">
      <div class="w-1/2 sm:w-1/3 mx-auto">
        <div class="w-full shadow-2xl subpixel-antialiased rounded-b-md rounded-t-lg h-80 bg-black border-black mx-auto">
          <div class="flex items-center h-6 rounded-t-md bg-gray-200 border-b border-gray-500 text-center text-black" id="headerTerminal">
            <div class="flex ml-2 items-center text-center border-red-900 bg-red-500  hover:bg-red-400 shadow-inner rounded-full w-3 h-3" id="closebtn">
            </div>
            <div class="ml-2 border-yellow-900 bg-yellow-500 hover:bg-yellow-400 shadow-inner rounded-full w-3 h-3" id="minbtn">
            </div>
            <div class="ml-2 border-green-900 bg-green-500 hover:bg-green-400 shadow-inner rounded-full w-3 h-3" id="maxbtn">
            </div>
            <div class="mx-auto pr-16" id="terminaltitle">
              <p class="text-center text-sm">Terminal</p>
            </div>

          </div>
          <div class="text-left pl-1 pt-1 h-auto text-green-200 font-mono text-xs bg-black" id="console">
            <!-- <p class="pb-1">Last login: {{ todaysDate }}</p> todaysDate -->
            <p class="pb-1">Last login: Sun Feb 12 11:40:06 on ttys001</p>
            <p class="pb-1">@Artur-Root Documents %  {{ terminalString }}<span class="terminal-marker">|</span></p>
            <p class="pb-1">{{ terminalString2 }}</p>
            <p class="hidden visible pb-1">@Artur-Root Documents % <span class="terminal-marker">|</span></p>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .invert:hover > img {
  	filter:invert(100%);
  }

  .terminal-marker {
    -webkit-animation: type3 5s steps(20, end), blink .5s step-end infinite alternate;
  animation: type3 5s steps(20, end), blink .5s step-end infinite alternate;
  }

  .terminal-container {
    animation-name: transport;
    animation-duration: 6.5s;
    visibility: hidden;

  }

  @keyframes transport {
    0% {
      visibility: visible;

      opacity: 0;
    }
    11% {
      opacity: 0;

    }
    12% {
      opacity: 100%;

    }
    99% {
      opacity: 100%;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @-webkit-keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>