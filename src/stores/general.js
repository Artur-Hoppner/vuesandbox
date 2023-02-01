import { ref } from 'vue'
import { defineStore } from 'pinia'

export const generalStore = defineStore('general', () => {
  const placeholder = ref({
    username: "username",
    password: "***********"
  })

  return { placeholder }
})