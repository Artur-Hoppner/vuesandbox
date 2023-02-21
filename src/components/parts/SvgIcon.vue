<script>
import { defineAsyncComponent } from 'vue';

export default {
  props: {
    svgOptions: {
      type: Object,
      required: true,
    },
  },

  computed: {
    dynamicComponent() { 
      const filepath = this.svgOptions.svgFile;
      return defineAsyncComponent(() => import(`../../assets/icons/${filepath}.vue`));
    },
  },

};
</script>

<template>
  <component :is="dynamicComponent" />
</template>

<style scoped>
  svg {
    height: v-bind(svgOptions.ajustToHeight);
    width: v-bind(svgOptions.ajustToHeight);
    fill: v-bind(svgOptions.fill);
  }

  .st1{
/*   stroke-dasharray: 20; */
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  fill:none;
  stroke:#FCE070;
  stroke-width:29.3486;
  stroke-miterlimit:10;
  animation: sun 1s;
  animation-iteration-count: infinite;
}
@keyframes sun {
  0% {
    stroke-dashoffset: 120;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -120;
  }
}
</style>
