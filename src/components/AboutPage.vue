<template>
  <section class="about" id="about">
    <div class="about-bar">
      <ul>
        <li v-for="(category, index) in categories" :key="index">{{ category }}</li>
      </ul>
    </div>
    <div class="about-view">
      <div class="about-img">
        <img src="../assets/pic.svg" alt="shania">
      </div>
      <div class="about-desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis mi pharetra, tempor ante eu, feugiat justo. Nunc commodo sollicitudin laoreet.</p>
        <p>Nulla vitae cursus leo, eget fermentum augue. Nunc ut lectus erat. Quisque eget fringilla nisl, ut venenatis mauris. Praesent efficitur interdum lorem, vitae feugiat quam congue sit amet. Suspendisse rutrum elit sed accumsan posuere.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis mi pharetra, tempor ante eu, feugiat justo. Nunc commodo sollicitudin laoreet.</p>
        <p>💖💖💖</p>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'AboutPage',
  data(){
    return {
      categories: ['Experience', 'Achievement', 'Skills'],
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

.about-view {
  width: 100%;
  /* background-color: blueviolet; */
  display: flex;
  justify-content: space-evenly;
  padding: 20px 60px;
  box-sizing: border-box;
}

.about-view .about-img img{
  width: 450px;
}

.about-desc {
  width: 40%;
}

.about-desc p {
  text-align: justify;
  font-weight: 500;
  line-height: 2pc;
}

.about-desc p:nth-child(4){
  font-size: 20px;
}

</style>