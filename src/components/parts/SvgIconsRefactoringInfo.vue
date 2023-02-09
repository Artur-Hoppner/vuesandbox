<!-- Potintial refactoring using Composition Api but need to install:<template> -->
<!-- https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations -->

<script setup>
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