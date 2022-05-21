<template>
  <div id="searchTab">
    <label for="event-filter">Je recherche les concerts </label>
    <select v-model="eventFilter" id="event-filter" v-on:change="event_filter">
      <option value="label">d'un artiste</option>
      <option value="venue_label">dans une salle</option>
      <option value="venue_city">dans une ville</option>
    </select>
    <input
      type="text"
      v-on:input="event_search"
      v-model="eventSearch"
      name="event-search"
      placeholder="... ?"
    />
  </div>
</template>

<script>
export default {
  components: {},
  name: "searchTab",
  data() {
    return {
      eventSearch: localStorage.getItem("search") ?? "",
      eventFilter: localStorage.getItem("filter") ?? "artist",
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
select,
input,
select:focus,
input::placeholder {
  background-color: #15b9c1;
  border: none;
  font-size: 12pt;
  color: #383231;
}
</style>
