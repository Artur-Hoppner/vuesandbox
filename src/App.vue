<script setup>
import Header from '@/components/Header.vue';
import VincentsWishlist from '@/components/VincentsWishlist.vue';
import Footer from '@/components/Footer.vue';
import CookieConsent from './components/parts/cookieConsentBanner.vue'
import TerminalAnimation from './components/LandingpageAnimation.vue'

const birthdayWishlist = true

</script>

<template>
  <VincentsWishlist v-if="birthdayWishlist" />
  <!-- fix body min height-100vh + position: relative -->
  <div v-if="!birthdayWishlist" class="min-h-screen relative">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <transition name="fade" appear>
            <suspense timeout="0">
              <component :is="Component" :key="$route.path"></component>
              <template #fallback>
                <!-- use suspense on components later on -->
                <div>Loading...</div>
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

<style>

#app {text-align:center}

.fade-enter-active {
  transition: opacity 2.6s;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
</style>