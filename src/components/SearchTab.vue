<template>
  <div id="searchTab">
    <label for="event-filter">Je recherche les concerts d' </label>
    <select v-model="eventFilter" id="event-filter" v-on:change="event_filter">
      <option value="artist">un artiste</option>
      <option value="place">un lieu</option>
    </select>
    <input
      type="text"
      v-on:input="event_search"
      v-model="eventSearch"
      name="event-search"
      placeholder="Chercher des événements"
    />
  </div>
</template>

<script>
export default {
  components: {},
  name: "searchTab",
  data() {
    return {
      eventSearch: "",
      eventFilter: "artist",
    };
  },
  methods: {
    event_search: function () {
      this.$emit("selectedEventSearch", this.eventSearch);
    },
    event_filter: function () {
      this.$emit("selectedEventFilter", this.eventFilter);
    },
  },
};
</script>

<style>
#searchTab {
  margin-top: 50vh;
  display: flex;
  justify-content: center;
  z-index: 20;
}
</style>
