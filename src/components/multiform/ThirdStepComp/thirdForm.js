import { firstForm } from "../FirstStepComp/firstForm";
import { secondForm } from "../SecondStepComp/secondForm";
const thirdForm = [
  {
    label: "Lý do muốn ứng tuyển vào công ty",
    view_type: "input-area",
    required: true,
    value: "",
    key: "reason",
    error: "",
  },
  {
    label: "Mức lương mong muốn",
    view_type: "input-salary",
    required: true,
    value: "",
    key: "salary",
    error: "",
  },
];
const multiForm = [
  { id: 1, num: 1, data: firstForm, name: "Thông tin cá nhân", isDone: false },
  {
    id: 2,
    num: 2,
    data: secondForm,
    name: "Kinh nghiệm làm việc",
    isDone: false,
  },
  { id: 3, num: 3, data: thirdForm, name: "Xác nhận thông tin", isDone: false },
];
export { thirdForm, multiForm };
