import { ref, onMounted} from 'vue'
import { defineStore } from 'pinia'

export const generalStore = defineStore('general', () => {
  const placeholder = ref({
    username: "username",
    password: "***********",
    generalStrings: ""
  })

  onMounted(() => {
    console.log("get general stringdata to page")
  })

  return { placeholder }
})