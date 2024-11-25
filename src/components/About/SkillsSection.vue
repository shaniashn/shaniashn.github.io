<template>
  <div class="skills">
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
  display: grid;
  /* grid-template-columns: 50px 50px; */
  /* grid-auto-flow: column; */
  grid-template-columns: repeat(3, 1fr);
  /* column-gap: 10%; */
  justify-content: space-around;
  height: 70vh;
}

.item img {
  width: 60px;
  height: auto;
}
</style>
