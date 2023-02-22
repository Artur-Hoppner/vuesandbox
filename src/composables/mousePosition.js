import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {

  const positionX = ref(0)
  const positionY = ref(0)

  function update(event) {
    positionX.value = event.pageX
    positionY.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.addEventListener('mousemove', update))

  return { positionX, positionY }
}