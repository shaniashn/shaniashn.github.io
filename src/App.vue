<template>
  <HomePage/>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>

:root {
  --primary-color: #FFF8F3;
  --secondary-color: #262524;
  --green-color: #ABD9BB;
  --lightgreen-color: #D5F0C1;
  --pink-color: #E6A4B4;
  --blue-color: #79C4E2;
  --lightgreen-shade-color: rgb(213, 240, 193, 0.5);
  --lightgreen-mobile-menu: rgb(232, 243, 218, 0.9);
  scroll-snap-type: y mandatory;
}

body {
  margin: 0;
  background-color: var(--primary-color);
}

::-webkit-scrollbar {
  display: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--secondary-color);
  background-color: var(--primary-color);
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
</style>
