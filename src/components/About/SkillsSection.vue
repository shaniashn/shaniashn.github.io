<template>
  <div class="skills">
    <div class="item">
      <img src="../../assets/flower1.svg" alt="">
      <p>Swift</p>
    </div>
    <div class="item">
      <img src="../../assets/flower1.svg" alt="">
      <p>JavaScript</p>
    </div>
    <div class="item">
      <img src="../../assets/flower1.svg" alt="">
      <p>CSS</p>
    </div>
    <div class="item">
      <img src="../../assets/flower1.svg" alt="">
      <p>Git</p>
    </div>
    <div class="item">
      <img src="../../assets/flower1.svg" alt="">
      <p>Adobe Illustrator</p>
    </div>
    <div class="item">
      <img src="../../assets/flower1.svg" alt="">
      <p>Figma</p>
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
}

.item img {
  width: 60px;
  height: auto;
}
</style>
