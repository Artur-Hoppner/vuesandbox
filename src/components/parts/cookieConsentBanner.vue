<script setup>
import { ref, onMounted } from 'vue'
import { generalStore } from '@/stores/general';  
  const settingCookieValue = {
      name: "Cookie Concent",
      value: "accepted",
      expires: "" // empty means no expiredate
    };
  let cookieConsentToggle = ref(false);

  const generalFunction = generalStore();

  function cookieConsent() {
    generalFunction.setCookies(settingCookieValue);
    cookieConsentToggle.value = !cookieConsentToggle.value;
  }

  onMounted(() => {
    cookieConsentToggle.value = generalFunction.getCookies(settingCookieValue.name);
  })
</script>

<template>
  <div class="flex justify-center sticky bottom-12" v-if="!cookieConsentToggle">
    <div class="w-34 bg-teal-100 p-4 rounded">
      <p> Grundläggande cookies sparas för att kunna använda sidan optimalt. Genom att trycka ok godkänner du cookies sparas tillfälligt på sidan.</p>
      <button @click="cookieConsent()">ok</button>
    </div>
  </div>
</template>