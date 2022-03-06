<template>
  <div id="tendances">
    <Event></Event>
  </div>
</template>

<script>
import Event from "./Event.vue";
export default {
  name: "Tendances",
  components: { Event },
};
</script>

<style>
#tendances {
  margin: auto;
  display: flex;
  width: 80vw;
  justify-content: space-evenly;
}
</style>
