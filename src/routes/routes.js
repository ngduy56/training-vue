import Homepage from "../components/pages/Homepage.vue";
import InputPage from "../components/pages/InputPage.vue";
import DropzonePage from "../components/pages/DropzonePage.vue";
import MultiFormPage from "../components/pages/MultiFormPage.vue";

import FirstStepComp from "@/components/multiform/FirstStepComp/FirstStepComp.vue";
import SecondStepComp from "@/components/multiform/SecondStepComp/SecondStepComp.vue";
import ThirdStepComp from "@/components/multiform/ThirdStepComp/ThirdStepComp.vue";

export const routes = [
  { path: "/", name: "HomePage", component: Homepage },
  { path: "/1", name: "input-exam", component: InputPage },
  { path: "/2", name: "dropzone", component: DropzonePage },
  {
    path: "/3",
    component: MultiFormPage,
    children: [
      { path: "1", name: "first-step", component: FirstStepComp },
      { path: "2", name: "second-step", component: SecondStepComp },
      { path: "3", name: "third-step", component: ThirdStepComp },
    ],
  },
];
