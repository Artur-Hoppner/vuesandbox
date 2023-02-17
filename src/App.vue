<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import CookieConsent from './components/parts/cookieConsentBanner.vue'
</script>

<template>
  <Header />

  <!-- Fix Animation -->
<!-- [Vue Router warn]: <router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead: -->
  <!-- <router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
  </router-view> -->

  <main class="sm:mx-10">
      <transition name="route" mode="out-in" appear>
    <RouterView />
  </transition>
  </main>
  <Footer />
  <CookieConsent />
</template>

<style>
#app {text-align:center}

.route-enter-from {
  opacity: 0;
  /* transform: translateY(100px) */
}

.route-enter-active,
.route-leave-active {
  transition: all .4s ease-out
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px)
}
</style>