import Homepage from "../components/pages/Homepage.vue";
import InputExam from "../components/pages/InputExam.vue"

export const routes = [
  { path: "/", name: "HomePage", component: Homepage },
  { path: "/1", name: "input-exam", component: InputExam },
];
