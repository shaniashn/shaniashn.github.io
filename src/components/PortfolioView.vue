<template>
  <section class="portfolio" id="portfolio">
    <!-- <div class="portfolio-title"><p>projects</p></div> -->
    <div class="portfolio-bar">
      <ul>
        <li v-for="(category, index) in categories" :key="index" @click="selectedItem(index)">{{ category }}</li>
      </ul>
    </div>
    <div class="detail-container">
      <div class="detail-view">
        <div class="detail-image">
           <img v-bind:src=portoImg  alt="">
           
        </div>
        <div class="detail-description">
          <div class="detail-title">
            <p class="type">{{ portoType }}</p>
            <p class="title">{{ portoTitle }}</p>
          </div>

          <div class="detail-desc">
            <p class="description">{{ portoDesc }}</p>
          <div class="techused">
            <img src="../assets/techstack/swift.svg" alt="">
          </div>
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
import ghoneImg from '../assets/ghone.png';
import riotImg from '../assets/riot.png';
import electraImg from '../assets/electra.png';
import guideducationImg from '../assets/guideducation.png';

export default {
  name: 'PortfolioView',
  data() {
    return {
      categories: ['RIOT', 'Ghone', 'Electra', 'GuidEducation'],
      portfolio: [
        {
          type: "iOS App",
          title: "RIOT Hybrid Board Game",
          description: "an iOS app that helps board game players to play hybrid board games and bridges the playing experience with physical and digital components with NFC technology.",
          img: riotImg,
          techStack: ""
        },
        {
          type: "iOS App",
          title: "Ghone",
          description: "an iOS app that brings a virtual companion to life and will accompany you through moments of unease.",
          img: ghoneImg,
          techStack: ""
        },
        {
          type: "iOS App",
          title: "Electra",
          description: "a native iOS app that can calculate electricity usage and electricity cost for people who want to optimize their electricity bill budget by inputing factors that used for calculate electricity usage such as watt, time (hour) and tariff/kWh",
          img: electraImg,
          techStack: ""
        },
        {
          type: "iOS App",
          title: "GuidEducation",
          description: "an iOS app that could help high school teachers to teach better by providing guidelines that can help students’ engagement",
          img: guideducationImg,
          techStack: ""
        },
      ],
      index: '-1',
      portoTitle: '',
      portoType: '',
      portoDesc: '',
      portoImg: riotImg

    }
  },
  methods: {
    setViewRight(){
      // console.log(this.index);
      if (this.index == this.portfolio.length-1) this.index = 0;
      else {
        this.index++;
      }

      this.portoTitle = this.portfolio[this.index].title;
      this.portoType = this.portfolio[this.index].type;
      this.portoImg = this.portfolio[this.index].img;
      this.portoDesc = this.portfolio[this.index].description;
    },
    setViewLeft(){
      console.log("left", this.index);
      
      let selected = Math.abs((3 - this.index) % this.portfolio.length);
      this.index = selected;
      console.log("selected ", selected);
      
      this.portoTitle = this.portfolio[selected].title;
      this.portoType = this.portfolio[selected].type;
      this.portoImg = this.portfolio[selected].img;
      this.portoDesc = this.portfolio[selected].description;
    },
    selectedItem(index){
      this.portoTitle = this.portfolio[index].title;
      this.portoType = this.portfolio[index].type;
      this.portoImg = this.portfolio[index].img;
      this.portoDesc = this.portfolio[index].description;
    }
  },
  mounted() {
    this.setViewRight();
    console.log(this.index);
    
    // this.setViewLeft();
  }
}
</script>

<style>
.portfolio {
  height: max-content;
  padding: 10%;
}

.portfolio-title {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: var(--lightgreen-shade-color);
  padding: 0 10%;
  font-size: 1.1rem;
  font-weight: 600;
}

.portfolio-bar {
  display: flex;
  justify-content: center;
  height: 50px;
  position: relative;
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
  padding: 70px 0;
  /* background-color: khaki; */
}

.detail-view .detail-image {
  flex-grow: 1;
  margin-right: 5%;
}

.detail-view .detail-image img {
  width: 100%;
  border: 5px solid var(--green-color);
}

.detail-view .detail-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  /* background-color: blanchedalmond; */
  height: 100%;
  padding-block: 30px 0;
  box-sizing: border-box;
}

.detail-title p {
  font-size: 1.1rem;
  font-weight: 600;
}

.detail-title .title{
  font-size: 1.7rem;
  font-weight: 600;
}

.detail-desc p {
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