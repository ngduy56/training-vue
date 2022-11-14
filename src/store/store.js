import Vue from "vue";
import Vuex from "vuex";
import city from "./modules/city";
import file from "./modules/file";
import form from "./modules/form";
import position from "./modules/position";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    city,
    file,
    form,
    position,
  },
});
