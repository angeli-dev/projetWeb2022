<template>
  <div class="event">
    <div v-for="data in pimsData" :key="data.id">
      <p>{{ data.id }}</p>
    </div>
    <p>Garou</p>
    <p>Tournée 2022</p>
    <p>Olympia</p>
  </div>
</template>

<script>
import getPimsData from "@/services/api/pimsAPI.js";

export default {
  name: "Event",
  data() {
    return {
      pimsData: [{ id: 1 }],
    };
  },
  created: function () {
    this.retrievePimsData();
  },
  methods: {
    async retrievPimsData() {
      this.dogsData = await getPimsData();
      console.log("Event : " + this.retrievePimsData());
    },
  },
};
</script>

<style>
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
