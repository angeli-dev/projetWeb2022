<template>
  <div id="soonBox">
    <Header></Header>
    <SoonBody @selected-eventCard-id="update_selected_event_id"></SoonBody>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SoonBody from "./SoonBody.vue";
export default {
  components: { Header, Footer, SoonBody },
  name: "SoonBox",

  methods: {
    update_selected_event_id: function (payload) {
      this.$emit("selected-eventCard-id", { id: payload.id });
    },
  },
};
</script>
