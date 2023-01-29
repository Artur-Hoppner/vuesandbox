import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router/index";

export const generalStore = defineStore('generalShit', () => {
  const placeholder = ref({
    username: "username",
    password: "***********"
  })

  return { placeholder }
})