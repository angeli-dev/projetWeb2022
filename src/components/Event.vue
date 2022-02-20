<template>
  <div id="event">
    <p>Il n'est pas trop tard</p>
    <p>Garou</p>
    <p>Olympia de Paris</p>
  </div>
</template>

<script>
export default {
  name: "Event",
};
</script>

<style>
#event {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fefffe;
  border-radius: 10%;
  box-shadow: 0.25vh 0.25vh 2vh #6b6b6b7a;
  padding: 2vw;
}

#event p {
  text-align: center;
  font-weight: 700;
  font-size: 15pt;
}
</style>
