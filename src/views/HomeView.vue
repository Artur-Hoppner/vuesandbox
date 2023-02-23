<script setup>
import { ref } from 'vue'
import InputAnimationGrid from '@/components/InputAnimationGrid.vue'

const users = ref([
  {header: "Creative", bgColor: "bg-pink-400", position: "justify-center sm:justify-start sm:items-end"},
  {header: "Challenging", bgColor: "bg-lime-50", position: "items-center sm:items-center"},
  {header: "3", bgColor: "bg-amber-200", position: "justify-end sm:justify-start"},
  {header: "4", bgColor: "bg-indigo-300", position: "items-end justify-center sm:items-center"},
  {header: "5", bgColor: "bg-zinc-300", position: "justify-center sm:items-end"},
  {header: "6", bgColor: "bg-sky-300", position: "items-center sm:items-center"},
  // {header: "7", bgColor: "bg-purple-300", position: "justify-end sm:justify-end sm:items-center"},
  // {header: "8", bgColor: "bg-red-200", position: "items-center justify-center sm:justify-end sm:items-start"},
  // {header: "9", bgColor: "bg-lime-400", position: "justify-center sm:justify-end"},
  // {header: "10", bgColor: "bg-orange-200",position: "items-center sm:justify-end sm:items-end" },
  // {header: "11", bgColor: "bg-teal-300", position: "items-center justify-end sm:items-end"},
  // {header: "12", bgColor: "bg-amber-100", position: "items-center justify-center sm:justify-end sm:items-end"}
])
</script>

<template>
  <div>
    <div class="p-12">
      <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, laudantium incidunt molestias in fugiat architecto perspiciatis facilis earum repudiandae vitae. Illum consequuntur totam maiores mollitia? Ad, voluptatibus similique. Tempore, corrupti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic eos fugiat cum quis dolorum blanditiis in nesciunt. Libero debitis aut a tempora excepturi sequi adipisci, et repudiandae aliquam voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, pariatur vel soluta autem, labore at vero dolores, quas nam assumenda deleniti natus nesciunt temporibus inventore adipisci eum perferendis distinctio. Maxime.</h4>
    </div>
    <div class="p-12">
      <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, laudantium incidunt molestias in fugiat architecto perspiciatis facilis earum repudiandae vitae. Illum consequuntur totam maiores mollitia? Ad, voluptatibus similique. Tempore, corrupti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic eos fugiat cum quis dolorum blanditiis in nesciunt. Libero debitis aut a tempora excepturi sequi adipisci, et repudiandae aliquam voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, pariatur vel soluta autem, labore at vero dolores, quas nam assumenda deleniti natus nesciunt temporibus inventore adipisci eum perferendis distinctio. Maxime.</h4>
    </div>
    <div class="h-28" ></div>
    <div id="bubbleContainer" class="bg-primary sm:mx-10 sm:rounded-lg p-4">
      <h3 class="text-slate-50 font-black">My Bubbles</h3>
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
  </div>
</template>

<style scoped>
</style>