<template>
  <section class="about" id="about">
    <div class="about-container">
      <div class="about-bar">
        <ul>
          <li v-for="(category, index) in categories" :key="index" @click="selectCategory(index)">{{ category }}</li>
        </ul>
      </div>
      <div class="about-view-container">
        <div class="about-view" v-if="showAbout">
          <div class="about-img">
            <img :src="profileImage" alt="shania">
          </div>
          <div class="about-desc">
            <p>Hi once again! </p>
            <p>I’m always excited to introduce myself as creative developer, since those are two things I always working
              on.</p>
            <p>I enjoy building interfaces with rich animations, staying in the flow until I find the perfect moment for
              animation timing, experimenting with new animation styles, and enhancing them with playful color vibes.
            </p>
            <p>One of my works won Apple’s WWDC Swift Student Challenge 2024, where I showcased my passion to combine my
              crafted designs and give it to life with code.</p>
            <p>Okay, a little bit TMI, I love K-Pop girlgroups especially Red Velvet, NewJeans and aespa.</p>
          </div>
        </div>
        <div class="about-view" v-if="showExp">
          <ExperienceSection />
        </div>
        <div class="about-view" v-if="showSkill">
          <SkillsSection />
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import profileImg from '../assets/profile-img.png'
import ExperienceSection from './About/ExperienceSection.vue';
import SkillsSection from "./About/SkillsSection.vue";

export default {
  name: 'AboutPage',
  data() {
    return {
      categories: ['about', 'experience & achievement', 'skills'],
      profileImage: profileImg,
      showAbout: true,
      showExp: false,
      showSkill: false
    }
  },
  components: {
    ExperienceSection,
    SkillsSection
  },
  methods: {
    selectCategory(index) {
      console.log(this.categories[index]);
      let category = this.categories[index]
      this.showAbout = category == "about" ? true : false;
      this.showExp = category == "experience & achievement" ? true : false;
      this.showSkill = category == "skills" ? true : false;
    }
  },
}
</script>

<style>
.about {
  height: max-content;
  padding: 8%;
}

.about-bar {
  display: flex;
  justify-content: center;
  height: 50px;
  position: relative;
  margin: 50px 0;
}

.about-bar ul {
  display: flex;
  justify-content: space-between;
  height: 100%;
  ;
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
  align-items: center;
  /* padding: 20px 60px; */
  /* box-sizing: border-box; */
  /* height: 70vh; */
}

.about-img {
  max-width: 30%;
}

.about-img img {
  max-width: 100%;
  border: 5px solid var(--blue-color);
}

/* .about-img {
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  place-items: center;
  padding: 50px;
} */

/* .about-view .about-img img{
  width: 380px;
  border: 5px solid var(--blue-color);
  margin: 5% 0;
} */

.about-desc {
  max-width: 60%;
  /* display: grid; */
}

.about-desc p {
  text-align: justify;
  font-weight: 500;
  line-height: 2pc;
}

/* .about-desc p:nth-child(4){
  font-size: 20px;
} */

/* @media screen and (max-width: 795px) {
  .about-view {
    flex-direction: column;
  }

  .about-desc {
    width: 100%;
  }


  .about-view .about-img img{
    width: 300px;
  }
} */

@media screen and (max-width: 375px) {
  .about-container {
    padding: 0 5%;
  }

  .about-img {
    max-width: 100%;
  }

  .about-view {
    flex-direction: column;
  }

  .about-desc {
    max-width: 100%;
  }

}

@media screen and (min-width: 375px) {
  .about-view {
    flex-direction: column;
  }

  .about-img {
    max-width: 100%;
  }

  .about-desc {
    max-width: 100%;
  }

  .about-view-container {
    padding: 0 11%;
  }
}

@media screen and (min-width: 992px) {
  .about-view {
    gap: 5%;
  }
}
</style>