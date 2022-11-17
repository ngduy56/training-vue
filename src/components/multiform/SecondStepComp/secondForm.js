import { COMPANY_LIST } from "@/constants/FormConstants";
const defaultElement = {
  label: "",
  view_type: "input-dropdown",
  value: "",
  companyList: COMPANY_LIST,
  error: "",
  childrens: [
    {
      label: "Vị trí từng làm",
      view_type: "input-text",
      required: true,
      value: "",
      key: "position",
      error: "",
    },
    {
      label: "Thời gian làm việc",
      view_type: "input-date",
      required: true,
      value: { from: "", to: "" },
      key: "time",
      error: "",
    },
    {
      label: "Mô tả về công việc",
      view_type: "input-area",
      required: false,
      value: "",
      key: "about-work",
      error: "",
    },
  ],
};
const secondForm = [JSON.parse(JSON.stringify(defaultElement))];

export { secondForm, defaultElement };
