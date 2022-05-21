<template>
  <div id="recherches">
    <RecherchesBox
      @selected-eventCard-id="update_selected_event_id"
    ></RecherchesBox>
    <EventBox :id="id_selected_event"></EventBox>
  </div>
</template>

<script>
import RecherchesBox from "@/components/RecherchesBox.vue";
import EventBox from "@/components/EventBox.vue";

export default {
  components: { RecherchesBox, EventBox },
  name: "Recherches",
  data() {
    return {
      id_selected_event: this.id_selected_event,
    };
  },
  methods: {
    update_selected_event_id: function (payload) {
      this.id_selected_event = payload.id;
      console.log(this.id_selected_event);
    },
  },
};
</script>

<style>
#recherches {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  color: #383231;
  display: flex;
  justify-content: center;
}
</style>
