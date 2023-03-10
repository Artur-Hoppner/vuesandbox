<script setup>
import TwoPartJoke from '@/components/projects/TwoPartJoke.vue'
import SingleJoke from '@/components/projects/SingleJoke.vue'
import Loader from '@/components/parts/Loader.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const categoryColor = ref({
  Programming: "#e9bab8",
  Misc: "#98ebd9",
  Dark: "#e0ceaf",
  Pun: "#fc3",
  Spooky: "#00af89",
  Christmas: "#abc1de"
})

// GET REQUEST JOKES
const jokeArray = ref([])
let numerOfJokes = ref(10)
let  url = ref("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=")
let loadingJokes = ref(false)

function getNewJokes() {
  // Clear array for new jokes and save Favorit jokes
  // Anotherway of doing it would be to save favorites as cookie-values but the api only allows to get range of id (on at a time) and we dont want "42" fetch (if there is 42 favorites) at the same time just to get the favorites.
  for( let i = jokeArray.value.length -1; i >= 0; --i) {
    if(!jokeArray.value[i].favorite) {
      jokeArray.value.splice(i, 1)
    }
  }
  getJokesRequest()
}

// Would In a bigger app make axios get.request a composable function that can be reused.
async function getJokesRequest() {
  // toggle loader on ajax-call, would rather try out vue-suspence but its still a exeperimental feature.
  loadingJokes.value = !loadingJokes.value
  await axios.get(`${url.value}${numerOfJokes.value}`)
  .then((response) => {
    // push or concat value to variable depending if its a single object or array of objects
    (response.data.jokes ? jokeArray.value = jokeArray.value.concat(response.data.jokes) : jokeArray.value.push(response.data));
    
  })
  .catch((errors) => {
      console.log(errors);
  })
  .finally(() => {
    filterArrayType("single", true)
    filterArrayType("twopart", true)

    // Reset filter on refresh or get new jokes
    activeJokes.value.total.length = jokeArray.value.length
    activeJokes.value.active.type = "all"
    activeJokes.value.active.length = jokeArray.value.length

    loadingJokes.value = !loadingJokes.value
  })
}

// SAVE FAVORITES
function favoritesUpdate(jokeId){
  let indexOfObject = jokeArray.value.findIndex(x => x.id === jokeId)
  jokeArray.value[indexOfObject].favorite = !jokeArray.value[indexOfObject].favorite;
}

// FILTER PUT TYPES OF JOKES AND ITS LENGTHS
const activeJokes = ref({
  active: {type: "all", length: 0},
  total: {type: "all", length: 0},
  variants: {}
})

function filterArrayType(filterType, setLength){
  const filteredArray =  jokeArray.value.filter(jokeArray => {
    return jokeArray.type.includes(filterType);
  })
  // Get all types of jokes and there length
  if(!activeJokes.value[filterType] && setLength){
    activeJokes.value.variants[filterType] = {type: filterType, length: filteredArray.length}
  }
  return filteredArray
}

// ADD ACTIVE FILTER CHOICE TO OBJECT "activeJokes"
function filteringListingTypes(typeOjJoke, typeLength) {
  activeJokes.value.active.type = typeOjJoke;
  activeJokes.value.active.length = typeLength;
}

// GET JOKES ON INIT (10 by default)
onMounted(() => {
  getJokesRequest()
})
</script>

<template>
  <div class="list-container">
    <div class="list-header-container">
      <div class="header-backdrop"></div>
      <h1>JOKE GENERATOR</h1>
    </div>

    <div class="functionality-container">
      <input @keyup.enter="getJokesRequest" type="text"  v-model="numerOfJokes">
      <button :disabled="loadingJokes" @click="getNewJokes">Get new jokes</button>
    </div>

    <div class="filter-container">
      <p>Filter types:</p>
      <button 
        :class="{'active-filter-button': activeJokes.active.type == 'all'}" 
        @click="filteringListingTypes('all', activeJokes.total.length)"
      > 
        {{ activeJokes.total.type }} : {{ activeJokes.total.length }}
      </button>

      <button 
        v-for="value in activeJokes.variants"
        :class="{'active-filter-button': activeJokes.active.type == value.type}" 
        @click="filteringListingTypes(value.type, value.length)"
      >
        {{value.type}} : {{value.length}}
      </button>
    </div>

    <ul>      
      <SingleJoke
        @favoritesUpdate="favoritesUpdate"
        v-if="activeJokes.active.type == 'all' || activeJokes.active.type == 'single'"
        v-for="(jokes, index) in filterArrayType('single')"
        :jokes="jokes"
        :index="index"
        :key="jokes.id"
        :categoryColor="categoryColor"
      />

      <TwoPartJoke
        @favoritesUpdate="favoritesUpdate"
        v-if="activeJokes.active.type == 'all' || activeJokes.active.type == 'twopart'"
        v-for="(jokes, index) in filterArrayType('twopart')"
        :jokes="jokes"
        :index="index"
        :key="jokes.id"
        :categoryColor="categoryColor"
      />

      <Loader v-if="loadingJokes" />
    </ul>
  </div>
</template>

<style scoped>
  .list-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .list-header-container {
    margin-top: 15px;
    position: relative;
    width: 100%;
  }
  .list-header-container h1 {
    position: relative;
    text-align: center;
    z-index: 1;
    color: aliceblue;
  }
  .list-header-container .header-backdrop {
    position: absolute;
    top: 8px;
    width: 100%;
    height: 60px;
    transform: rotate(-2deg);
    background-color: #fcd4a0;
    border-radius: 2px;
    /* webkit-transform: rotate(-3deg); */
  }

  .functionality-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0 30px;
  }

  .functionality-container input {
    width: 25px;
    border: none;
    border-radius: 3px;
    margin-right: 3px;
    padding-left: 15px;
  }

  .filter-container p {
    margin: 0 0 0 5px;
    color: #868686;
    border-bottom: solid 1px #868686;
    width: 85px;
  }

  .filter-container button {
    border: none;
    margin: 3px;
    background-color: #868686;
    text-transform: uppercase;
  }

  .filter-container .active-filter-button {
    background-color: #58be75
  }

  .list-container ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-width: 300px;
    justify-content: center;
    margin-top: 20px;
  }

  .list-container li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    min-height: 100px;
    margin: 0 10px 15px;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(168, 168, 168, 0.33);
  }



  /* ________________ */

  /* temporary code */
#app {
  min-height: 100vh;
}

body {
  font-family: 'Helvetica', 'Arial', sans-serif;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  padding: 0;
  margin: 0;
}

button {
  cursor: pointer;
  background-color: #fcd4a0;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  min-height: 20px;
  padding: 8px 7px;
}

button:hover {
  background-color: #f9e1c0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.33);
}

p {
  word-wrap: break-word;
}


/* unversal class for components single-joke and twopart-joke */

.listing-item-container {
  border: solid 2px v-bind(listItemColor);
}

.item-category {
  margin-top: 13px;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
}

.markt-favorite-item {
  position: absolute;
  top: -5px;
  right: 5px;
  transform: rotate(50deg);
  font-weight: bold;
  font-size: 20px;
  color: rgb(255, 255, 255);
}
.favorit-svg {
  position: absolute;

  top: 10px;
  right: 40px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: rgba(0, 0, 0, 0.533);
}

.favorit-color {
  fill: rgb(225, 84, 84);
  animation-name: bounceIn;
  animation-duration: 600ms;
}

@keyframes bounceIn {
  0% { 
     opacity: 0; 
     transform: scale(.3);
  }
  50% { 
     opacity: 1;
     transform: scale(1.05);
  }
  70% {
     transform: scale(.9);
  }
  100% {
     transform: scale(1);
  }
} 
</style>
