<template>
  <div id="section">
    <h2>
      Tendances à <span>{{ titre }}</span>
    </h2>
    <Tendances></Tendances>
  </div>
</template>

<script>
import Tendances from "./Tendances.vue";
export default {
  name: "Section",
  components: { Tendances },
  props: { titre: { type: String, required: true } },
};
</script>

<style></style>
