<script setup>
</script>

<template>

  <div>
    <h1>styleguide</h1>
    <h2>Buttons</h2>
    <div id="buttonContainer">
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
    
    <h2>Input</h2>
    <div id="inputContainer">
      <label for="inputText">text</label>
      <input id="inputText" type="text" placeholder="text">

      <label for="inputCheckbox">checkbox</label>
      <input id="inputCheckbox" type="checkbox">

      <label for="inputData">date</label>
      <input id="inputData" type="date">

      <label for="inputFile">file</label>
      <input id="inputFile" type="file">

      <label for="inputNumber">number</label> 
      <input id="inputNumber" type="number" placeholder="number">

      <label for="inputPassword">password</label>
      <input id="inputPassword" type="password" placeholder="password">

      <label for="inputRadio">radio</label>
      <input id="inputRadio" type="radio">

      <label for="inputRange">range</label>
      <input id="inputRange" type="range">

      <label for="inputSearch">range</label>
      <input type="search" placeholder="search" >

      <label for="inputTel">tel</label>
      <input id="inputTel" type="tel">
    </div>

    <h2>html text</h2>
    <div id="textContainer">
      <h1>H1 </h1>
      <br>
      <h2>H2 </h2>
      <br>
      <h3>H3 </h3>
      <br>
      <h4>H4 </h4>
      <br>
      <h5>H5 </h5>
      <br>
      <h6>H6 </h6>
      <br>
      <p>p element</p>
      <a class="">a element</a>

    </div>
  </div>
</template>

<style>
</style>
