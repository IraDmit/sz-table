import Vue from "vue";
import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";

import store from "./store";

import "./assets/main.css";
import "bootstrap/scss/bootstrap.scss";

Vue.use(VueAxios, axios);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
