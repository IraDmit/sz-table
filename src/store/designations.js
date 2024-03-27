import axios from "axios";

export default {
  state: () => ({
    sources: null,
    types: null,
    statuses: null,
  }),
  mutations: {
    setDesignations(state, { sources, types, statuses }) {
      (state.sources = sources),
        (state.types = types),
        (state.statuses = statuses);
    },
  },
  actions: {
    async fetchDesignations({ commit }) {
      const { data } = await axios.get(
        "https://tests.szapi.ru/ts10/public_html/form_tss"
      );
      commit("setDesignations", data);
    },
  },
  getters: {
    getSources: (state) => state.sources,
    getSourceById: (state) => (id) => {
      return state.sources.find((source) => source.id === id);
    },
    getTypes: (state) => state.types,
    getTypeById: (state) => (id) => {
      return state.types.find((type) => type.id === id);
    },
    getStatuses: (state) => state.statuses,
    getStatusById: (state) => (id) => {
      return state.statuses.find((status) => status.id === id);
    },
  },
};
