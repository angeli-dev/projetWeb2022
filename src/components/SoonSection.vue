<template>
  <div id="soonSection">
    <h2>
      À venir à <span>{{ city }}</span>
    </h2>
    <div class="soonEvents">
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
      ></EventCard>
    </div>
  </div>
</template>

<script>
import EventCard from "./EventCard.vue";
import { getEventsInCity } from "@/services/api/pimsAPI.js";

export default {
  name: "SoonSection",
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
          label: "Indochine",
          datetime: "2022-06-08T20:00:00",
          _embedded: {
            venue: { label: "Stade de France" },
          },
        },
        {
          id: 2,
          label: "Les Frangines",
          datetime: "2022-06-15T19:00:00",
          _embedded: {
            venue: { label: "Olympia" },
          },
        },
        {
          id: 3,
          label: "Hoshi",
          datetime: "2022-06-16T21:00:00",
          _embedded: {
            venue: { label: "Zénith de Paris" },
          },
        },
        {
          id: 4,
          label: "Lily Wood & The Prick",
          datetime: "2022-06-20T20:00:00",
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
      this.$emit("selected-eventCard-id", { id: payload.id });
    },
  },
};
</script>

<style>
.soonEvents {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  justify-content: space-evenly;
}
</style>
