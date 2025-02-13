<template>
  <section class="experiences-about">
    <div class="experience-achievement">
    <div class="experience">
      <h5>experience</h5>
      <div class="flower">
        <img src="../../assets/flower1.svg">
        <div class="item">
          <p>Software Engineer Intern</p>
          <p>Constellar</p>
        </div>
      </div>
      <div class="flower">
        <img src="../../assets/flower2.svg">
        <div class="item">
          <p>iOS Developer</p>
          <p>Apple Developer Academy</p>
        </div>
      </div>
      <div class="flower">
        <img src="../../assets/flower3.svg">
        <div class="item">
          <p>Back-End Developer</p>
          <p>Dinas Pendidikan Kota Tanjungpinang</p>
        </div>
      </div>
    </div>
    <div class="abt-img">
      <div class="achievement">
        <h5>achievement</h5>
        <div class="flower">
          <img src="../../assets/flower1.svg">
          <div class="item">
            <p>WWDC Swift Student Challenge 2024</p>
            <p>Apple</p>
          </div>
        </div>
        <div class="flower">
          <img src="../../assets/flower2.svg">
          <div class="item">
            <p>Poster Design Competition</p>
            <p>BEM FE UMRAH</p>
          </div>
        </div>
      </div>
      <img src="../../assets/cat.svg">
    </div>
  </div>
  <SkillsSection />
  </section>
</template>

<script>
import SkillsSection from './SkillsSection.vue';

export default {
  name: 'ExperienceSec',
  components: {
    SkillsSection
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.experiences-about {
  width: 100%;
}

.experience-achievement {
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.1rem;
}

.item img{
  width: 50px;
  height: 50px;
}

.item p:first-child {
  font-weight: 500;
  font-size: larger;
}

.flower {
  display: flex;
}

.achievement .flower img, .experience .flower img{
  width: 30px;
  height: auto;
  margin-right: 20px;
}

.experience {
  gap: 5%;
  height: max-content;
}

.abt-img {
  justify-content: space-around;
  gap: 40%;
}

.abt-img img {
  width: 500px;
  height: auto;
}

.achievement {
  justify-content: space-around;
  gap: 5%;
}

.experience h5, .achievement h5 {
  font-style: italic;
  font-size: large;
}

.experience h5 {
  color: var(--blue-color);
}

.achievement h5 {
  color: var(--pink-color);
}

@media screen and (max-width: 375px) {
  .experience-achievement {
    display: block;
  }

  .abt-img img:last-child{
    max-width: 100%;
    padding: 10% 0;
    position: absolute;
    left: 0;
    right: 0;
  } 
}

@media screen and (min-width: 376px) {
  .experience-achievement {
    display: flex;
    flex-direction: column;
  }

  .abt-img img:last-child{
    max-width: 100%;
    padding: 10% 0;
  } 

}

@media screen and (min-width: 992px) {
  .experience-achievement {
    flex-direction: row;
  }
}
</style>