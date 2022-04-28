<template>
  <div id="menu">
    <router-link class="link" to="/tendances">Tendances</router-link>
    <router-link class="link" to="/rechercher">Rechercher</router-link>
    <router-link class="link" to="/a-propos">À propos</router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
#menu {
  display: flex;
  justify-content: space-evenly;
  width: 60vw;
  align-items: center;
}

.link {
  flex: 1 1 auto;
  text-align: center;
  font-weight: 700;
  font-size: 15pt;
  text-decoration: none;
  color: #fefffe;
}
</style>
