export function debouncer (callbackFunction, timeout) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => { callbackFunction();}, timeout);
  };
}