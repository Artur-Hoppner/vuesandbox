<script setup>
import Header from '@/components/Header.vue';
import VincentsWishlist from '@/components/VincentsWishlist.vue';
import Footer from '@/components/Footer.vue';
import CookieConsent from './components/parts/cookieConsentBanner.vue'
const birthdayWishlist = true

</script>

<template>
  <VincentsWishlist v-if="birthdayWishlist" />
  
  <div v-if="!birthdayWishlist">
    <Header />

    <main class="sm:mx-10">
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <transition name="fade">
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

.fade-enter-active {
  transition: opacity 0.6s;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
</style>