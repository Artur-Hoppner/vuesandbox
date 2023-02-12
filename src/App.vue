<script setup>
  import { ref } from 'vue'
  import Header from '@/components/Header.vue';
  import CopyRight from '@/components/CopyRight.vue';

  const dateYear = ref("copyright: Artur Höppner " + new Date().getFullYear())

</script>

<template>
  <Header />

  <main class="mx-10">
    <RouterView />
  </main>

  <footer class="mb-1">
    <CopyRight :dateYear="dateYear" />
  </footer>
</template>

<style scoped>

</style>
