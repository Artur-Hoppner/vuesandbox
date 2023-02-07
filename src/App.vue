<script setup>
  import { ref } from 'vue'
  import Nav from './components/header/userNav.vue';
  import CopyRight from './components/copyRight.vue';
  import { userAuthentication } from '@/stores/authentication';
  import { colorPreferenceStore } from '@/stores/darkMode';


  const authentication = userAuthentication(),
        dateYear = ref("copyright: Artur Höppner " + new Date().getFullYear()),
        generalStoreData = colorPreferenceStore();
</script>

<template>
  <header class="dark:bg-black bg-red-300">
    <button class="btn-primary" @click="generalStoreData.toggleDarkmode()">
      {{generalStoreData.colorModeString}}
    </button>
    <img alt="Vue logo" class="logo p-1.5" src="@/assets/ahlogo.png" width="80" height="80" />
    <div v-if="authentication.authenticatedUser" class="wrapper">
      <Nav />
    </div>
  </header>

  <main class="mx-10">
    <RouterView />
  </main>

  <footer class="mb-1">
    <!--  Change linked in. Jumps when page is loaded. Maybe load in lader (hmtl commad? der) -->
  <!-- <div>
    <a href="https://www.linkedin.com/profile/add?startTask=VueJS&name=Test%20Certificate&organizationId=1337&issueYear=2023&issueMonth=2&expirationYear=2020&expirationMonth=5&certUrl=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Flearn%2Fcertifications%2Fd365-functional-consultant-sales&certId=1234">
      <img 
        src="https://download.linkedin.com/desktop/add2profile/buttons/en_US.png " 
        alt="LinkedIn Add to Profile button"
        target="_blank"
      >
    </a>
  </div> -->
    <CopyRight :dateYear="dateYear" />
  </footer>
</template>

<style scoped>

</style>
