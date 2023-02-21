<script setup>
  import { ref } from 'vue'
  import SvgIcon from '@/components/parts/SvgIcon.vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import CookieConsent from './components/parts/cookieConsentBanner.vue'

  const loadingScreen = ref({svgFile: "pikachu", fill: "white", ajustToHeight: "100%"}),
        givenFadeOutClass = ref({svgFile: "pikachu", fill: "white", ajustToHeight: "100%"}),
        birthdayWishlist = false

</script>

<template>
  <div v-if="birthdayWishlist" class="loading-screen bg-neutral-800  absolute top-0 left-0  flex justify-center justify-items-center items-center z-50 h-full w-full">
    <SvgIcon :svgOptions="loadingScreen" />
  </div>
  <div v-if="birthdayWishlist">
    <h1>Vincents önskelista</h1>
  </div>
  <div v-if="!birthdayWishlist">
    <Header />
    
    <main class="sm:mx-10">
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <transition name="slide-fade">
            <suspense timeout="0">
              <component :is="Component" :key="$route.path"></component>
              <template #fallback>
                <div>Loading...</div>
              </template>
            </suspense>
          </transition>
        </template>
      </router-view> 
    </main>
    
    <Footer />
    <CookieConsent />
  </div>
</template>

<style>
#app {text-align:center}

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