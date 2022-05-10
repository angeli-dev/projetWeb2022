<template>
  <div id="recherchesBox">
    <Header></Header>
    <SearchTab
      @selectedEventSearch="update_event_search"
      @selectedEventFilter="update_event_filter"
    ></SearchTab>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SearchTab from "./SearchTab.vue";
export default {
  components: { Header, Footer, SearchTab },
  name: "RecherchesBox",
  data() {
    return {
      event_search: this.event_search,
      event_filter: this.event_filter,
    };
  },

  methods: {
    update_event_search: function (payload) {
      //console.log(payload);
      this.event_search = payload;
    },
    update_event_filter: function (payload) {
      //console.log(payload);
      this.event_filter = payload;
    },
  },
};
</script>

<style></style>
