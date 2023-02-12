<!-- Potintial refactoring using Composition Api but need to install:<template> -->
<!-- https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations -->

<script setup>

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



import { defineAsyncComponent, ref } from 'vue'
const props = defineProps({
  svgOptions: Object
})

const color = props.svgOptions.fill

const asyncComp = defineAsyncComponent(() =>
  import(`../../assets/icons/IconDocumentation.vue`)
)

const renderComponent = async () =>
  defineAsyncComponent(
    () =>
      import(
        `../../assets/icons/IconDocumentation.vue`
      ),
  );
</script>


<template>
  <component :is="renderComponent()" />
  <asyncComp />
</template>