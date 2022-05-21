<template>
  <div id="eventBox" class="hidden">
    <div id="eventBoxContent">
      <h2>Informations détaillées</h2>
      <p>Nom : <br />{{ pimsData.label }}</p>
      <p>
        Date :<br />
        {{
          new Date(pimsData.datetime + "Z").toLocaleString("fr-FR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })
        }}
      </p>
      <p>
        Heure :<br />
        {{
          new Date(pimsData.datetime + "Z").toLocaleString("fr-FR", {
            hour: "numeric",
            minute: "numeric",
          })
        }}
      </p>
      <p>
        Ville :<br />
        {{ pimsData._embedded.venue.city }}
      </p>
      <p>
        Lieu :<br />
        {{ pimsData._embedded.venue.label }}
      </p>
      <p>
        Capacité de la salle :<br />
        {{ pimsData.costing_capacity }}
      </p>
      <p>
        Nombre de places restantes :<br />
        {{ pimsData.costing_capacity - pimsData.sales }}
      </p>
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
        costing_capacity: 1000,
        _embedded: {
          venue: { label: "Olympia" },
        },
      },
    };
  },
  watch: {
    id: function (newId) {
      let eventBox = document.querySelector("#eventBox");
      if (newId != null && newId != "undefined") {
        // On met à jour le panneau latéral et on l'affiche (si il est caché)
        this.retrievePimsData(newId);
        eventBox.classList.remove("hidden");
      } else {
        // On cache le panneau latéral
        eventBox.classList.add("hidden");
      }
    },
  },
  methods: {
    retrievePimsData: async function (eventId) {
      let data = await getEventById(eventId);
      data.sales = await getTicketCountsByEventId(eventId);
      this.pimsData = data;
    },
  },
};
</script>

<style>
#eventBox {
  background-color: #fefffe;
  box-shadow: 0.25vh 0.25vh 2vh #6b6b6b7a;
  padding: 2vw;
  z-index: 100;
  border-left: #f1a130 2vw solid;
  width: 45vw;
}
.hidden {
  display: none;
}

#eventBoxContent {
  position: fixed;
  margin-left: -1vw;
}
</style>
