import {
  MAX_SIZE,
  MAX_NUMBER,
  TYPE_FILE_IMAGE,
} from "@/constants/DropzoneConstants.js";
import store from "@/store/store";
import { CITY_LIST } from "@/constants/FormConstants";
const optionList = store.getters["position/getPositionList"];

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
export { firstForm };
