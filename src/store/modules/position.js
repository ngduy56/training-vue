import { POSITION_LIST } from "@/constants/FirstStepConstants.js";
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
    console.log(chosenList);
    return chosenList;
  },
};
// mutations
const mutations = {
  ADD_CHOSEN_CITY(state, option) {
    let newPositionList = state.positionList.map((pos) => {
      if (pos.codename === option.codename) {
        pos.isChosen = true;
      }
      return pos;
    });
    state.positionList = newPositionList;
  },
  REMOVE_CHOSEN_CTTY(state, chosenItem) {
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
  addChosenCity({ commit }, option) {
    commit("ADD_CHOSEN_CITY", option);
  },
  removeChosenCity({ commit }, chosenItem) {
    commit("REMOVE_CHOSEN_CTTY", chosenItem);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
