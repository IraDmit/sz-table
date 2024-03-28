import Vue from "vue";
import Vuex from "vuex";
import designations from "./designations";
import sortingInfo from "./sortingInfo";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    designations,
    sortingInfo,
  },
});

export default store;
