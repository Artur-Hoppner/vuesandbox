<script setup>
  import { onMounted } from 'vue'
  import { generalStore } from '@/stores/general';
  
  const settingCookieValue = {
    name: "Cookie Concent",
    value: "accepted",
    expires: "" // empty means no expiration date
  };
  const generalFunction = generalStore();

  function cookieConsent() {
    generalFunction.setCookies(settingCookieValue);
    generalFunction.cookieConsentStatus = !generalFunction.cookieConsentStatus;
  }

  onMounted(() => {
    generalFunction.cookieConsentStatus = generalFunction.getCookies(settingCookieValue.name);
  })
</script>

<template>
  <div v-if="!generalFunction.cookieConsentStatus" class="flex justify-center items-center fixed bottom-0 w-full h-44 bg-slate-50 border-t-2 border-slate-100">
    <div class="flex rounded justify-center px-4 md:px-14">
      <p class="px-4"> Grundläggande cookies sparas för att kunna använda sidan optimalt. Genom att trycka ok godkänner du att cookies sparas tillfälligt på sidan.</p>
      <button class="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded text-2xl" @click="cookieConsent()">ok</button>
    </div>
  </div>
</template>