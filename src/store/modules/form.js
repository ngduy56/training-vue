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
  SAVE_FORM(state, payload) {
    if (payload.numForm === 1) {
      state.firstForm = payload.formData;
    } else if (payload.numForm === 2) {
      state.secondForm = payload.formData;
    } else if (payload.numForm === 3) {
      state.thirdForm = payload.formData;
    }
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
