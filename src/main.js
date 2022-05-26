import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import SoonPage from "./pages/SoonPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import AboutPage from "./pages/AboutPage.vue";

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: SoonPage },
  { path: "/a-venir", component: SoonPage },
  { path: "/rechercher", component: SearchPage },
  { path: "/a-propos", component: AboutPage },
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
