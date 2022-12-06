import Homepage from "../components/pages/Homepage.vue";
import InputPage from "../components/pages/InputPage.vue";
import DropzonePage from "../components/pages/DropzonePage.vue";

export const routes = [
  { path: "/", name: "HomePage", component: Homepage },
  { path: "/1", name: "input-exam", component: InputPage },
  { path: "/2", name: "dropzone", component: DropzonePage },
];
