<template>
  <section class="welcome" id="home">
    <div class="welcoming">
      <div class="welcome-container">
        <div class="welcome-text">
          <div class="txt">
            <h1>HI, <span>Sha Nia here!</span></h1>
            <h5>an iOS Developer who does design.</h5>
          </div>
          <div class="socials">
            <a href="https://www.linkedin.com/in/shaniasiahaan/" target="_blank"><font-awesome-icon
                icon="fa-brands fa-linkedin-in" size="2x" /></a>
            <a href="https://github.com/shaniashn" target="_blank"><font-awesome-icon icon="fa-brands fa-github"
                size="2x" /></a>
            <a href="https://dribbble.com/shaniashn" target="_blank"><font-awesome-icon icon="fa-brands fa-dribbble"
                size="2x" /></a>
            <a href="https://drive.google.com/file/d/15Kw_gHj2kTkWmNSRBQf3AkllipPXEJVU/view?usp=drive_link"
              target="_blank"><font-awesome-icon icon="fa-regular fa-file" size="2x" /></a>
          </div>
        </div>
        <div class="welcome-img">
          <img src="../assets/hero-full.svg" alt="person waving">
          <img src="../assets/mobile-char-full.svg" alt="person waving">
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
.welcoming {
  height: 100vh;
  max-width: 100%;
  display: grid;
}

 .welcome-container {
  max-width: 100%;
  display: flex;
  padding: 0 10%;
  align-items: center;
  justify-content: space-between;

}

.welcome-text {
  text-align: start;
}

.txt {
  margin-bottom: 5%;
  padding: 0;
}

.welcome-text h1 {
  font-size: 5rem;
  font-weight: 800;
  margin: 0;
  padding: 0;
  color: var(--secondary-color);
}

.welcome-text h5 {
  font-size: xx-large;
  color: var(--secondary-color);
  margin: 0;
  padding: 0;
}

.welcome-img {
  width: 30%;
  min-width: 20%;
  padding-top: 10%;
  position: relative;
}

.welcome-img img:last-child {
  display: none;
}

.welcome-text .socials {
  max-width: 100%;
  width: 50%;
  display: flex;
  gap: 5%;
}

.welcome-text .socials a {
  background-color: var(--secondary-color);
  padding: 5%;
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
  aspect-ratio: 1/1;
}

@media screen and (max-width: 375px) {
  .welcoming {
    height: auto;
    padding: 25% 0;
  }

  .welcome-container {
    display: grid;
    justify-content: center;
    padding: 5%;
  }

  .welcome-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .txt {
    text-align: center;
  }

  .welcome-text h1 {
    font-size: 2.5rem;
  }

  .welcome-text h1 span{
    display: block;
  }

  .welcome-text h5 {
    font-size: 1.1rem;
  }

  .welcome-text .socials {
    max-width: 50%;
    height: fit-content;
    display: flex;
    justify-content: center;
    gap: 5%;
  }

  .welcome-text .socials a {
    background-color: var(--secondary-color);
    padding: 4%;
    text-align: center;
    border-radius: 50%;
  }

  .welcome-img img:first-child{
    display: none;
  }

  .welcome-img img:last-child{
    padding-top: 10%;
    display: block;
  } 

  .welcome-img {
    width: 100%;
  }
}

@media screen and (min-width: 375px) {
  .welcoming {
    height: auto;
    padding: 25% 0;
  }

  .txt {
    text-align: center;
  }

  .welcome-container {
    display: block;
    padding: 5%;
  }

  .welcome-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .welcome-text h1 {
    margin: 0;
    font-size: 3.5rem;
  }

  .welcome-text h5 {
    margin: 0;
    font-size: x-large;
  }

  .welcome-text .socials {
    max-width: 50%;
    justify-content: center;
  }

  .welcome-img img:first-child{
    display: none;
  }

  .welcome-img img:last-child{
    padding-top: 10%;
    display: block;
    margin: 5%;
  }

  .welcome-img {
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .welcoming {
    height: 100vh;
    max-width: 100%;
    display: grid;
    padding: 0;
  }

  .welcome-container {
    max-width: 100%;
    display: flex;
    padding: 0 10%;
    align-items: center;
    justify-content: space-between;
  }

  .welcome-text {
    display: grid;
  }

  .txt {
    text-align: start;
  }

  .welcome-text h1 {
    margin: 0;
    font-size: 4rem;
  }

  .welcome-text h5 {
    margin: 0;
    font-size: xx-large;
  }

  .welcome-text .socials {
    justify-content: flex-start;
  }

  .welcome-img img:last-child {
    display: none;
  } 

  .welcome-img img:first-child{
    display: block;
  }

  .welcome-img {
    width: 40%;
    max-width: 30%;
    padding-top: 10%;
    position: relative;
  }
}

</style>