<template>
  <div class="experience-achievement">
    <div class="experience">
      <!-- <div class="work" v-for="(experience, value, index) in allExperiences" :key="index">
        <p>{{ experience }}</p>
        <p>{{ value }}</p>
      </div> -->
      <div class="work">
        <img src="../../assets/flower.svg" alt="">
        <p>iOS Developer</p>
        <p>Apple Developer Academy</p>
      </div>
      <div class="work">
        <p>Software Engineer Intern</p>
        <p>Constellar</p>
      </div>
      <div class="work">
        <p>Back-End Developer</p>
        <p>Dinas Pendidikan Kota Tanjungpinang</p>
      </div>
    </div>
    <div class="achievement">
      <div class="wins">
        <p>WWDC Swift Student Challenge</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExperienceSec',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.experience-achievement {
  display: flex;
  text-align: left;
}


.work img{
  width: 50px;
  height: auto;
}
</style>