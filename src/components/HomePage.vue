<template>
  <header>
    <nav>
    <ul>
      <a href="#home">
        shania.shn
      </a>
    </ul>
    <ul>
      <li>projects</li>
      <li>about</li>
      <li>resume</li>
    </ul>
  </nav>
  </header>
  <section class="welcome" id="home">
    <div class="welcoming">
      <div class="welcome-text">
        <h1>HI, <span>Sha Nia</span> here!</h1>
        <h5>an iOS Developer who does design.</h5>
        <div class="socials">
          <a href=""><font-awesome-icon icon="fa-brands fa-linkedin-in" size="2x" /></a>
          <a href=""><font-awesome-icon icon="fa-brands fa-github" size="2x" /></a>
          <a href=""><font-awesome-icon icon="fa-brands fa-dribbble" size="2x" /></a>
          <a href=""><font-awesome-icon icon="fa-regular fa-file" size="2x" /></a>
        </div>
      </div>
      <div class="welcome-img">
        <img src="../assets/hero-full.svg" alt="person waving">
      </div>
    </div>
  </section>
  <section class="portfolio">
    <h1>text</h1>
    <div class="aaaaa"></div>
    <div class="aaaaa"></div>
  </section>
</template>

<script>
// import HeroImage from '../assets/l';

export default {
  name: 'HomePage',
  components: {
    // HeroImage
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: var(--primary-color);
}

ul {
  margin: 0;
}

header {
  backdrop-filter: blur(5px);
  position: fixed;
  height: 70px;
  width: 100%;
  background-color: rgb(255, 248, 243, 0.5);
  top: 0;
}

nav {
  display: flex;
  justify-content: space-around;
  background-color: var(--lightgreen-color);
  height: 50px;
  width: 100%;
  position: relative;
  top: 20px;
  backdrop-filter: blur(5px);
}

nav ul li {
  display: flex;
  align-items: center;
  background-color: var(--green-color);
  position: relative;
  align-self: center;
  padding: 0 15px;
  height: 100%;
}

nav ul {
  display: flex;
  justify-content: space-between;
  position: absolute;
  height: 100%;
}

nav ul a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

nav ul a,
nav ul li {
  font-size: 1.5em;
  font-weight: 600;
  color: var(--secondary-color);
}

nav ul:first-child {
  left: 10%;
}

nav ul:last-child {
  width: 30%;
  right: 10%;
}

.welcome {
  height: 100%;
}

.welcoming {
  text-align: left;
  margin: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.welcome-text {
  line-height: 0%;
}

.welcome-text h1 {
  width: 100%;
  font-size: 5.5rem;
  font-weight: 800;
  color: var(--secondary-color);
}

.welcome-text h1 span {
  color: var(--secondary-color);
}

.welcome-text h5 {
  font-size: xx-large;
  color: var(--secondary-color);
}

.welcome-img {
  width: 30%;
}

.welcome-text .socials {
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  /* margin-top: 15%; */
}

.welcome-text .socials a {
  background-color: var(--secondary-color);
  padding: 15px;
  text-align: center;
  border-radius: 50%;
  color: var(--primary-color);
}

.welcome .socials svg {
  width: 25px;
  height: 25px;
}
</style>