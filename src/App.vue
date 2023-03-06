<script setup>
import Header from '@/components/Header.vue';
import VincentsWishlist from '@/components/VincentsWishlist.vue';
import Footer from '@/components/Footer.vue';
import CookieConsent from './components/parts/cookieConsentBanner.vue'
import TerminalAnimation from './components/LandingpageAnimation.vue'
import Listing from '@/components/projects/Listing.vue'

const birthdayWishlist = true

</script>

<template>
  <Listing v-if="birthdayWishlist" />
  <!-- <VincentsWishlist v-if="birthdayWishlist" /> -->
  <!-- fix body min height-100vh + position: relative -->
  <div v-if="!birthdayWishlist" class="min-h-screen relative">
    <Header />
    <main class="sm:mx-10">
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



/* temporary code */
#app {
  min-height: 100vh;
}

body {
  font-family: 'Helvetica', 'Arial', sans-serif;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  padding: 0;
  margin: 0;
}

button {
  cursor: pointer;
  background-color: #fcd4a0;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  min-height: 20px;
  padding: 8px 7px;
}

button:hover {
  background-color: #f9e1c0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.33);
}

p {
  word-wrap: break-word;
}


/* unversal class for components single-joke and twopart-joke */

.listing-item-container {
  border: solid 2px v-bind(listItemColor);
}

.item-category {
  margin-top: 13px;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
}

.markt-favorite-item {
  position: absolute;
  top: -5px;
  right: 5px;
  transform: rotate(50deg);
  font-weight: bold;
  font-size: 20px;
  color: rgb(255, 255, 255);
}
.favorit-svg {
  position: absolute;

  top: 10px;
  right: 40px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: rgba(0, 0, 0, 0.533);
}

.favorit-color {
  fill: rgb(225, 84, 84);
  animation-name: bounceIn;
  animation-duration: 600ms;
}

@keyframes bounceIn {
  0% { 
     opacity: 0; 
     transform: scale(.3);
  }
  50% { 
     opacity: 1;
     transform: scale(1.05);
  }
  70% {
     transform: scale(.9);
  }
  100% {
     transform: scale(1);
  }
} 
</style>