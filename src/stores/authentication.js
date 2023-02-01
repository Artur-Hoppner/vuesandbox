import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router/index";

export const userAuthentication = defineStore('authentication', () => {

  const authenticatedUser = ref(false)

  // check if user is logged in.
  if(localStorage.getItem('user')) {
    authenticatedUser.value = true
  }

  function loggedIn(userData) {
    if (userData.userName == "" && userData.password == "") {
      // this is temporary authentivcation until backend is finished and can send finished token with respons-data.
      localStorage.setItem('user', 'enkryptedToken');
      console.log("set local storage", localStorage.getItem('user'))
      authenticatedUser.value = true
      router.push({ name: "home" });
    }
  }

  function logout() {
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user');
      authenticatedUser.value = false
    }
  }

  return { authenticatedUser, loggedIn, logout }
})