<template>
  <div id="eventBox" class="hidden">
    <div id="eventBoxContent">
      <h2>titre</h2>
      <p>{{ pimsData.label }}</p>
      <p>
        {{
          new Date(pimsData.datetime + "Z").toLocaleString("fr-FR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        }}
      </p>
      <p>{{ pimsData._embedded.venue.label }}</p>
      <p>Remplissage : {{ pimsData.sales }} / {{ pimsData.costing_capacity }}</p>
    </div>
  </div>
</template>

<script>
import { getEventById } from "@/services/api/pimsAPI.js";
import { getTicketCountsByEventId } from "@/services/api/pimsAPI.js";
export default {
  components: {},
  name: "EventBox",
 props: {
    id: { type: Number, required: false },
  },
  data() {
    return {
      pimsData: {
        id: 1,
        label: "Théo Dionisi",
        datetime: "2022-03-08T20:00:00",
        sales: 0,
        _embedded: {
          venue: { label: "Olympia" },
        },
      },
    };
  },
  watch: {
    id: function(newId) {
      let eventBox = document.querySelector("#eventBox");
      if (newId != null && newId != 'undefined') {
        // On met à jour le panneau latéral et on l'affiche (si il est caché)
        this.retrievePimsData(newId);
        eventBox.classList.remove("hidden");
      } else {
        // On cache le panneau latéral
        eventBox.classList.add("hidden");
      }
     
    }
  },
  methods: {
    retrievePimsData: async function (eventId) {
      let data = await getEventById(eventId);
      data.sales = await getTicketCountsByEventId(eventId);
      this.pimsData = data;
    }
  }
};
</script>

<style>
#eventBox {
  background-color: #fefffe;
  box-shadow: 0.25vh 0.25vh 2vh #6b6b6b7a;
  padding: 2vw;
  z-index: 100;
  border-left: #f1a130 2vw solid;
  width: 40vw;
}
.hidden {
  display: none;
}

#eventBoxContent {
  position: fixed;
}
</style>
