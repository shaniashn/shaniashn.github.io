<template>
  <WelcomeView />
  <PortfolioView />
  <AboutPage />
  <Nav />
</template>

<script>
import Nav from './NavigationBar.vue';
import PortfolioView from './PortfolioView.vue';
import AboutPage from './AboutPage.vue';
import WelcomeView from './WelcomeView.vue';

export default {
  name: 'HomePage',
  components: {
    Nav,
    PortfolioView,
    AboutPage,
    WelcomeView
  }
}
</script>

<style>
.section {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}

Nav {
  position: sticky;
  z-index: 10009;
}

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