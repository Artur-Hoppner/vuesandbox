<script setup>

</script>

<template>
  <div class="mt-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-1">
    <button id="btn" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Primary Button
    </button>
    <button id="primaryButton" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Secondary Button
    </button>
    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
      Disabled button
    </button>
  </div>
</template>