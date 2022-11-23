import { STEP_LIST } from "@/constants/FormConstants";
const state = () => ({
  stepList: STEP_LIST,
  firstForm: [],
  secondForm: [],
  thirdForm: [],
});
const getters = {
  getStepList(state) {
    return state.stepList;
  },
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
  SET_DONE_STEP(state, step) {
    state.stepList.map((item) => {
      if (item.num === step) {
        item.isDone = true;
      }
    });
  },
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
    commit("SET_DONE_STEP", 1);
  },
  saveSecondForm({ commit }, payload) {
    commit("SAVE_SECOND_FORM", payload);
    commit("SET_DONE_STEP", 2);
  },
  saveThirdForm({ commit }, payload) {
    commit("SAVE_THIRD_FORM", payload);
    commit("SET_DONE_STEP", 3);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
