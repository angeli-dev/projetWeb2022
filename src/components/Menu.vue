<template>
  <div id="menu">
    <p>À propos</p>
    <p>Tendances</p>
    <p>Rechercher</p>
    <p>À propos</p>
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

#menu p {
  flex: 1 1 auto;
  text-align: center;
  font-weight: 700;
  font-size: 15pt;
}
</style>
