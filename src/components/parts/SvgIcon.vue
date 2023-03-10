<!-- <script>
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
</script> -->

<script setup>
import { defineAsyncComponent } from 'vue'
const props = defineProps({
  svgOptions: {
    type: Object,
    required: true
  }
  }),
      SvgFile= defineAsyncComponent(() =>
        import(`../../assets/icons/${props.svgOptions.svgFile}.vue`)
      )

      console.log(props.svgOptions.ajustToHeight)

  let testing = props.svgOptions.ajustToHeight

  
</script>

<template>
  <div class="global-svg-icon">
    <SvgFile />
  </div>
</template>

<style>
  .global-svg-icon {
    height: v-bind(props.svgOptions.ajustToHeight);
    width: v-bind(props.svgOptions.ajustTowidth);
  }

  .global-svg-icon svg {
    height: 100%;
    width: 100%;
    fill: v-bind(props.svgOptions.fill);
  }
</style>
