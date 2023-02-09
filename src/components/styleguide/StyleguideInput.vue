<script setup>

</script>

<template>
  <div class="mt-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1">
    <div>
      <label for="inputText">text</label>
      <input id="inputText" type="text" placeholder="text">
    </div>

    <div>
      <label for="inputCheckbox">checkbox</label>
      <input id="inputCheckbox" type="checkbox">
    </div>

    <div>
      <label for="inputData">date</label>
      <input id="inputData" type="date">
    </div>

    <div>
      <label for="inputFile">file</label>
      <input id="inputFile" type="file">
    </div>
    <div>
      <label for="inputNumber">number</label> 
      <input id="inputNumber" type="number" placeholder="number">
    </div>

    <div>
      <label for="inputPassword">password</label>
      <input id="inputPassword" type="password" placeholder="password">
    </div>

    <div>
      <label for="inputRadio">radio</label>
      <input id="inputRadio" type="radio">
    </div>

    <div>
      <label for="inputRange">range</label>
      <input id="inputRange" type="range">
    </div>

    <div>
      <label for="inputSearch">range</label>
      <input type="search" placeholder="search" >
    </div>

    <div>
      <label for="inputTel">tel</label>
      <input id="inputTel" type="tel">
    </div>

  </div>
</template>