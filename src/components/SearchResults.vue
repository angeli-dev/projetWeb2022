<template>
  <div id="searchResults">
    <EventCard
      @selected-eventCard-id="update_selected_event_id"
      v-for="data in pimsData"
      :key="data.id"
      :id="data.id"
      :name="data.label"
      :date="
        new Date(data.datetime + 'Z').toLocaleString('fr-FR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })
      "
      :venue="data._embedded.venue.label"
      class="searchResultCard"
    ></EventCard>
  </div>
</template>

<script>
import EventCard from "./EventCard.vue";
import { getEventsBySearch } from "@/services/api/pimsAPI.js";
export default {
  components: { EventCard },
  name: "SearchResults",
  props: {
    filter: { type: String, required: false },
    search: { type: String, required: false },
  },
  data() {
    return {
      pimsData: this.retrievePimsData(
        localStorage.getItem("filter"),
        localStorage.getItem("search")
      ),
    };
  },
  watch: {
    search: function (newSearch) {
      localStorage.setItem("search", newSearch);
      this.retrievePimsData(this.filter, newSearch);
    },
    filter: function (newFilter) {
      localStorage.setItem("filter", newFilter);
      this.retrievePimsData(newFilter, this.search);
    },
  },
  methods: {
    retrievePimsData: async function (filter, search) {
      let data = await getEventsBySearch(filter, search);
      this.pimsData = data;
    },
    update_selected_event_id: function (payload) {
      this.$emit("selected-eventCard-id", { id: payload.id });
    },
  },
};
</script>

<style>
#searchResults {
  margin: auto;
  margin-top: 5vw;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
}

.searchResultCard {
  margin: 2vh;
}
</style>
