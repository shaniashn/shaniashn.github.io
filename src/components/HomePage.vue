<template>
    <WelcomeView />
    <PortfolioView />
    <AboutPage />
    <FooterView />
    <NavigationBar/>
</template>

<script>
import NavigationBar from './NavigationBar.vue';
import PortfolioView from './PortfolioView.vue';
import AboutPage from './AboutPage.vue';
import WelcomeView from './WelcomeView.vue';
import FooterView from './FooterView.vue';

export default {
  name: 'HomePage',
  components: {
    NavigationBar,
    PortfolioView,
    AboutPage,
    WelcomeView,
    FooterView
  }
}
</script>

<style>
section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

Nav {
  position: sticky;
  z-index: 10009;
}
</style>