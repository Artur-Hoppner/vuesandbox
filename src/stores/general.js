import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router/index";

export const generalStore = defineStore('generalShit', () => {
  const userData = ref("artur")
  const AuthStore = ref(false)
 
  function testing() {
    console.log("yay")
  }

  function loggedIn() {
    console.log("AuthStore")
    AuthStore.value = true
    router.push({ name: "home" });


  }
  return { userData, AuthStore, testing, loggedIn }
})