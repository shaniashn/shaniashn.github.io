<template>
  <section class="about" id="about">
    <div class="about-bar">
      <ul>
        <li v-for="(category, index) in categories" :key="index">{{ category }}</li>
      </ul>
    </div>
  </section>

</template>

<script>
export default {
  name: 'AboutPage',
  data(){
    return {
      categories: ['Experience', 'Achievement', 'Education', 'Skills'],
    }
  }
}
</script>

<style>
.about {
  height: max-content;
}

.about-bar {
  display: flex;
  justify-content: center;
  height: 50px;
  position: relative;
  margin-bottom: 50px;
}

.about-bar ul {
  display: flex;
  justify-content: space-between;
  width: 30%;
  height: 100%;;
  position: absolute;
}

.about-bar ul li {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 100%;
  font-weight: 500;
}

.about-bar ul li:hover {
  background-color: var(--pink-color);
  cursor: default;
}
</style>