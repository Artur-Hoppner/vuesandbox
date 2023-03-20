

<script setup>
import { ref, onMounted } from 'vue'
import { userAuthentication } from '@/stores/authentication';

const authentication = userAuthentication()
const routerUserLogin = ref("Login")
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
</script>

<template>
  <div id="menu" class="flex flex-col items-end xl:invisible">
    <div id="menu-bar" @click="menuOnClick">
      <div id="bar1" class="bar bg-white"></div>
      <div id="bar2" class="bar bg-white"></div>
      <div id="bar3" class="bar bg-white"></div>
    </div>
    <nav class="nav" id="nav">
      <ul class="text-left">
        <li><RouterLink  to="/">Home</RouterLink></li>
        <li><RouterLink to="/sandbox">Sandbox</RouterLink></li>
        <li v-if="authentication.authenticatedUser"><RouterLink to="/styleguide">Styleguide</RouterLink></li>
        <!-- <li> <Router-link to="/logout">{{ authentication.routerLinkString }}</Router-link></li> -->
      </ul>
    </nav> 
  </div>
  <div class="menu-bg bg-secondary opacity-90" id="menu-bg"></div>
</template>

<style lang="scss" scoped>

body {
  font-family: 'Roboto', sans-serif;
  background-color: #6C7A86 ;
}

#menu {
  z-index: 2;
}

#menu-bar {
  width: 45px;
  height: 40px;
  margin: 20px 15px 0;
  cursor: pointer;
}

.bar {
  height: 5px;
  width: 100%;
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
}

#bar1 {
  transform: translateY(-4px);
}

#bar3 {
  transform: translateY(4px);
}

.nav {
  transition: 0.3s ease;
  display: none;
}

.nav ul {
  padding-right: 20px;
}

.nav li {
  list-style: none;
  padding: 12px 0;
}

.nav li a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

.nav li a:hover {
  text-decoration: underline;
  
}

.menu-bg, #menu {
  top: 0;
  right: 0;
  position: absolute;
}

.menu-bg {
  z-index: 1;
  width: 0;
  height: 0;
  margin: 20px 15px 0;
  border-radius: 50%;
  transition: 0.3s ease;
}

.change {
  display: block;
}

.change .bar {
  background-color: white;
}

.change #bar1 {
  transform: translateY(4px) rotateZ(-45deg);
}

.change #bar2 {
  opacity: 0;
}

.change #bar3 {
  transform: translateY(-6px) rotateZ(45deg);
}

.change-bg {
  width: 520px;
  height: 460px;
  transform: translate(55%,-35%);
}

</style>