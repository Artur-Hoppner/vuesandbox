<script setup>

</script>

<template>
  <div class="mt-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1">
    <div class="flex items-center justify-center">
      <input id="inputText" type="text" placeholder="text">
    </div>

    <div class="flex items-center justify-center">
      <input id="inputCheckbox" type="checkbox">
    </div>

    <div class="flex items-center justify-center">
      <input id="inputData" type="date">
    </div>

    <div class="flex items-center justify-center">
      <input id="inputFile" type="file">
    </div>
    <div class="flex items-center justify-center">
      <input id="inputNumber" type="number" placeholder="number">
    </div>

    <div class="flex items-center justify-center">
      <input id="inputPassword" type="password" placeholder="password">
    </div>

    <div class="flex items-center justify-center">
      <label for="inputRadio">radio</label>
      <input id="inputRadio" type="radio">
    </div>

    <div class="flex items-center justify-center">
      <input id="inputRange" type="range">
    </div>

    <div class="flex items-center justify-center">
      <input type="search" placeholder="search" >
    </div>

    <div class="flex items-center justify-center">
      <input id="inputTel" type="tel">
    </div>

  </div>
</template>