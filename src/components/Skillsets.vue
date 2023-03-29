<script setup>
import { ref } from 'vue'
import SvgIcon from '@/components/parts/SvgIcon.vue';

const skillSetsFilePath = ref(["LanguageJavascript", "LanguageVue", "LanguagePinia", "LanguageNode", "LanguageCss", "LanguageSass", "LanguageTailwind", "LanguageFoundation", "LanguageHTML", "LanguageGsap", "LanguageTwig"]),
      programingToolsFilePath = ref(["LanguageGit", "LanguageGitLab", "LanguageGitHub", "LanguageDigitalOcean", "LanguageBitBucket", "LanguageDocker", "LanguageVsCode", "GoogleAnalytics"])
</script>

<template>
  <div>
    <div class="rounded bg-gray-50 mx-12 mt-3 p-8">
      <h4>Languages</h4> 
      <div class="grid grid-cols-3 md:grid-cols-4 gap-5 place-items-center">
        <SvgIcon class="duration-500 hover:scale-125 p-1" v-for="skillFilePath in skillSetsFilePath" :svgOptions="{ svgFile: skillFilePath, svgClasses: `h-12 w-auto`}" />
      </div>
    </div>

    <div class="rounded bg-gray-50 mx-12 mt-3 p-8">
      <h4>Tools</h4> 
      <div class="grid grid-cols-3 md:grid-cols-4 gap-5 place-items-center">
        <SvgIcon class="duration-500 hover:scale-125 p-1" v-for="programingToolsFilePath in programingToolsFilePath" :svgOptions="{ svgFile: programingToolsFilePath, svgClasses: `h-12 w-auto`}" />
      </div>
    </div>
  </div>
</template>