import { ref, onBeforeMount, watch } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router/index";

export const generalStore = defineStore('general', () => {
  const placeholder = ref({
    username: "username",
    password: "***********"
  })

  return { placeholder }
})