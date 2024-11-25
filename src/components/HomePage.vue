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
</style>