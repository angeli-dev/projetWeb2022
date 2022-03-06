<template>
  <div id="events">
    <div v-for="data in pimsData" :key="data.id">
      <div class="event">
        <p>{{ data.id }}</p>
        <p>{{ data.label }}</p>
        <p>{{ data.datetime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getPimsData} from "@/services/api/pimsAPI.js";

  export default {
    name: "Event",
    data() {
      return {
        pimsData: [{ id: 1 }],
      }
    },
    created: function () {
      this.retrievePimsData()
    },
    methods: {
      retrievePimsData: async function() {
        this.pimsData = await getPimsData();
        console.log(this.pimsData);
      },
    },
  };
</script>

<style>
#events {
  margin: auto;
  display: flex;
  width: 80vw;
  justify-content: space-evenly;
}
.event {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fefffe;
  border-radius: 10%;
  box-shadow: 0.25vh 0.25vh 2vh #6b6b6b7a;
  padding: 2vw;
}

.event p {
  text-align: center;
  font-weight: 700;
  font-size: 15pt;
}
</style>
