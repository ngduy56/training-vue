import { COMPANY_LIST } from "@/constants/FirstStepConstants";

const secondForm = [
  {
    label: "",
    view_type: "input-dropdown",
    value: "mor1",
    key: "company",
    companyList: COMPANY_LIST,

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
        value: null,
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
  },
];

export { secondForm };
