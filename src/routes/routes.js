import Homepage from "../components/pages/Homepage.vue";
import InputPage from "../components/pages/InputPage.vue";
import DropzonePage from "../components/pages/DropzonePage.vue";
import MultiFormPage from "../components/pages/MultiFormPage.vue";

import FirstStepComp from "@/components/multiform/FirstStepComp/FirstStepComp.vue";
import SecondStepComp from "@/components/multiform/SecondStepComp/SecondStepComp.vue";
import ThirdStepComp from "@/components/multiform/ThirdStepComp/ThirdStepComp.vue";

export const routes = [
  { path: "/", name: "HomePage", component: Homepage },
  { path: "/input", name: "inputExam", component: InputPage },
  { path: "/dropzone", name: "dropzone", component: DropzonePage },
  {
    path: "/multiform",
    component: MultiFormPage,
    children: [
      { path: "first-step", name: "firstStep", component: FirstStepComp },
      { path: "second-step", name: "secondStep", component: SecondStepComp },
      { path: "third-step", name: "thirdStep", component: ThirdStepComp },
    ],
  },
];
