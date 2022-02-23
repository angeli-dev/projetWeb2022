<template>
  <div id="body">
    <Section titre="Paris"></Section>
    <Section titre="Lyon"></Section>
    <Section titre="Bordeaux"></Section>
  </div>
</template>

<script>
import Section from "./Section.vue";
export default {
  name: "Body",
  components: { Section },
};
</script>

<style>
#body {
  margin-top: 30vh;
}
</style>
