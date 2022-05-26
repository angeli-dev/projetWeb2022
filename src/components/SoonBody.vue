<template>
  <div id="soonBody">
    <SoonSection
      @selected-eventCard-id="update_selected_event_id"
      city="Paris"
    ></SoonSection>
    <SoonSection
      @selected-eventCard-id="update_selected_event_id"
      city="Lyon"
    ></SoonSection>
    <SoonSection
      @selected-eventCard-id="update_selected_event_id"
      city="Bordeaux"
    ></SoonSection>
    <SoonSection
      @selected-eventCard-id="update_selected_event_id"
      city="Nantes"
    ></SoonSection>
  </div>
</template>

<script>
import SoonSection from "./SoonSection.vue";

export default {
  name: "SoonBody",
  components: { SoonSection },

  methods: {
    update_selected_event_id: function (payload) {
      this.$emit("selected-eventCard-id", { id: payload.id });
    },
  },
};
</script>

<style>
#soonBody {
  margin-top: 30vh;
}
</style>
