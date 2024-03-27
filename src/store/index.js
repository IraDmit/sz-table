import Vue from "vue";
import Vuex from "vuex";
import designations from "./designations";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    designations,
  },
});

export default store;
