<template>
  <div id="recherches">
    <RecherchesBox></RecherchesBox>
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
    },
  },
};
</script>

<style></style>
