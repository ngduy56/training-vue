import Homepage from "@/components/pages/Homepage.vue";
import InputPage from "@/components/pages/InputPage.vue";
import DropzonePage from "@/components/pages/DropzonePage.vue";
import MultiFormPage from "@/components/pages/MultiFormPage.vue";
import DatePickerPage from "@/components/pages/DatePickerPage.vue";
import SlideshowPage from "@/components/pages/SlideshowPage.vue";

export const routes = [
  { path: "/", name: "HomePage", component: Homepage },
  { path: "/input", name: "inputExam", component: InputPage },
  { path: "/dropzone", name: "dropzone", component: DropzonePage },
  {
    path: "/multiform",
    name: "multiform",
    component: MultiFormPage,
  },
  { path: "/datepicker", name: "datepicker", component: DatePickerPage },
  { path: "/slideshow", name: "slideshow", component: SlideshowPage },
];
