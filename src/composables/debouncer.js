export function debouncer (callbackFunction, timeout) {
  // Timer has a id that clearTimeout reseats the timer with samt timout id.
  let timerId;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => { 
      callbackFunction();
    }, timeout);
  };
}



// function debounce(func, timeout = 300){
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => { func.apply(this, args); }, timeout);
//   };
// }
// function saveInput(){
//   console.log('Saving data');
// }
// const processChange = debounce(() => saveInput());