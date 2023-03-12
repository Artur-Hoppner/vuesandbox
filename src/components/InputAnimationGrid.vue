<script setup>
// This component uses intersectionObserver to controll how elements are animated:
// Move intersectionObserver to parent and use items in array to send in array of object instead of now that function is callet the number of items.

import { ref, onMounted } from 'vue'
import { observeIntersections } from '@/composables/intersectionObserver.js';

const props = defineProps(['user', "index"]),
      checked = ref(false),
      intersections = ref({
        intersectioElements: '#bubbleContainer',
        givenClassElement: [`#bubble${props.index}`], //Leave empty if intersectioElements should get class
        givenClass: "wibe",
        timeoutValue: [(Math.random() * 200) + (props.index+50)],
        removeClassOnExit: true,
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5
      });

function changeStade() {
  checked.value = !checked.value
}

onMounted(() => {
 observeIntersections(intersections.value)
})
</script>

<template>
  <li class="flex basis-1/2 md:basis-1/6 h-36"
      :class="props.user.position ? props.user.position : 'justify-center items-center'"
  >
    <div :id="`bubble${props.index}`"
         role="checkbox" 
         aria-checked="checked"
         class="flex justify-center items-center w-28 h-28 rounded-full select-none	text-xs px-1 cursor-pointer"
         tabindex="0"
         :checked="checked"
         :class="[(checked ? props.user.bgColor : 'bg-slate-50')]"
         @click="changeStade()"
    >
      {{props.user.header}}
    </div>
  </li>
</template>

<style scoped>
  /* height: 100%;
  width: v-bind(svgOptions.ajustToHeight);
  fill: v-bind(svgOptions.fill); */

  @keyframes wipe-enter {
	0% {
		transform: scale(1.02, 1.02);
	}
	30% {
		transform: scale(1.025, 1.025);
	}
  40% {
		transform: scale(1.015, 1.015);
	}
  70% {
		transform: scale(.5, 0.5);
	}

}
@media (prefers-reduced-motion: no-preference) {
  .wibe {
    animation-name: wipe-enter;
    animation-duration: 1s;
    animation-iteration-count: once;
  }
}
</style>
