import axios from "axios";
const state = () => ({
  totalCities: [],
  cities: [],
  chosenCities: [],
});
// getters
const getters = {
  getCities(state) {
    return state.cities;
  },
  getChosenCities(state) {
    return state.chosenCities;
  },
};
// mutations
const mutations = {
  GET_CITY_LIST(state, cities) {
    state.cities = cities;
  },
  ADD_CHOSEN_CITY() {
    console.log("mutation......");

    // let canAdd = true;
    // state.chosenCities.map((c) => {
    //   if (c.code === city.code) canAdd = false;
    // });
    // if (canAdd) {
    //   state.chosenCities.push({
    //     code: city.code,
    //     codename: city.codename,
    //     name: city.name,
    //   });
    // } else return;
    // const index = state.cities.findIndex((c) => c.code === city.code);
    // state.cities.splice(index, 1);
  },
  // REMOVE_CHOSEN_CTTY(state, city) {
  //   const index = state.chosenCities.findIndex((c) => c.code === city.code);
  //   state.chosenCities.splice(index, 1);

  //   let canAdd = true;
  //   state.cities.map((c) => {
  //     if (c.code === city.code) canAdd = false;
  //   });
  //   if (canAdd) {
  //     state.cities.unshift({
  //       code: city.code,
  //       codename: city.codename,
  //       name: city.name,
  //     });
  //   } else return;
  // },
  REMOVE_ONE_IN_CITIES(state, city) {
    const index = state.cities.findIndex((c) => c.code === city.code);
    state.cities.splice(index, 1);
  },
  ADD_ONE_IN_CITIES(state, city) {
    let canAdd = true;
    state.cities.map((c) => {
      if (c.code === city.code) canAdd = false;
    });
    if (canAdd) {
      state.cities.unshift({
        code: city.code,
        codename: city.codename,
        name: city.name,
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
  addChosenCity({ commit }, city) {
    commit("ADD_CHOSEN_CITY", city);
  },
  // removeChosenCity({ commit }, city) {
  //   commit("REMOVE_CHOSEN_CTTY", city);
  // },
  removeOneInCities({ commit }, city) {
    commit("REMOVE_ONE_IN_CITIES", city);
  },
  addOneInCities({ commit }, city) {
    commit("ADD_ONE_IN_CITIES", city);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
