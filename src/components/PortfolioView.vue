<template>
  <section class="portfolio">
    <div class="portfolio-bar">
      <ul>
        <li>Electra</li>
        <li>GuidEducation</li>
        <li>Ghone</li>
        <li>RIOT</li>
      </ul>
    </div>
    <div class="detail-container">
      <div class="detail-view"  v-for="porto in portfolio" :key="porto">
      <div class="detail-image">
        <img src="../assets/rect.svg" alt="">
      </div>
      <div class="detail-description">
        <p class="type">{{ porto.type }}</p>
        <p class="title">{{ porto.title }}</p>
        <p class="description">{{ porto.description }}</p>
        <div class="techused">
          <img src="../assets/techstack/swift.svg" alt="">
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      portfolio: [
        {
          type: "iOS App",
          title: "RIOT Hybrid Board Game",
          description: "an iOS 4-player game app that leverages NFC technology to enhance interaction between physical game components and electronic devices.",
          img: "",
          techStack: ""
        },
        {
          type: "iOS App",
          title: "RIOT Hybrid Board Game",
          description: "an iOS 4-player game app that leverages NFC technology to enhance interaction between physical game components and electronic devices.",
          img: "",
          techStack: ""
        },
      ]
    }
  }
}
</script>

<style>
.portfolio {
  height: 100vh;
}

.portfolio-bar {
  display: flex;
  justify-content: center;
  height: 50px;
  position: relative;
  margin-bottom: 50px;
  /* background-color: blueviolet; */
}

.portfolio-bar ul{
  display: flex;
  justify-content: space-between;
  width: 30%;
  height: 100%;;
  position: absolute;
  /* background-color: cyan; */
}

.portfolio-bar ul li {
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 100%;
  font-weight: 500;
}

.portfolio-bar ul li:hover {
  background-color: var(--pink-color);
  cursor: default;
}

.detail-container {
  display: flex;
  flex-direction: row;
  overflow: auto;
}

.detail-view {
  display: flex;
  justify-self: space-evenly;
  align-items: center;
  width: 100%;
  /* height: 300px; */
  /* width: 1000px; */
  /* margin: 0 140px; */
  background-color: khaki;

}

.detail-view .detail-image {
  /* flex-grow: 1; */
  margin-right: 5%;
}

.detail-view .detail-description {
  /* width: 40%; */
  display: flex;
  flex-direction: column;
  text-align: left;
  /* flex-grow: 3s; */
}

.detail-view .detail-description .description {
  /* width: 70%; */
  /* background-color: cornflowerblue; */
}

.detail-description p:nth-child(1){
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 0;
}

.detail-description p:nth-child(2){
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 0;
}

.detail-description p:nth-child(3){
  font-size: 1.1em;
  font-weight: 500;

}

.techused img {
  width: 35pt;
}
</style>