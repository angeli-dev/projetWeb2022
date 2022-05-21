<template>
  <div class="eventCard" v-on:click="selected_eventCard">
    <p>{{ name }}</p>
    <p>{{ venue }}</p>
    <p>{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    venue: { type: String, required: true },
    date: { type: String, required: true },
  },
  methods: {
    selected_eventCard: function () {
      this.$emit("selected-eventCard-id", { id: this.id });
    }
  }
};
</script>

<style>
.eventCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fefffe;
  border-radius: 10%;
  box-shadow: 0.25vh 0.25vh 2vh #6b6b6b7a;
  padding: 2vw;
  flex: 0 0 14vw;
}

.eventCard p {
  text-align: center;
  font-weight: 700;
  font-size: 15pt;
}
</style>
