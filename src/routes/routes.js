import Homepage from "../components/pages/Homepage.vue";
import InputPage from "../components/pages/InputPage.vue";

export const routes = [
  { path: "/", name: "HomePage", component: Homepage },
  { path: "/1", name: "input-exam", component: InputPage },
];
