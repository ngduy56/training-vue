const state = () => ({
  firstForm: [],
});
const getters = {
  getFirstForm(state) {
    return state.firstForm;
  },
};
const mutations = {
  SAVE_FORM(state, payload) {
    console.log(payload);
    state.firstForm = payload;
  },
};
const actions = {
  saveForm({ commit }, payload) {
    commit("SAVE_FORM", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
