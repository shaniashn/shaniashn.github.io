<template>
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
  width: 100%;
  height: 70vh;
  /* background-color: burlywood; */
  justify-content: space-evenly;
  align-items: flex-start;
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
  /* display: grid; */
  /* background-color: aquamarine; */
  gap: 5%;
  height: max-content;
}

.abt-img {
  /* display: grid; */
  justify-content: space-around;
  /* background-color: aqua; */
  gap: 40%;
  /* height: 75%; */
  /* grid-auto-flow: column; */
}

.abt-img img {
  width: 500px;
  height: auto;
  /* margin-top: 50%; */
}

.achievement {
  /* display: grid; */
  justify-content: space-around;
  /* background-color: beige; */
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
  /* .experience-achievement {
    display: block;
  }
  
  .experience {
    display: block;
  }
*/
  .abt-img img:last-child{
    max-width: 100%;
  } 
}
</style>