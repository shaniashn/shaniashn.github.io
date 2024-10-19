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
    <div class="detail-view">
      <div class="detail-image">
        <img src="../assets/rect.svg" alt="">
      </div>
      <div class="detail-description">
        <p class="type">iOS App</p>
        <p class="title">RIOT Hybrid Board Game</p>
        <p class="description">
          an iOS 4-player game app that leverages NFC technology to enhance interaction between physical game components and electronic devices.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioView'
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
  
}

.portfolio-bar ul li:hover {
  background-color: var(--green-color);
  cursor: default;
}

</style>