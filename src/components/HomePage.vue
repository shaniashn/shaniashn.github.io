<template>
  <section class="welcome">
  <nav>
    <ul>
      <a href="">
        <img src="" alt="">
        shania.shn
      </a>
    </ul>
    <ul>
      <li>projects</li>
      <li>about</li>
      <li>resume</li>
    </ul>
  </nav>
  <div class="welcoming">
    <div class="welcome-text">
      <h1>oh, HI!</h1>
      <h1>i am Sha Nia Siahaan</h1>
      <h5>an iOS Developer and who does design.</h5>
    </div>
    <div class="welcome-img">
      <!-- <HeroImage /> -->
       <img src="../assets/fullbodyfull.svg" alt="person waving" >
       <!-- <img src="../assets/logo.png" alt=""> -->
    </div>
  </div>
  <div class="socials">
    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
    <font-awesome-icon icon="fa-brands fa-github" />
    <font-awesome-icon icon="fa-brands fa-dribbble" />
    <font-awesome-icon icon="fa-regular fa-file" />
  </div>
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
  nav ul a {
    text-decoration: none;
  }

  nav, nav ul {
    display: flex;
    justify-content: space-around;
  }

  nav ul:last-child {
    width: 20%;
  }

  nav ul li {
    list-style: none;
  }

  .welcome {
    height: 100vh;
  }

  .welcoming {
    text-align: left;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .welcoming h1{
    font-size: 100px;
    line-height: 0%;
    /* background-color: bisque; */
    width: 100%;
  }

  .welcoming h5 {
    font-size: xx-large;
    /* line-height: 0%; */
  }

  .welcome-img {
    width: 25%;
  }
</style>