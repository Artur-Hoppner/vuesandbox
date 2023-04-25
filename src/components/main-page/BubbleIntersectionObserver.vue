<script setup>
import { ref } from 'vue'
import InputAnimationGrid from '@/components/main-page/BubbleIntersectionObserverItems.vue'

const users = ref([
        {header: "Creative", bgColor: "bg-pink-400", position: "justify-center sm:justify-start sm:items-end"},
        {header: "Challenging", bgColor: "bg-lime-500", position: "items-center sm:items-center"},
        {header: "Allways things to learn", bgColor: "bg-amber-400", position: "justify-end sm:justify-start"},
        {header: "Fun", bgColor: "bg-indigo-400", position: "items-end justify-center sm:items-center"},
        {header: "Easy stimulus", bgColor: "bg-zinc-400", position: "justify-center sm:items-end"},
        {header: "Versatile", bgColor: "bg-sky-400", position: "items-center sm:items-center"},
        // {header: "7", bgColor: "bg-purple-300", position: "justify-end sm:justify-end sm:items-center"},
        // {header: "8", bgColor: "bg-red-200", position: "items-center justify-center sm:justify-end sm:items-start"},
        // {header: "9", bgColor: "bg-lime-400", position: "justify-center sm:justify-end"},
        // {header: "10", bgColor: "bg-orange-200",position: "items-center sm:justify-end sm:items-end" },
        // {header: "11", bgColor: "bg-teal-300", position: "items-center justify-end sm:items-end"},
        // {header: "12", bgColor: "bg-amber-100", position: "items-center justify-center sm:justify-end sm:items-end"}
      ])

</script>

<template>
  <div id="bubbleContainer" class="w-full max-w-6xl bg-primary-color sm:mx-10 sm:rounded-lg p-4">
    <h3 class="text-slate-50 font-black">Why do i do code?</h3>
    <div role="group" aria-labelledby="quetions-group-label">
      <ul class="flex flex-row flex-wrap">
        <!-- rename component to have better naming logic -->
        <InputAnimationGrid 
          v-for="(user, index) in users" 
          :index="index"
          :user="user"
          :key="user.id" 
        />
      </ul>
    </div>
  </div>
</template>