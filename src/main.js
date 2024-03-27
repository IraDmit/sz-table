import Vue from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "bootstrap/scss/bootstrap.scss";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
