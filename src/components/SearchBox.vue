<template>
  <div id="searchBox">
    <Header></Header>
    <SearchTab
      @selectedEventSearch="update_event_search"
      @selectedEventFilter="update_event_filter"
      @selectedEventSort="update_event_sort"
    ></SearchTab>
    <SearchResults
      :search="event_search"
      :filter="event_filter"
      :sort="event_sort"
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
  name: "searchBox",

  data() {
    return {
      event_search: this.event_search,
      event_filter: this.event_filter,
      event_sort: this.event_sort,
    };
  },

  methods: {
    update_event_search: function (payload) {
      this.event_search = payload;
    },
    update_event_filter: function (payload) {
      this.event_filter = payload;
    },
    update_event_sort: function (payload) {
      this.event_sort = payload;
    },
    update_selected_event_id: function (payload) {
      this.$emit("selected-eventCard-id", { id: payload.id });
    },
  },
};
</script>

<style>
#searchBox {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
