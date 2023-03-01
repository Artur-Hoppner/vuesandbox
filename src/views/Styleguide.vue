<script setup>
import StyleguideColors from '../components/styleguide/StyleguideColors.vue'
import StyleguideButtons from '../components/styleguide/StyleguideButtons.vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

</script>

<template>

  <div>
    <StyleguideColors />
    <StyleguideButtons />
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
      <a>a element</a>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 3.8vmin;
  }

  h2 {
    font-size: 3.2vmin;
  }

  h3 {
    font-size: 2.8vmin;
  }

  h4 {
    font-size: 2.4vmin;
  }

  h5 {
    font-size: 2.0vmin;

  }

  h6 {
    font-size: 1.6vmin;
  }

  p {
    font-size: 12px;
  }
</style>