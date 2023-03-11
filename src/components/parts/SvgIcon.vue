<script setup>
import { shallowRef, watchEffect } from 'vue'

const props = defineProps({
        svgOptions: {
          type: Object,
          required: true
        }
      }),
      currentIcon = shallowRef(null)

watchEffect(() => {
  import(`../../assets/icons/${props.svgOptions.svgFile}.vue`).then(val => {
    currentIcon.value = val.default
  })
})
// watchEffect updates icon so dont need code bellow "Probably".
// import(`../../assets/icons/${props.svgOptions.svgFile}.vue`).then(val => {
//   // val is a Module has default
//   currentIcon.value = val.default
// })


//____________________________________________

// Alternative to importing.
// SvgFile = shallowRef(defineAsyncComponent(() =>
//   import(`../../assets/icons/${props.svgOptions.svgFile}.vue`)
// )),
</script>

<template>
  <div class="global-svg-icon">
    <!-- <SvgFile /> -->
    <component :is="currentIcon" />
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