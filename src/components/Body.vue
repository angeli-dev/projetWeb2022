<template>
  <div id="body">
    <FutureSection city="Paris"></FutureSection>
    <FutureSection city="Lyon"></FutureSection>
    <FutureSection city="Bordeaux"></FutureSection>
    <FutureSection city="Nantes"></FutureSection>
  </div>
</template>

<script>
import FutureSection from "./FutureSection.vue";
export default {
  name: "Body",
  components: { FutureSection },
};
</script>

<style>
#body {
  margin-top: 30vh;
}
</style>
