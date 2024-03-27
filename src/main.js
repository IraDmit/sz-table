import Vue from "vue";
import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/main.css";
import "bootstrap/scss/bootstrap.scss";

Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
