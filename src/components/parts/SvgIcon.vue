<script setup>
import { shallowRef, watchEffect } from 'vue'

// {svgFile: "filename", fill: "", ajustToHeight: "", ajustTowidth: "", svgWidth: "" classes: "", watcher: true}

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
  <div v-bind:title="props.svgOptions.svgFile" :class="[`h-full global-svg-icon flex items-center justify-center`, props.svgOptions.containerClasses ? props.svgOptions.containerClasses : '']">
      <!-- <SvgFile :class="[props.svgOptions.svgClasses ? props.svgOptions.svgClasses : '']" :is="currentIcon"  /> -->
      <component :class="[props.svgOptions.svgClasses ? props.svgOptions.svgClasses : '']" :is="currentIcon" />
  </div>
</template>

<style>
</style>