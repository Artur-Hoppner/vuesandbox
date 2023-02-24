import { ref, onMounted} from 'vue'
import { defineStore } from 'pinia'

export const generalStore = defineStore('general', () => {
  const placeholder = ref({
    username: "username",
    password: "***********",
    generalStrings: ""
  })
  const settingCookieValue = {
    name: "Cookie Concent",
    value: "accepted",
    expires: "" // empty means no expiration date
  };
  const testing = ref("testing");
  const cookieConsentStatus = ref(false);

  // set cookies
  function setCookies(data) {
    document.cookie = `${data.name}=${data.value}`; //Todo Set expire date, pref by hours. 
    // expires=${data.expires}
    // ;path=${data.path}
  }

  // check cookies
  function getCookies(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return true;
      }
    }
    return false;
  }

  // Remove cookies
  function removeCookies(data) {
    console.log("init remove coolkies", data)
    document.cookie = `${data}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
  }

  onMounted(() => {
    cookieConsentStatus.value = getCookies(settingCookieValue.name);
  })

  return {cookieConsentStatus, testing, placeholder, setCookies, getCookies, removeCookies }
})












  // Observe Intersection Function
  // function observeIntersections(intersections) {
  //   const options = {
  //     root: intersections.root ? intersections.root :null,
  //     rootMargin: intersections.rootMargin ? intersections.rootMargin : '0px 0px 0px 0px',
  //     threshold: intersections.threshold ? intersections.threshold : 0
  //   };
   
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {

  //       if (entry.isIntersecting) { // Alternative: (entry.isIntersectionRatio > 0)
  //           if(intersections.givenClassElement) {
  //             for(let i = 0; intersections.givenClassElement.length > i; i++ ) {
  //               setTimeout(() => {
  //                 document.querySelector(intersections.givenClassElement[i]).classList.add(intersections.givenClass);
  //               }, intersections.timeoutValue[i])
  //             }
  //           } else {
  //             setTimeout(() => {
  //               entry.target.classList.add(intersections.givenClass);
  //             }, intersections.timeoutValue)
  //           }

  //       } else if(!entry.isIntersecting && intersections.removeClassOnExit) {
  //         if(intersections.givenClassElement) {
  //           for(let i = 0; intersections.givenClassElement.length > i; i++ ) {
  //             setTimeout(() => {
  //               //  Avoid error that the element is null if element dont exist on view
  //               const element = document.querySelector(intersections.givenClassElement[i])
  //               element ? element.classList.remove(intersections.givenClass) : "";
  //             }, intersections.timeoutValue[i])
  //           }
  //         } else {
  //           setTimeout(() => {
  //             entry.target.classList.remove(intersections.givenClass);
  //           }, intersections.timeoutValue)
  //         }
  //       }
  //     })}, options);
  
  //     document.querySelectorAll(intersections.intersectioElements).forEach((section) => {
  //     observer.observe(section);
  //   })
  // }