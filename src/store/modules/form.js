const state = () => ({
  firstForm: [],
  secondForm: [],
  thirdForm: [],
});
const getters = {
  getFirstForm(state) {
    return state.firstForm;
  },
  getSecondForm(state) {
    return state.secondForm;
  },
  getThirdForm(state) {
    return state.thirdForm;
  },
};
const mutations = {
  SAVE_FIRST_FORM(state, payload) {
    state.firstForm = payload;
  },
  SAVE_SECOND_FORM(state, payload) {
    state.secondForm = payload;
  },
  SAVE_THIRD_FORM(state, payload) {
    state.thirdForm = payload;
  },
};
const actions = {
  saveFirstForm({ commit }, payload) {
    commit("SAVE_FIRST_FORM", payload);
  },
  saveSecondForm({ commit }, payload) {
    commit("SAVE_SECOND_FORM", payload);
  },
  saveThirdForm({ commit }, payload) {
    commit("SAVE_THIRD_FORM", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
