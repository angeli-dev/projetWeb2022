<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
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
