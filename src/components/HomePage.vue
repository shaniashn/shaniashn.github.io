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
      <h1>HI, Sha Nia here!</h1>
      <h5>an iOS Developer and who does design.</h5>
      <div class="socials">
        <a href=""><font-awesome-icon icon="fa-brands fa-linkedin-in" size="2x" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-github" size="2x" /></a>
        <a href=""><font-awesome-icon icon="fa-brands fa-dribbble" size="2x" /></a>
        <a href=""><font-awesome-icon icon="fa-regular fa-file" size="2x" /></a>
      </div>
    </div>
    <div class="welcome-img">
       <img src="../assets/hero-full.svg" alt="person waving" >
    </div>
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
    height: 100%;
  }

  .welcoming {
    text-align: left;
    margin: 100px 120px 0;
    display: flex;
    /* background-color: aqua; */
    align-items: center;
    justify-content: space-between;
  }

  .welcome-text {
    line-height: 0%;
    /* background-color: rgb(144, 198, 28); */
  }

  .welcome-text h1{
    width: 100%;
    font-size: 90px;
    font-weight: 800;
  }

  .welcome-text h5 {
    font-size: xx-large;
  }

  .welcome-img {
    width: 25%;
  }
  .welcome-text .socials {
    width: 50%;
    height: fit-content;
    /* background-color: beige; */
    display: flex;
    justify-content: space-between;
    margin-top: 15%;
  }

  .welcome-text .socials a {
    background-color: tomato;
    padding: 15px;
    text-align: center;
    border-radius: 50%;
  }

  .welcome .socials svg {
    width: 25px;
    height: 25px;
  }
  
</style>