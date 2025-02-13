<template>
  <div class="skills">
    <h5>skills</h5>
    <div class="grid">
      <div class="item">
        <img src="../../assets/skills/swift.svg" alt="">
        <p>Swift</p>
      </div>
      <div class="item">
        <img src="../../assets/skills/vue.svg" alt="">
        <p>Vue</p>
      </div>
      <div class="item">
        <img src="../../assets/skills/javascript.svg" alt="">
        <p>JavaScript</p>
      </div>
      <div class="item">
        <img src="../../assets/skills/css.svg" alt="">
        <p>CSS</p>
      </div>
      <div class="item">
        <img src="../../assets/skills/git.svg" alt="">
        <p>Git</p>
      </div>
      <div class="item">
        <img src="../../assets/skills/adobe-illustrator.svg" alt="">
        <p>Adobe Illustrator</p>
      </div>
      <div class="item">
        <img src="../../assets/skills/figma.svg" alt="">
        <p>Figma</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsSec',
  data() {
    return {}
  }
}
</script>

<style scoped>
.skills {
  width: 100%;
  /* height: 70vh; */
}

.skills h5 {
  font-style: italic;
  font-size: large;
  color: #4B9E70;
  margin-top: 50px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */
  /* background-color: aquamarine; */
  /* gap: 2px; */
  justify-content: space-evenly;
}

.item img {
  width: 60px;
  height: auto;
  /* background-color: bisque; */
}

.item {
  padding: 70px 0;
}
</style>
