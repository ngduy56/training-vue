import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.directive("click-outside", {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
