<script setup>
import Header from '@/components/Header.vue';
import VincentsWishlist from '@/components/VincentsWishlist.vue';
import Footer from '@/components/Footer.vue';
import CookieConsent from './components/parts/cookieConsentBanner.vue'
import TerminalAnimation from './components/LandingpageAnimation.vue'
import Loader from '@/components/parts/Loader.vue'


const birthdayWishlist = false

</script>

<template>
  <VincentsWishlist v-if="birthdayWishlist" />

  <!-- When remove this add min-h-screen to #app in index.html-->
  <div v-if="!birthdayWishlist" class="min-h-screen transition-colors duration-1000 relative">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <transition name="fade" appear>
            <suspense timeout="0">
              <component :is="Component" :key="$route.path"></component>
              <template #fallback>
                <!-- use suspense on components later on -->
                <Loader/>
              </template>
            </suspense>
          </transition>
        </template>
      </router-view> 
    </main>
    
    <Footer />
    <TerminalAnimation />

    <CookieConsent />

  </div>
</template>

<style lang="scss">



body {
  min-height: 100vh;
  min-height: 100svh;

  @media screen and (min-width: 768px) {
    min-height: 100vh;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align:center;
  }
}

// #app {
//   min-height: 100vh;

// }

.fade-enter-active {
  transition: opacity 0.7s;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
</style>