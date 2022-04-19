<template>
  <div id="body">
    <FutureSection
      @selected-eventCard-id="update_selected_event_id"
      city="Paris"
    ></FutureSection>
    <FutureSection
      @selected-eventCard-id="update_selected_event_id"
       city="Lyon"></FutureSection>
    <FutureSection
      @selected-eventCard-id="update_selected_event_id"
       city="Bordeaux"></FutureSection>
    <FutureSection
      @selected-eventCard-id="update_selected_event_id"
       city="Nantes"></FutureSection>
  </div>
</template>

<script>
import FutureSection from "./FutureSection.vue";
export default {
  name: "Body",
  components: { FutureSection },
  methods: {
    update_selected_event_id: function (payload) {
      this.$emit("selected-eventCard-id", { id : payload.id });
    }
  }
};
</script>

<style>
#body {
  margin-top: 30vh;
}
</style>
