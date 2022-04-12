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
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "EventBox",

  data() {
    return {
      pimsData: {
        id: 1,
        label: "Théo Dionisi",
        datetime: "2022-03-08T20:00:00",
        _embedded: {
          venue: { label: "Olympia" },
        },
      },
    };
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
  width: 40vw;
}
.hidden {
  display: none;
}

#eventBoxContent {
  position: fixed;
}
</style>
