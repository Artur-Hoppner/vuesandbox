<script setup>
import { ref } from 'vue';
import { userAuthentication } from '@/stores/authentication';
import { onMounted } from '@vue/runtime-core';
const authentication = userAuthentication()
const routerUserLogin = ref("Login")
</script>

<template >
  <nav class="grid grid-cols-4  md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 text-center">
    <RouterLink  to="/">Home</RouterLink>
    <RouterLink to="/sandbox">Sandbox</RouterLink>
    <RouterLink v-if="authentication.authenticatedUser" to="/styleguide">Styleguide</RouterLink>
    <Router-link to="/logout">{{ authentication.routerLinkString }}</Router-link>
  </nav>
</template>

<style scoped>

</style>