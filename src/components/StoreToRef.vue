<script setup>
import { watch } from 'vue'
import { generalStore } from '@/stores/general';
import { storeToRefs } from 'pinia';

  const { standardCounderRef } = storeToRefs(generalStore())
  const { incrementButton } = generalStore()

  console.log(standardCounderRef)

  watch(() => standardCounderRef.value, (n) => console.log(n, " value changed"));
</script>

<template>
  <div>
    <h2>Counter: {{ standardCounderRef }} </h2>
    <button @click="incrementButton">Press to Increment</button> 

  </div>
</template>



