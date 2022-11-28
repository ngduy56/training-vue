import { COMPANY_LIST } from "@/constants/FormConstants";
import {
  MAX_SIZE,
  MAX_NUMBER,
  TYPE_FILE_IMAGE,
} from "@/constants/DropzoneConstants.js";
import store from "@/store/store";
import { CITY_LIST } from "@/constants/FormConstants";
const optionList = store.getters["position/getPositionList"];

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
const firstForm = [
  {
    label: "Họ và tên",
    view_type: "input-text",
    required: true,
    value: "",
    key: "fullName",
    error: "",
  },
  {
    label: "Ngày sinh",
    view_type: "input-date",
    required: true,
    value: "",
    key: "dob",
    error: "",
  },
  {
    label: "Thành phố",
    view_type: "input-dropdown",
    required: false,
    value: "",
    key: "city",
    cityList: CITY_LIST,
  },
  {
    label: "Vị trí làm việc",
    view_type: "input-dropdown-search",
    required: false,
    key: "position",
    optionList,
  },
  {
    label: "Mô tả về bản thân",
    view_type: "input-area",
    required: false,
    value: "",
    key: "about-me",
    error: "",
  },
  {
    label: "Ảnh cá nhân",
    view_type: "img-dropzone",
    required: false,
    fileList: "",
    key: "ava-dropzone",
    maxSize: MAX_SIZE,
    maxNumber: MAX_NUMBER,
    typeFile: TYPE_FILE_IMAGE,
  },
];
const secondForm = [JSON.parse(JSON.stringify(defaultElement))];

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
export { multiForm, firstForm, secondForm, thirdForm, defaultElement };
