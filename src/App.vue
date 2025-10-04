<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Navbar/>
  <MainContent/>
  <CardContent/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CardContent from './components/CardContent.vue';
import MainContent from './components/MainContent.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    MainContent,
    CardContent
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
