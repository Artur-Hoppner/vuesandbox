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
  <div>
    <component :is="dynamicComponent" />
  </div>
</template>

<style scoped>
  svg {
    height: 100%;
    width: v-bind(svgOptions.ajustToHeight);
    fill: v-bind(svgOptions.fill);
  }
</style>
