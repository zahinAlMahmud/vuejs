<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Navbar/>
  <MainContent/>
  <CardContent/>
  <SecondContent/>
  <AboutPage/>
  <Weare/>
  <TeamDescription/>

  <!-- <RotatingGallery/> -->
  <!-- <Combination/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AboutPage from './components/AboutPage.vue';
import CardContent from './components/CardContent.vue';
// import Combination from './components/Combination.vue';
import MainContent from './components/MainContent.vue';
import Navbar from './components/Navbar.vue';
// import RotatingGallery from './components/RotatingGallery.vue';
import SecondContent from './components/SecondContent.vue';
import TeamDescription from './components/TeamDescription.vue';
import Weare from './components/Weare.vue';

export default {
  name: 'HomePageView',
  components: {
    // HelloWorld,
    Navbar,
    MainContent,
    CardContent,
    SecondContent,
    AboutPage,
    Weare,
    TeamDescription
    // RotatingGallery,
    // Combination
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
