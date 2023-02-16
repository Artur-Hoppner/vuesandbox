import { ref, onMounted} from 'vue'
import { defineStore } from 'pinia'

export const generalStore = defineStore('general', () => {
  const placeholder = ref({
    username: "username",
    password: "***********",
    generalStrings: ""
  })

  // TODO: Pass in object to give other element or elements classes.
  function observeIntersections(intersections) {
    const options = {
      root: intersections.root ? intersections.root :null,
      rootMargin: intersections.rootMargin ? intersections.rootMargin : '0px 0px 0px 0px',
      threshold: intersections.threshold ? intersections.threshold : 0
    };
   
    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) { // (entry.isIntersectionRatio > 0)
            if(intersections.givenClassElement) {
              for(let i = 0; intersections.givenClassElement.length > i; i++ ) {
                setTimeout(() => {
                  document.querySelector(intersections.givenClassElement[i]).classList.add(intersections.givenClass);
                }, intersections.timeoutValue[i])
              }
            } else {
              setTimeout(() => {
                entry.target.classList.add(intersections.givenClass);
              }, intersections.timeoutValue)
            }

        } else if(!entry.isIntersecting && intersections.removeClassOnExit) {
          if(intersections.givenClassElement) {
            for(let i = 0; intersections.givenClassElement.length > i; i++ ) {
              setTimeout(() => {
                document.querySelector(intersections.givenClassElement[i]).classList.remove(intersections.givenClass);
              }, intersections.timeoutValue[i])
            }
          } else {
            setTimeout(() => {
              entry.target.classList.remove(intersections.givenClass);
            }, intersections.timeoutValue)
          }
        }
      })}, options);
  
      document.querySelectorAll(intersections.intersectioElements).forEach((section) => {
      observer.observe(section);
    })
  }

  return { placeholder, observeIntersections }
})