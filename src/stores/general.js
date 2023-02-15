import { ref, onMounted} from 'vue'
import { defineStore } from 'pinia'

export const generalStore = defineStore('general', () => {
  const placeholder = ref({
    username: "username",
    password: "***********",
    generalStrings: ""
  })

  function observeIntersections(intersections) {
    const options = {
      root: intersections.alternative.root ? intersections.alternative.root :null,
      rootMargin: intersections.alternative.rootMargin ? intersections.alternative.rootMargin : '0px 0px 0px 0px',
      threshold: intersections.alternative.threshold ? intersections.alternative.threshold : 0
    };
   
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
  
        if (entry.isIntersecting) { // (entry.isIntersectionRatio > 0)
          setTimeout(() => {
            entry.target.classList.add(intersections.givenClass);
          }, intersections.timoutValue)
        } else if(!entry.isIntersecting && intersections.removeClassOnExit) {
          entry.target.classList.remove(intersections.givenClass)
        }
      })}, options);
  
      document.querySelectorAll(intersections.intersectioElements).forEach((section) => {
      observer.observe(section);
    })
  }

  onMounted(() => {
    console.log("get general stringdata to page")
  })

  return { placeholder, observeIntersections }
})