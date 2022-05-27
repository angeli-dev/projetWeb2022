<template>
  <div id="eventBox" class="hidden">
    <div id="eventBoxContent">
      <div class="closeEventCard" v-on:click="closeEventCard">❌</div>
      <h2>Informations détaillées</h2>
      <div id="eventBoxText">
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
        label: "Antoine Libert Tour",
        datetime: "2022-06-03T20:00:00",
        sales: 999,
        costing_capacity: 1000,
        _embedded: {
          venue: { label: "Casino de Paris", city: "Paris" },
        },
      },
    };
  },

  watch: {
    id: function (newId) {
      // On met à jour le panneau latéral et on l'affiche (si il est caché)
      this.retrievePimsData(newId);
      document.querySelector("#eventBox").classList.remove("hidden");
    },
  },

  methods: {
    retrievePimsData: async function (eventId) {
      let data = await getEventById(eventId);
      data.sales = await getTicketCountsByEventId(eventId);
      this.pimsData = data;
    },
    closeEventCard: function () {
      document.querySelector("#eventBox").classList.add("hidden");
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

@media only screen and (max-width: 1200px) {
  #eventBox {
    position: fixed;
    top: 20vh;
    width: 80vw;
    height: 60vh;
    border: #f1a130 2vw solid;
    border-radius: 25px;
  }
  #eventBoxContent {
    margin-left: 1vw;
  }
  #eventBoxText {
    display: flex;
    flex-wrap: wrap;
  }
  #eventBoxContent h2 {
    padding: 30px;
  }
  #eventBoxContent p {
    width: 15vw;
    margin: 2vw;
  }
}

@media only screen and (max-width: 600px) {
  #eventBox {
    position: fixed;
    height: 70vh;
  }
}
</style>
