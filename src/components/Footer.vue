<script setup>
  import { ref } from 'vue'
  import SvgIcon from '@/components/parts/SvgIcon.vue';

  const githubIcon = ref({svgFile: "github", fill: "black", ajustToHeight: "26px", link: "https://github.com/Artur-Hoppner/"});
  const lionkedinIcon = ref({svgFile: "linkedin", fill: "black", ajustToHeight: "26px", link: "https://www.linkedin.com/in/artur-h%C3%B6ppner/"});
  const dateYear = "copyright: Artur Höppner " + new Date().getFullYear();
</script>

<template>
  <footer class="absolute bottom-0 w-full">
    <a :href="githubIcon.link" target="_blank" rel="noopener noreferrer" class="block w-0">
      <SvgIcon class="hover:fill-slate-300 cursor-pointer" :svgOptions="githubIcon" />
    </a>
    <a :href="lionkedinIcon.link" target="_blank" rel="noopener noreferrer" class="block w-0">
      <SvgIcon class="hover:fill-slate-300 cursor-pointer" :svgOptions="lionkedinIcon" />
    </a>
    {{dateYear}}
  </footer>
</template>

