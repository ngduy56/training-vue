const POSITION_LIST = [
  {
    code: 1,
    codename: "software_engineer",
    name: "Software Engineer",
    isChosen: false,
  },
  {
    code: 2,
    codename: "developer",
    name: "Developer",
    isChosen: false,
  },
  {
    code: 3,
    codename: "tester",
    name: "Tester",
    isChosen: false,
  },
  {
    code: 4,
    codename: "project_manager",
    name: "Project Manager",
    isChosen: false,
  },
  {
    code: 5,
    codename: "project_lead",
    name: "Project Lead",
    isChosen: false,
  },
];
const CITY_LIST = [
  {
    name: "Chọn thành phố",
    value: "",
  },
  {
    name: "Hà Nội",
    value: "hanoi",
  },
  {
    name: "Đà Nẵng",
    value: "danang",
  },
  {
    name: "Huế",
    value: "hue",
  },
  {
    name: "Đà Lạt",
    value: "dalat",
  },
  {
    name: "Hồ Chí Minh",
    value: "hochiminh",
  },
];
const COMPANY_LIST = [
  {
    name: "Chọn công ty",
    value: "",
  },
  {
    name: "MorSoftware 1",
    value: "mor1",
  },
  {
    name: "MorSoftware 2",
    value: "mor2",
  },
  {
    name: "MorSoftware 3",
    value: "mor3",
  },
  {
    name: "MorSoftware 4",
    value: "mor4",
  },
];
const STEP_LIST = [
  { num: 1, path: "first-step", name: "Thông tin cá nhân", isDone: false },
  { num: 2, path: "second-step", name: "Kinh nghiệm làm việc", isDone: false },
  { num: 3, path: "third-step", name: "Xác nhận thông tin", isDone: false },
];
const INPUT_TEXT = "input-text";
const INPUT_SALARY = "input-salary";
const INPUT_DATE = "input-date";
const INPUT_DATE_ZONE = "input-date-zone";
const INPUT_DROPDOWN = "input-dropdown";
const INPUT_DROPDOWN_SEARCH = "input-dropdown-search";
const INPUT_AREA = "input-area";
const IMG_DROPZONE = "img-dropzone";
const COMPANY_ITEM = "company-item";
const NUMBER_REGEX = /^\d+$/;
export {
  COMPANY_LIST,
  POSITION_LIST,
  CITY_LIST,
  STEP_LIST,
  INPUT_TEXT,
  INPUT_SALARY,
  INPUT_DATE,
  INPUT_DATE_ZONE,
  INPUT_DROPDOWN,
  INPUT_DROPDOWN_SEARCH,
  INPUT_AREA,
  IMG_DROPZONE,
  COMPANY_ITEM,
  NUMBER_REGEX,
};
