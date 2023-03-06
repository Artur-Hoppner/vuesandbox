<script setup>
import { ref } from 'vue';
import { userAuthentication } from '@/stores/authentication';
import HamburgeMenu from '@/components/parts/HamburgerMenu.vue';
import HamburgeMenu2 from '@/components/parts/HamburgerMenu2.vue';

const authentication = userAuthentication()
const routerUserLogin = ref("Login")
</script>

<template >
  <nav class="grid grid-cols-4  md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 text-center">
    <!-- <RouterLink  to="/">Home</RouterLink>
    <RouterLink to="/sandbox">Sandbox</RouterLink>
    <RouterLink v-if="authentication.authenticatedUser" to="/styleguide">Styleguide</RouterLink>
    <Router-link to="/logout">{{ authentication.routerLinkString }}</Router-link>
    <HamburgeMenu /> -->
    <HamburgeMenu2 />
  </nav>
</template>

<style scoped>

</style>