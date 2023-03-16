<script setup>
import { shallowRef, watchEffect } from 'vue'

// {svgFile: "filename", fill: "", ajustToHeight: "", ajustTowidth: "", classes: "", watcher: true}

const props = defineProps(['svgOptions']),
      currentIcon = shallowRef(undefined)

if(props.svgOptions.watcher) {
  watchEffect(() => {
    import(`../../assets/icons/${props.svgOptions.svgFile}.vue`).then(val => {
        // val is a Module has default
      currentIcon.value = val.default
    })
  })
} else {
    import(`../../assets/icons/${props.svgOptions.svgFile}.vue`).then(val => {
    // val is a Module has default
    currentIcon.value = val.default
  })
}

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
  <div v-bind:title="props.svgOptions.svgFile" class="global-svg-icon flex items-center justify-center">
    <!-- <SvgFile /> -->
    <component :class="[props.svgOptions.classes ? props.svgOptions.classes : '']" :is="currentIcon" />
  </div>
</template>

<style>
  .global-svg-icon {
    height: v-bind(props.svgOptions.ajustToHeight);
    width: v-bind(props.svgOptions.ajustTowidth);    
  }

  .global-svg-icon svg {
    height: 100%;
    width: auto;
    fill: v-bind(props.svgOptions.fill);
  }
</style>