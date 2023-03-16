<script setup>
import { ref } from 'vue'
import SvgIcon from '@/components/parts/SvgIcon.vue';

const ajustHeight =  "50px",
      ajustWidth =  "50px",
      fill = "",
      skillSets = ref([
        { svgFile: "LanguageJavascript", fill: fill, ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageVue", fill: fill, ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguagePinia", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageNode", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageCss", fill: fill, ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageSass", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageTailwind", fill: fill, ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageFoundation", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageHTML", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageGsap", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageTwig", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth}
      ]),
      programingTools = ref([
        { svgFile: "LanguageGit", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageGitLab", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageGitHub", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageDigitalOcean", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageBitBucket", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageDocker", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "LanguageVsCode", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth},
        { svgFile: "GoogleAnalytics", fill: "#ffffff", ajustToHeight: ajustHeight, ajustTowidth: ajustWidth}
      ])
</script>

<template>
  <div>
    <div class="rounded bg-gray-50 mx-12 mt-3 p-8">
      <h4>Languages</h4> 
      <div class="grid grid-cols-3 md:grid-cols-4 gap-5 place-items-center">
        <SvgIcon class="duration-500 hover:scale-125 p-1" v-for="skillSetsIcons in skillSets" :svgOptions="skillSetsIcons" />
      </div>
    </div>

    <div class="rounded bg-gray-50 mx-12 mt-3 p-8">
      <h4>Tools</h4> 
      <div class="grid grid-cols-3 md:grid-cols-4 gap-5 place-items-center">
        <SvgIcon class="duration-500 hover:scale-125 p-1" v-for="programingToolsIcon in programingTools" :svgOptions="programingToolsIcon" />
      </div>
    </div>
  </div>
</template>