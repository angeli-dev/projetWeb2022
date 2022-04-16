<template>
  <div id="app">
    <MainBox @selected-eventCard-id="update_selected_event_id"></MainBox>
    <EventBox :id="id_selected_event"></EventBox>
  </div>
</template>

<script>
import MainBox from "./components/MainBox.vue";
import EventBox from "./components/EventBox.vue";

export default {
  components: { MainBox, EventBox },
  name: "App",
  data(){
      return {
          id_selected_event: this.id_selected_event
      }
  },
  methods: {
    update_selected_event_id: function (payload) {
      this.id_selected_event = payload.id
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  color: #383231;
  display: flex;
  justify-content: center;
}

h2 {
  font-weight: 700;
  font-size: 15pt;
  text-transform: uppercase;
  padding: 50px 50px 10px 50px;
}
</style>
