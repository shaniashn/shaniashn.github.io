<template>
  <section class="portfolio" id="portfolio">
    <div class="portfolio-bar">
      <ul>
        <li v-for="(category, index) in categories" :key="index" @click="goTo(index)">{{ category }}</li>
      </ul>
    </div>

    <div class="detail-container">
      <div class="arrows">
        <font-awesome-icon @click="goTo(index - 1)" icon="fa-solid fa-arrow-left" />
      </div>
      <div class="detail-view">
        
        <div class="detail-image">
           <img :src="current.img" :alt="current.title" :style="{border: borderColors}">
        </div>
        <div class="detail-description">
          <div class="detail-title">
            <p class="type">{{ current.type }}</p>
            <p class="title">{{ current.title }}</p>
          </div>
          <div class="detail-desc">
            <p class="description">{{ current.description }}</p>
          <div class="techused">
            <img src="../assets/techstack/swift.svg" alt="">
          </div>
          </div>
        </div>
      </div>
      <div class="arrows">
          <font-awesome-icon @click="goTo(index + 1)" icon="fa-solid fa-arrow-right" />
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
      // The only piece of "which project is showing" state.
      index: 0,
      borderColors: ''
    }
  },
  computed: {
    // Always derived from `index`, so the screen can't drift out of sync.
    current() {
      console.log('current re-ran, index =', this.portfolio[this.index]);
      return this.portfolio[this.index];
    }
  },
  created() {
    this.changeBorderColor();
  },
  methods: {
    changeBorderColor() {
      const colors = ["#ABD9BB", "#E6A4B4", "#79C4E2"];
      const randomNum = Math.floor(Math.random() * colors.length);
      this.borderColors = `5px solid ${colors[randomNum]}`;
    },
    // Go to any index; wraps around in both directions for any number of projects.
    goTo(newIndex) {
      const len = this.portfolio.length;
      this.index = (newIndex + len) % len;
      this.changeBorderColor();
    }
  }
}
</script>

<style>
.portfolio {
  padding: 10%;
  font-size: 1.1rem;
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
  justify-content: center;
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
  display: flex;
  flex-direction: row;
  overflow: auto;
  align-items: center;
}

.detail-view {
  display: flex;
  justify-self: space-evenly;
  align-items: center;
  width: 100vw;
  padding: 8% 5%;
}

.detail-view .detail-image {
  flex-grow: 1;
  margin-right: 5%;
  width: 100%;
  min-width: 50%;
}

.detail-view .detail-image img {
  width: 100%;
}

.detail-view .detail-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
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
  /* font-size: 1.1em; */
  font-weight: 500;
}

.techused img {
  width: 35pt;
}

.arrows svg {
  width: 25px;
  height: 25px;
  aspect-ratio: 1/1;
  padding: 10px;
  background-color:rgb(38, 37, 36);
  color: #79C4E2;
  border-radius: 75pt;
}

@media screen and (min-width: 375px) {
  .arrows {
    display: none;
  }

  .detail-view {
    padding: 0 11%;
    flex-direction: column;
  }
  .portfolio-bar {
    margin-bottom: 10%;
  }
}

@media screen and (max-width: 375px) {
  .portfolio {
    padding: 0
  }
  .portfolio-bar ul {
    width: 100%;
  }
  .portfolio-bar ul li {
    padding: 0 5px;
  }
  .detail-view {
    padding: 5% 11%;
    flex-direction: column;
  }

  .arrows svg {
    color:rgb(38, 37, 36);
    background: none;
  }
}

@media screen and (max-width: 576px) {
  .detail-view {
    flex-direction: column;
  }
}

@media screen and (min-width: 768px) {
  .detail-view {
    flex-direction: column;
    padding: 0 5%;
  }
  .portfolio {
    padding: 8%;
  }

  .detail-image img {
    max-width: 90%;
  }
}

@media screen and (min-width: 992px) {
  .detail-view {
    flex-direction: row;
    padding: 0 2%;
  }

  .arrows {
    display: block;
  }
}

</style>