<template>
  <div id="app">
    <MainBox></MainBox>
    <EventBox></EventBox>
  </div>
</template>

<script>
import MainBox from "./components/MainBox.vue";
import EventBox from "./components/EventBox.vue";

export default {
  components: { MainBox, EventBox },
  name: "App",
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  color: #383231;
  display: flex;
  justify-content: center;
}

h2 {
  font-weight: 700;
  font-size: 15pt;
  text-transform: uppercase;
  padding: 50px 50px 10px 50px;
}
</style>
