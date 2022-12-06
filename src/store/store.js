import Vue from "vue";
import Vuex from "vuex";
import city from "./modules/city";
import file from "./modules/file";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    city,
    file,
  },
});
