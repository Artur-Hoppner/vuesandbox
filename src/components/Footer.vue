<script setup>
  import { ref } from 'vue'
  
  const dateYear = "copyright: Artur Höppner " + new Date().getFullYear();
</script>

<template>
  <footer class="absolute bottom-0 w-full">

    {{dateYear}}
  </footer>
</template>

