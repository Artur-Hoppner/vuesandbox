<script setup>
const props = defineProps({
  dateYear: {
    type: String,
    required: true
  }
  })

// defineProps({
//   dateYear: {
//     type: String,
//     required: true
//   }
// })  
</script>

<template>
  <div>
    <p> {{ dateYear }} </p>
  </div>
</template>

