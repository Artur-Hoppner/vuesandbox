<script setup>
  import { ref } from 'vue'
  import CopyRight from './FooterCopyRight.vue';

  const dateYear = "copyright: Artur Höppner " + new Date().getFullYear()
</script>

<template>
  <footer class="mb-1">
    <CopyRight :dateYear="dateYear"   />
  </footer>
</template>

