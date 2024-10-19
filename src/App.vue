<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- router-view goes here -->
  <HomePage/>
</template>

<script>
import HomePage from './components/HomePage.vue';

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HomePage
  }
}
</script>

<style>

:root {
  --primary-color: #FFF8F3;
  --secondary-color: #262524;
  --green-color: #ABD9BB;
  --lightgreen-color: #d5f0c180;
  --pink-color: #E6A4B4;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  background-color: #FFF8F3;
}
</style>
