<template>
  <div id="tendancesBox">
    <Header></Header>
    <Body @selected-eventCard-id="update_selected_event_id"></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Body from "./Body.vue";
export default {
  components: { Header, Footer, Body },
  name: "TendancesBox",
  methods: {
    update_selected_event_id: function (payload) {
      this.$emit("selected-eventCard-id", { id: payload.id });
    },
  },
};
</script>

<style></style>
