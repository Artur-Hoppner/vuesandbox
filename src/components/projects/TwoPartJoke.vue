<script setup>
import { ref } from 'vue'
import Modal from '@/components/projects/Modal.vue'
import HeartFull from '@/assets/icons/HeartFull.vue'

let toggleJoke = ref(false)
const props = defineProps(['jokes', 'categoryColor', 'index']),
      listItemColor = props.categoryColor[props.jokes.category],
      emit = defineEmits(['favoritesUpdate', 'eventB'])

function uppdateFavorite() {
  emit('favoritesUpdate', props.jokes.id)
}
</script>

<template >
  <li class="listing-item-container">
    <div class="list-top-part">
      <p class="item-category">{{ props.jokes.category }}-Joke</p>
      <p class="markt-favorite-item" v-if="props.jokes.favorite">Fav</p>
    </div>
    <div class="list-bottom-part">
      <!-- only show the first 3 words (or symbols) of string -->
      <p class="joke-preview">{{ props.jokes.setup.split(' ').slice(0,3).join(' ') }}...</p>
      <Modal :color="listItemColor">
        <template #joke>
          <p>{{ props.jokes.setup }}</p>
          <button class="joke-delivery-button" @click="toggleJoke = true" v-if="!toggleJoke">show rest of joke</button>
          <p v-if="toggleJoke" class="joke-delivery-text">{{ props.jokes.delivery }}</p>
          <HeartFull @click="uppdateFavorite" class="favorit-svg" :class="{'favorit-color': props.jokes.favorite}" />
        </template>
      </Modal>
    </div>

  </li>
</template>

<style scoped>
  .list-top-part {
    width: 100%;
    height: 50px;
    background-color: v-bind(listItemColor);
  }

  .joke-preview {
    width: 100%;
    font-size: 18px;
    color: rgb(107, 107, 107);
    font-weight: 500;
    text-align: center;
  }

  .list-bottom-part {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 80px;
    width: 100%;
  }

  .list-bottom-part {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 80px;
    width: 100%;
    padding: 0 10px
  }

  .joke-delivery-button {
    background-color: #f8ae4e;
  }

  .joke-delivery-button:hover {
    background-color: #fabf6d;
  }

  .joke-delivery-text {
    animation-name: shake;
    animation-duration: 600ms;
    font-size: 20px;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
      transform: translate3d(-3px, 0, 0);
    }
    40%, 60% {
      transform: translate3d(3px, 0, 0);
    }
  }
</style>