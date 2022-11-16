const state = () => ({
  firstForm: [],
  secondForm: [],
});
const getters = {
  getFirstForm(state) {
    return state.firstForm;
  },
  getSecondForm(state) {
    return state.secondForm;
  },
};
const mutations = {
  SAVE_FIRST_FORM(state, payload) {
    state.firstForm = payload;
  },
  SAVE_SECOND_FORM(state, payload) {
    state.secondForm = payload;
  },
};
const actions = {
  saveFirstForm({ commit }, payload) {
    commit("SAVE_FIRST_FORM", payload);
  },
  saveSecondForm({ commit }, payload) {
    commit("SAVE_SECOND_FORM", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
