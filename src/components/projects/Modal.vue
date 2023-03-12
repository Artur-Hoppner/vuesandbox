<script setup>
import { ref } from 'vue'
import Cross from '@/assets/icons/Cross.vue'

const activeModal = ref(false),
      props = defineProps(['color'])
</script>

<template>
  <div >
    <button @click="activeModal = !activeModal">Read full joke</button>
    <Teleport to="body">
      <Transition>
        <div v-if="activeModal">
          <div class="modal-container">
            <Cross class="svg-cross" @click="activeModal = !activeModal" />
            <slot name="joke"/>        
          </div>
          <div @click="activeModal = !activeModal" class="modal-overlayer "></div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
  .modal-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 999;
    top: 20%;
    left: calc(50%);
    margin-left: -170px;
    width: 300px;
    min-height: 180px;
    background-color: #fbe6cc;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.276);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    line-height: 20px;
  }

  .svg-cross {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    fill: rgba(0, 0, 0, 0.77);
  }

  .modal-overlayer {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: rgba(122, 122, 122, 0.424);
    cursor: pointer;
  }

  path {
    cursor: pointer;
    width: 80px;
    height: 80px;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  button {
    background-color: v-bind(props.color);
    border: none;
    margin: 0 5px;
    min-width: 125px;
  }

  button:hover {
    background-color: rgb(170, 170, 170);
  }

  p {
    font-size: 16px;
  }

  .deliver-joke-button {
    background-color: v-bind(listItemColor);
  }
</style>