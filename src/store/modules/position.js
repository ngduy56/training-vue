import { POSITION_LIST } from "@/constants/FormConstants";
const state = () => ({
  positionList: POSITION_LIST,
});
// getters
const getters = {
  getPositionList(state) {
    return state.positionList;
  },
  getChosenList(state) {
    let chosenList = state.positionList.filter((pos) => pos.isChosen);
    return chosenList;
  },
};
// mutations
const mutations = {
  ADD_CHOSEN(state, option) {
    let newPositionList = state.positionList.map((pos) => {
      if (pos.codename === option.codename) {
        pos.isChosen = true;
      }
      return pos;
    });
    state.positionList = newPositionList;
  },
  REMOVE_CHOSEN(state, chosenItem) {
    let newCities = state.positionList.map((pos) => {
      if (pos.codename === chosenItem.codename) {
        pos.isChosen = false;
      }
      return pos;
    });
    state.positionList = newCities;
  },
};
// actions
const actions = {
  addChosen({ commit }, option) {
    commit("ADD_CHOSEN", option);
  },
  removeChosen({ commit }, chosenItem) {
    commit("REMOVE_CHOSEN", chosenItem);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
