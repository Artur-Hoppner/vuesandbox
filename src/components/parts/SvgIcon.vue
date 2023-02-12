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

// https://stackoverflow.com/questions/65950655/dynamic-component-in-vue3-composition-api
// Watcheffect kan help with dynamicly importing/changing svgicon. May only have one svg icon component instead of 2.
//   watchEffect(() => {
//   import(`../icons/icon-${props.name}.vue`).then(val => {
//     currentIcon.value = val.default
//   })
// })



// import { defineComponent, shallowRef, watchEffect } from 'vue'

// export default defineComponent({
//   props: {
//     svgOptions: {
//       type: Object,
//       required: true,
//     },
//   },
//   setup(props) {
//     // use shallowRef to remove unnecessary optimizations
//     const currentIcon = shallowRef('')


// watchEffect(() => {
//     import(`../../assets/icons/${props.svgOptions.svgFile}.vue`).then(val => {
//       // val is a Module has default
//       currentIcon.value = val.default
//     })
// })


//     return {
//       currentIcon
//     }
//   }
// })

//     <svg v-if="currentIcon" width="100%" viewBox="0 0 24 24" :aria-labelledby="name">
//       <component :is="currentIcon" />
//     </svg>

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
