<template>
  <div id="body">
    <Section></Section>
    <Section></Section>
    <Section></Section>
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
