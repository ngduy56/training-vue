const state = () => ({
  firstForm: {
    fullName: "",
    dob: "",
    city: "",
    postion: "",
    about: "",
  },
});
const getters = {
  getFirstForm() {
    return state.firstForm;
  },
};
const mutations = {
  SAVE_FORM(state, { fullName, dob, postion, about }) {
    state.firstForm.fullName = fullName;
    state.firstForm.dob = dob;
    state.firstForm.postion = postion;
    state.firstForm.about = about;
  },
};
const actions = {
  saveForm({ commit }, payload) {
    console.log(payload);
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
