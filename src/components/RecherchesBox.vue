<template>
  <div id="recherchesBox">
    <Header></Header>
    <SearchTab
      @selectedEventSearch="update_event_search"
      @selectedEventFilter="update_event_filter"
    ></SearchTab>
    <SearchResults
      :search="event_search"
      :filter="event_filter"
      @selected-eventCard-id="update_selected_event_id"
    ></SearchResults>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SearchTab from "./SearchTab.vue";
import SearchResults from "./SearchResults.vue";
export default {
  components: { Header, Footer, SearchTab, SearchResults },
  name: "RecherchesBox",
  data() {
    return {
      event_search: this.event_search,
      event_filter: this.event_filter,
    };
  },

  methods: {
    update_event_search: function (payload) {
      this.event_search = payload;
    },
    update_event_filter: function (payload) {
      this.event_filter = payload;
    },
    update_selected_event_id: function (payload) {
      this.$emit("selected-eventCard-id", { id: payload.id });
    },
  },
};
</script>

<style></style>
