<script setup>
// SVG HeartFull is better placed within modal component (2 places) to toggle favorites if statemanager existed.
// But is in this component to avoid emiting to grandparent
// Easier to follow logic with this code, but need to change in 2 components
import HeartFull from '@/assets/icons/HeartFull.vue'
import Modal from '@/components/projects/Modal.vue'

// Different way to declare props compared to: props = defineProps(['jokes', 'categoryColor', 'index'])
const props = defineProps({
        jokes: {
          type: Object,
          required: true
        },
        categoryColor: {
          type: Object,
          required: true
        }
      }),
      listItemColor = props.categoryColor[props.jokes.category],
      emit = defineEmits(['favoritesUpdate', 'eventB'])

function uppdateFavorite() {
  emit('favoritesUpdate', props.jokes.id)
}
</script>

<template>
  <li>
    <div class="list-top-part">
      <p class="item-category">{{ props.jokes.category }}-Joke</p>
      <p class="markt-favorite-item" v-if="props.jokes.favorite">Fav</p>
    </div>
    <div class="list-bottom-part">
      <!-- only show the first 3 words (or symbols) of string -->
      <p class="joke-preview">{{ props.jokes.joke.split(' ').slice(0,3).join(' ') }}...</p>
      <Modal :color="listItemColor">
        <template #joke>
          <p>{{ props.jokes.joke }}</p>
          <HeartFull @click="uppdateFavorite" class="favorit-svg" :class="{'favorit-color': props.jokes.favorite}" />
        </template>
      </Modal>
    </div>
  </li>
</template>

<style scoped>
  .joke-preview {
    width: 100%;
    font-size: 18px;
    color: rgb(107, 107, 107);
    font-weight: 500;
    text-align: center;
  }

  .list-top-part {
    width: 100%;
    height: 50px;
    background-color: v-bind(listItemColor);
  }

  .list-bottom-part {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 80px;
    width: 100%;
    padding: 0 10px
  }
</style>