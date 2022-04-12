<template>
  <div id="mainBox">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Body from "./Body.vue";
export default {
  components: { Header, Footer, Body },
  name: "MainBox",
};
</script>

<style>
#mainBox {
}
</style>
