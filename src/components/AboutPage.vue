<template>
  <section class="about" id="about">
    <div class="about-bar">
      <ul>
        <li v-for="(category, index) in categories" :key="index" @click="selectCategory(index)">{{ category }}</li>
      </ul>
    </div>
    <div class="about-view-container">
      <div class="about-view" id="about" v-if="showAbout">
        <div class="about-img">
          <img :src="profileImage" alt="shania">
        </div>
        <div class="about-desc">
          <p>Hi once again! </p>
          <p>I’m always excited to introduce myself as creative developer, since those are two things I always working on.</p>
          <p>I enjoy building interfaces with rich animations, staying in the flow until I find the perfect moment for
            animation timing, experimenting with new animation styles, and enhancing them with playful color vibes.</p>
          <p>One of my works won Apple’s WWDC Swift Student Challenge 2024, where I showcased my passion to combine my crafted designs and give it to life with code.</p>
          <p>My main tech stacks are Swift, SwiftUI, Javascript and Vue.js. For designing, mainly I used Adobe
            Ilustrator and Figma.</p>
          <p>Okay, a little bit TMI, I love K-Pop girlgroups especially Red Velvet, NewJeans and aespa.</p>
        </div>
      </div>
      <div class="about-view" id="experience" v-if="showExp">
        <ExperienceSection />
      </div>
    </div>
  </section>

</template>

<script>
import profileImg from '../assets/profile-img.png'
import ExperienceSection from './About/ExperienceSection.vue';

export default {
  name: 'AboutPage',
  data(){
    return {
      categories: ['About', 'Experience & Achievement', 'Skills'],
      profileImage: profileImg,
      showAbout: true,
      showExp: false
    }
  },
  components: {
    ExperienceSection
  },
  methods: {
    selectCategory(index){
      console.log(this.categories[index].toLowerCase());
      let category = this.categories[index].toLowerCase()
      this.showAbout = category == "about" ? true : false;
      this.showExp = category == "experience & achievement" ? true : false;
    }
  },
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
  width: 380px;
  border: 5px solid var(--blue-color);
  margin: 5% 0;
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