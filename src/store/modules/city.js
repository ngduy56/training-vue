import axios from "axios";
const state = () => ({
  cities: [],
});
// getters
const getters = {
  getCities(state) {
    return state.cities;
  },
  getChosenList(state) {
    let chosenList = state.cities.filter((city) => city.isChosen);
    return chosenList;
  },
};
// mutations
const mutations = {
  GET_CITY_LIST(state, cities) {
    state.cities = cities;
  },
  ADD_CHOSEN_CITY(state, option) {
    let newCities = state.cities.map((city) => {
      if (city.codename === option.codename) {
        city.isChosen = true;
      }
      return city;
    });
    state.cities = newCities;
  },
  REMOVE_CHOSEN_CTTY(state, chosenItem) {
    let newCities = state.cities.map((city) => {
      if (city.codename === chosenItem.codename) {
        city.isChosen = false;
      }
      return city;
    });
    state.cities = newCities;
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
              city.name = city.name.replace("Thành phố", "");
            } else if (city.division_type === "tỉnh") {
              city.name = city.name.replace("Tỉnh", "");
            }
            return { ...city, isChosen: false };
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
