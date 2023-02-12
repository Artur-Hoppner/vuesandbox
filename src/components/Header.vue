<script setup>
import Nav from '@/components/HeaderNav.vue';
import { userAuthentication } from '@/stores/authentication';

const authentication = userAuthentication() 
</script>

<template>
  <header class="dark:bg-primary bg-secondary ">
    <img alt="Vue logo" class="logo p-1.5" src="@/assets/ahlogo.png" width="80" height="80" />
    <div v-if="authentication.authenticatedUser" class="wrapper">
      <Nav />
    </div>
  </header>
</template>