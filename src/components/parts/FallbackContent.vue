<script setup>
import { ref } from 'vue'
const loadUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Finished loading',
        
      })
    }, 2000)
  })
}

const userData = ref(await loadUserData())
</script>


<template>
  <h3>{{ userData.name }}</h3>
</template>