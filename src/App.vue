<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <main class="mx-10">
    <RouterView />
  </main>
  <Footer />
</template>