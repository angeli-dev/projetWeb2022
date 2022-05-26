<template>
  <div id="soonPage">
    <SoonBox @selected-eventCard-id="update_selected_event_id"></SoonBox>
    <EventBox :id="id_selected_event"></EventBox>
  </div>
</template>

<script>
import SoonBox from "@/components/SoonBox.vue";
import EventBox from "@/components/EventBox.vue";

export default {
  components: { SoonBox, EventBox },
  name: "SoonPage",

  data() {
    return {
      id_selected_event: this.id_selected_event,
    };
  },

  methods: {
    update_selected_event_id: function (payload) {
      this.id_selected_event = payload.id;
    },
  },
};
</script>

<style>
#soonPage {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  color: #383231;
  display: flex;
  justify-content: center;
}
</style>
