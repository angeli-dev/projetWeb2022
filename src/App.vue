<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Body from "./components/Body.vue";
export default {
  components: { Header, Footer, Body },
  name: "App",
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  color: #383231;
}

h2 {
  font-weight: 700;
  font-size: 15pt;
  text-transform: uppercase;
  padding: 50px 50px 10px 50px;
}
</style>
