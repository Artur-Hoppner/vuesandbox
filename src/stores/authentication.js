import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router/index";

export const userAuthentication = defineStore('authentication', () => {
  const AuthStore = ref(false)

  function loggedIn(userData) {
    console.log("AuthStore", userData.value )
    AuthStore.value = true
    router.push({ name: "home" });
  }

  return { AuthStore, loggedIn }
})