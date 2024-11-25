<template>
  <section class="welcome" id="home">
    <div class="welcoming">
      <div class="welcome-container">
        <div class="welcome-text">
        <h1>HI, <span>Sha Nia</span> here!</h1>
        <h5>an iOS Developer who does design.</h5>
        <div class="socials">
          <a href="https://www.linkedin.com/in/shaniasiahaan/" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin-in" size="2x" /></a>
          <a href="https://github.com/shaniashn" target="_blank"><font-awesome-icon icon="fa-brands fa-github" size="2x" /></a>
          <a href="https://dribbble.com/shaniashn" target="_blank"><font-awesome-icon icon="fa-brands fa-dribbble" size="2x" /></a>
          <a href="https://docs.google.com/document/d/1laLjxe9eH63vIoRfLF0_wORnFrbtDu7MZRh8EoR3urA/edit?tab=t.0" target="_blank"><font-awesome-icon icon="fa-regular fa-file" size="2x" /></a>
        </div>
      </div>
      <div class="welcome-img">
        <img src="../assets/hero-full.svg" alt="person waving">
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WelcomeView',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.welcome {
  height: max-content;
  position: relative;
}

.welcome-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.welcoming {
  position: relative;
  text-align: left;
  padding: 10% 120px 10%;
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
}

.welcome-text .socials a {
  background-color: var(--secondary-color);
  padding: 15px;
  text-align: center;
  border-radius: 50%;
}

.welcome-text .socials a:nth-child(1) {
  color: var(--blue-color);
}

.welcome-text .socials a:nth-child(2) {
  color: var(--green-color);
}

.welcome-text .socials a:nth-child(3) {
  color: var(--pink-color);
}

.welcome-text .socials a:nth-child(4) {
  color: var(--lightgreen-color);
}

.welcome .socials svg {
  width: 25px;
  height: 25px;
}
</style>