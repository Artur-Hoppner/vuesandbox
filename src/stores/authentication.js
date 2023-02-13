import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router/index";

export const userAuthentication = defineStore('authentication', () => {

  const authenticatedUser = ref(false),
        routerLinkString = ref("Login")

  // check if user is logged in.
  if(localStorage.getItem('user')) {
    authenticatedUser.value = true
    routerLinkString.value = "Logout"
  }

  function loggedIn(userData) {
    if (userData.userName == "" && userData.password == "") {
      // this is temporary authentivcation until backend is finished and can send finished token with respons-data.
      localStorage.setItem('user', 'enkryptedToken');
      authenticatedUser.value = true
      router.push({ name: "home" });
      routerLinkString.value = "Logut"

    }
  }

  function logout() {
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user');
      authenticatedUser.value = false
      routerLinkString.value = "Login"
    }
  }

  return { authenticatedUser, routerLinkString, loggedIn, logout }
})