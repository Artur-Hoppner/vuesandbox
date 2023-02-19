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
</style>
