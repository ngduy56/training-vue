import axios from "axios";
const state = () => ({
  totalCities: [],
  cities: [],
  chosenList: [],
});
// getters
const getters = {
  getCities(state) {
    return state.cities;
  },
  getChosenList(state) {
    return state.chosenList;
  },
};
// mutations
const mutations = {
  GET_CITY_LIST(state, cities) {
    state.cities = cities;
  },
  ADD_CHOSEN_CITY(state, option) {
    let canAdd = true;
    state.chosenList.map((chosenItem) => {
      if (chosenItem.code === option.code) canAdd = false;
    });
    if (canAdd) {
      state.chosenList.push({
        code: option.code,
        codename: option.codename,
        name: option.name,
      });
    } else return;
    const index = state.cities.findIndex((c) => c.code === option.code);
    state.cities.splice(index, 1);
  },
  REMOVE_CHOSEN_CTTY(state, chosenItem) {
    const index = state.chosenList.findIndex((c) => c.code === chosenItem.code);
    state.chosenList.splice(index, 1);

    let canAdd = true;
    state.cities.map((c) => {
      if (c.code === chosenItem.code) canAdd = false;
    });
    if (canAdd) {
      state.cities.unshift({
        code: chosenItem.code,
        codename: chosenItem.codename,
        name: chosenItem.name,
      });
    } else return;
  },
};
// actions
const actions = {
  async getCityList({ commit }) {
    await axios
      .get(`https://provinces.open-api.vn/api/p/`)
      .then((response) => {
        if (response.status == 200) {
          let formatCities = response.data.map((city) => {
            if (city.division_type === "thành phố trung ương") {
              city.name = city.name.slice(10, city.name.lenght);
            } else if (city.division_type === "tỉnh") {
              city.name = city.name.slice(5, city.name.lenght);
            }
            return city;
          });
          commit("GET_CITY_LIST", formatCities);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
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
