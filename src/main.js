import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Tendances from "./pages/Tendances.vue";
import Recherches from "./pages/Recherches.vue";
import APropos from "./pages/APropos.vue";

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Tendances },
  { path: "/tendances", component: Tendances },
  { path: "/rechercher", component: Recherches },
  { path: "/a-propos", component: APropos },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
