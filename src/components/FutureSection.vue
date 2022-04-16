<template>
  <div id="futureSection">
    <h2>
      À venir à <span>{{ city }}</span>
    </h2>
    <div class="futureEvents">
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
            hour: 'numeric',
            minute: 'numeric',
          })
        "
        :venue="data._embedded.venue.label"
      ></EventCard>
    </div>
  </div>
</template>

<script>
import EventCard from "./EventCard.vue";
import { getEventsInCity } from "@/services/api/pimsAPI.js";

export default {
  name: "FutureSection",
  components: { EventCard },
  props: {
    city: { type: String, required: true },
    selected_event_id: { type: Number, required: false },
  },
  data() {
    return {
      pimsData: [
        {
          id: 1,
          label: "Théo Dionisi",
          datetime: "2022-03-08T20:00:00",
          _embedded: {
            venue: { label: "Olympia" },
          },
        },
        {
          id: 2,
          label: "Théo Dionisi",
          datetime: "2022-03-08T20:00:00",
          _embedded: {
            venue: { label: "Olympia" },
          },
        },
        {
          id: 3,
          label: "Théo Dionisi",
          datetime: "2022-03-08T20:00:00",
          _embedded: {
            venue: { label: "Olympia" },
          },
        },
        {
          id: 4,
          label: "Théo Dionisi",
          datetime: "2022-03-08T20:00:00",
          _embedded: {
            venue: { label: "Olympia" },
          },
        },
      ],
    };
  },
  created: function () {
    this.retrievePimsData();
  },
  methods: {
    retrievePimsData: async function () {
      this.pimsData = await getEventsInCity(this.city);
    },
    update_selected_event_id: function (payload) {
      //console.log(payload);
      this.selected_event_id = payload.id;
      console.log(this.selected_event_id);
    },
  },
};
</script>

<style>
.futureEvents {
  margin: auto;
  display: flex;
  width: 80vw;
  justify-content: space-evenly;
}
</style>
