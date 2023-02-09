<script setup>
import { ref } from 'vue'
import { generalStore } from '@/stores/general';
import { userAuthentication } from '@/stores/authentication';

const generalStoreData = generalStore(),
      authenticationStore = userAuthentication(),
      loginInputData = ref({
        userName: "",
        password: ""
      })
</script>

<template>
  <div class=" flex justify-center max-w-30">
    <form class="min-w-600p">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" v-model="loginInputData.userName" :placeholder="generalStoreData.placeholder.username" >
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="loginInputData.password" :placeholder="generalStoreData.placeholder.password">
        <!-- change -->
        <p class="text-red-500 text-xs italic">Please type in password.</p>
        <p class="text-red-500 text-xs italic">Wrong password.</p>

      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="authenticationStore.loggedIn(loginInputData)">
          Sign In
        </button>
      </div>
    </form>
  </div>

</template>
