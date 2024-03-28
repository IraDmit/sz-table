export default {
  state: () => ({
    field: null,
    type: null,
  }),
  mutations: {
    updateSortingInfo(state, data) {
      state.field = data.field;
      state.type = data.type;
    },
  },
  actions: {
    setSortingInfo({ commit }, data) {
      commit("updateSortingInfo", data);
    },
  },
  getters: {
    getSortingInfo({ field, type }) {
      return {
        field,
        type,
      };
    },
  },
};
