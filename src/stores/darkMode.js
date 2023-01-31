import { ref, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'

export const colorPreferenceStore = defineStore('darkMode', () => {
  // DARKMODE DATA:
  const osLightModePreference = ref(window.matchMedia('(prefers-color-scheme: dark)')),
        colorModeString = ref("Darkmode")

  // DARKMODE FUNCTIONS:
  function checkLightMode(darkModeParameter) {
    if (darkModeParameter) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      colorModeString.value = "Lightmode"
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      colorModeString.value = "Darkmode"
    }
  }

  function toggleDarkmode() {
    if (localStorage.getItem('theme') === 'dark') {
      checkLightMode(false)
    } else {
      checkLightMode(true)
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    checkLightMode(osLightModePreference.value.matches)
  });

  onBeforeMount(() => {
    // Uses darkmode if user earlier selected it evan if osPreferens have lightmode selected. 
    if(osLightModePreference.value.matches || localStorage.getItem('theme') === 'dark'){
      checkLightMode(true)
    }
  })

  return { colorModeString, toggleDarkmode }
})