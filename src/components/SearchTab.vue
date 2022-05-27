<template>
  <div id="searchTab">
    <label for="event-filter">Je recherche les concerts </label>
    <select v-model="eventFilter" id="event-filter" v-on:change="event_filter">
      <option value="label" selected>d'un artiste</option>
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
    <label for="event-sort"> trié par </label>
    <select v-model="eventSort" id="event-sort" v-on:change="event_sort">
      <option value="AZArtist" selected>artiste ⏫</option>
      <option value="ZAArtist">artiste ⏬</option>
      <option value="AZDate">date ⏫</option>
      <option value="ZADate">date ⏬</option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  name: "searchTab",

  data() {
    return {
      eventSearch: localStorage.getItem("search") ?? "",
      eventFilter: localStorage.getItem("filter") ?? "label",
      eventSort: localStorage.getItem("sort") ?? "AZDate",
    };
  },

  methods: {
    event_search: function () {
      this.$emit("selectedEventSearch", this.eventSearch);
    },
    event_filter: function () {
      this.$emit("selectedEventFilter", this.eventFilter);
    },
    event_sort: function () {
      this.$emit("selectedEventSort", this.eventSort);
    },
  },
};
</script>

<style>
#searchTab {
  margin-top: 50vh;
  display: flex;
  flex-wrap: wrap;
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
