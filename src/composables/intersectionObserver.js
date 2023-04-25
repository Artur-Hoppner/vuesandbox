export function observeIntersections(intersections) {
  const options = {
    root: intersections.root ? intersections.root :null,
    rootMargin: intersections.rootMargin ? intersections.rootMargin : '0px 0px 0px 0px',
    threshold: intersections.threshold ? intersections.threshold : 0
  };
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) { // Alternative: (entry.isIntersectionRatio > 0)
          if(intersections.givenClassElement) {
            for(let i = 0; intersections.givenClassElement.length > i; i++ ) {
              setTimeout(() => {
                document.querySelector(intersections.givenClassElement[i]).classList.add(...intersections.givenClass);
              }, intersections.timeoutValue[i])
            }
          } else {
            setTimeout(() => {
              entry.target.classList.add(...intersections.givenClass);
            }, intersections.timeoutValue)
          }

      } else if(!entry.isIntersecting && intersections.removeClassOnExit) {
        if(intersections.givenClassElement) {
          for(let i = 0; intersections.givenClassElement.length > i; i++ ) {
            setTimeout(() => {
              //  Avoid error that the element is null if element dont exist on view
              const element = document.querySelector(intersections.givenClassElement[i])
              element ? element.classList.remove(...intersections.givenClass) : "";
            }, intersections.timeoutValue[i])
          }
        } else {
          setTimeout(() => {
            entry.target.classList.remove(...intersections.givenClass);
          }, intersections.timeoutValue)
        }
      }
    })}, options);

    document.querySelectorAll(intersections.intersectioElements).forEach((section) => {
    observer.observe(section);
  })
}