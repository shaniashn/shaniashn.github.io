<template>
  <section class="portfolio">
    <div class="portfolio-title">projects</div>
    <div class="portfolio-bar">
      <ul>
        <li v-for="(category, index) in categories" :key="index" @click="selectedItem(index)">{{ category }}</li>
      </ul>
    </div>
    <div class="detail-container">

      <div class="detail-view">
      <div class="detail-image">
        <img src="../assets/rect.svg" alt="">
      </div>
      <div class="detail-description">
        <p class="type">{{ portoType }}</p>
        <p class="title">{{ portoTitle }}</p>
        <p class="description">{{ portoDesc }}</p>
        <div class="techused">
          <img src="../assets/techstack/swift.svg" alt="">
        </div>
      </div>
      <div class="arrows">
       <font-awesome-icon @click="setViewLeft" icon="fa-solid fa-arrow-left" />
        <font-awesome-icon @click="setViewRight" icon="fa-solid fa-arrow-right" />
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
      categories: ['Electra', 'GuidEducation', 'Ghone', 'RIOT'],
      portfolio: [
        {
          type: "iOS App",
          title: "Electra",
          description: "an iOS 4-player game app that leverages NFC technology to enhance interaction between physical game components and electronic devices.",
          img: "",
          techStack: ""
        },
        {
          type: "iOS App",
          title: "GuidEducation",
          description: "yeyyq",
          img: "",
          techStack: ""
        },
        {
          type: "iOS App",
          title: "Ghone",
          description: "yeyyq",
          img: "",
          techStack: ""
        },
        {
          type: "iOS App",
          title: "RIOT Hybrid Board Game",
          description: "yeyyq",
          img: "",
          techStack: ""
        },
      ],
      index: '0',
      portoTitle: '',
      portoType: '',
      portoDesc: ''

    }
  },
  methods: {
    setViewRight(){
      if (this.index == this.portfolio.length-1) this.index = 0;
      else {
        this.index++;
      }

      this.portoTitle = this.portfolio[this.index].title;
      this.portoType = this.portfolio[this.index].type;
      this.portoDesc = this.portfolio[this.index].description;
    },
    setViewLeft(){
      let selected = Math.abs((-1 + this.index) % this.portfolio.length);
      this.index = selected;
      
      this.portoTitle = this.portfolio[selected].title;
      this.portoType = this.portfolio[selected].type;
      this.portoDesc = this.portfolio[selected].description;
    },
    selectedItem(index){
      this.portoTitle = this.portfolio[index].title;
      this.portoType = this.portfolio[index].type;
      this.portoDesc = this.portfolio[index].description;
    }
  },
  mounted() {
    this.setViewRight();
    this.setViewLeft();
  }
}
</script>

<style>
.portfolio {
  height: 100vh;
}

.portfolio-title {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: var(--lightgreen-shade-color);
  padding: 0 10%;
}

.portfolio-bar {
  display: flex;
  justify-content: center;
  height: 50px;
  position: relative;
  margin-bottom: 50px;
}

.portfolio-bar ul{
  display: flex;
  justify-content: space-between;
  width: 30%;
  height: 100%;;
  position: absolute;
}

.portfolio-bar ul li {
  font-size: 1.1rem;
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
  /* width: max-content; */
  display: flex;
  flex-direction: row;
  overflow: auto;
}

.detail-view {
  display: flex;
  justify-self: space-evenly;
  align-items: center;
  width: 100vw;
  padding: 70px 150px;
  /* background-color: khaki; */

}

.detail-view .detail-image {
  flex-grow: 1;
  margin-right: 5%;
}

.detail-view .detail-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  width: 60%;
  /* background-color: blanchedalmond; */
  height: 100%;
  padding: 30px 0;
  box-sizing: border-box;
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

.arrows {
  position: absolute;
  display: flex;
  justify-content: space-between;
  /* background-color: darkgreen; */
  left: 50px;
  right: 50px;
}

.arrows svg {
  width: 30px;
  height: 30px;
  padding: 20px;
}
</style>