<template>
  <div id="tendances">
    <TendancesBox
      @selected-eventCard-id="update_selected_event_id"
    ></TendancesBox>
    <EventBox :id="id_selected_event"></EventBox>
  </div>
</template>

<script>
import TendancesBox from "@/components/TendancesBox.vue";
import EventBox from "@/components/EventBox.vue";

export default {
  components: { TendancesBox, EventBox },
  name: "Tendances",
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
#tendances {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  color: #383231;
  display: flex;
  justify-content: center;
}
</style>
