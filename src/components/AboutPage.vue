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
        <p>Hi once again! </p>
        <p>I am a creative developer, graduated with a B. Eng in Computer Science, and you can call me Shan.</p>
        <p>I enjoy building interfaces with rich animations, staying in the flow until I find the perfect moment for animation timing, experimenting with new animation styles, and enhancing them with playful color vibes.</p>
        <p>I’m always excited to introduce myself as a person who loves to combine my crafted designs and give it to life with code, since those are two things I always working on.</p>
        <p>My main tech stacks are Swift, SwiftUI, Javascript and Vue.js. For designing, mainly I used Adobe Ilustrator and Figma.</p>
        <p>Okay, a little bit TMI, I love K-Pop girlgroups especially Red Velvet, NewJeans and aespa.</p>
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

/* .about-desc p:nth-child(4){
  font-size: 20px;
} */

</style>