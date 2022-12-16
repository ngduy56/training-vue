import { NUMBER_REGEX } from "@/constants/FormConstants";
export const validateFirstForm = (firstStepForm) => {
  firstStepForm.map((item) => {
    item.error = "";
  });
  let isValid = true;
  const fullNameInput = firstStepForm.find((item) => item.key === "fullName");
  let isValidInput = checkTextField(fullNameInput);
  const dateInput = firstStepForm.find((item) => item.key === "dob");
  let isValidTime = checkTime(dateInput);
  const aboutArea = firstStepForm.find((item) => item.key === "about-me");
  let isValidArea = checkTextField(aboutArea);
  isValid = isValidInput && isValidTime && isValidArea;

  return isValid;
};
export const validateSecondForm = (secondStepForm) => {
  let isValid = true;
  let isValidCompany = true;
  let isValidTime = true;
  let isValidPosition = true;
  let isValidAboutWord = true;

  let nextElement = {};
  let nextTimeElement = {};
  let nextStartDate;

  secondStepForm.map((item) => {
    item.childrens.map((itemChild) => {
      itemChild.error = "";
    });
  });

  secondStepForm.map((item, index, element) => {
    nextElement = element[index + 1];
    if (nextElement !== {}) {
      nextTimeElement = nextElement?.childrens.find(
        (child) => child.key === "time"
      );
      if (nextTimeElement) {
        nextStartDate = new Date(nextTimeElement.value.from).getTime();
      }
    }
    item.childrens.map((itemChild) => {
      if (itemChild.key === "company" && itemChild.value === "") {
        itemChild.error = "Vui lòng chọn công ty";
        isValidCompany = false;
      }
      if (itemChild.key === "position") {
        isValidPosition = checkTextField(itemChild);
      }
      if (itemChild.key === "time") {
        isValidTime = checkTimezone(itemChild, nextTimeElement, nextStartDate);
      }
      if (itemChild.key === "about-work") {
        isValidAboutWord = checkTextField(itemChild);
      }
    });
  });
  isValid =
    isValidCompany && isValidPosition && isValidTime && isValidAboutWord;

  return isValid;
};
export const validateThirdForm = (thirdStepForm) => {
  thirdStepForm.map((item) => {
    item.error = "";
  });
  let isValid = true;
  const reasonInput = thirdStepForm.find((item) => item.key === "reason");
  let isValidReason = checkTextField(reasonInput);
  const salaryInput = thirdStepForm.find((item) => item.key === "salary");
  let isValidSalary = checkSalary(salaryInput);
  isValid = isValidReason && isValidSalary;

  return isValid;
};
const checkTimezone = (item, nextTimeElement, nextStartDate) => {
  let isValid = true;
  const currentDate = new Date().getTime();
  let startDate = new Date(item.value.from).getTime();
  let endDate = new Date(item.value.to).getTime();

  if (!item.value.from || !item.value.to) {
    item.error = "Vui lòng chọn thời gian làm việc";
    isValid = false;
  }
  if (endDate > currentDate || startDate > currentDate) {
    item.error = `${item.label} không hợp lệ`;
    isValid = false;
  }
  if (startDate > endDate) {
    item.error = `${item.label} không hợp lệ`;
    isValid = false;
  }
  if (startDate > nextStartDate || endDate > nextStartDate) {
    item.error = `${item.label} không hợp lệ`;
    if (nextTimeElement !== undefined) {
      nextTimeElement.error = `${nextTimeElement?.label} không hợp lệ`;
    }
    isValid = false;
  }
  return isValid;
};
const checkTextField = (item) => {
  let isValid = true;
  if (item.required && item.value === "") {
    item.error = `${item.label} là bắt buộc`;
    isValid = false;
  }
  if (item.value.length > item.maxLength) {
    item.error = `${item.label} tối đa là ${item.maxLength} ký tự`;
    isValid = false;
  }
  return isValid;
};
const checkTime = (item) => {
  let isValid = true;
  let dateTime = new Date(item.value).getTime();
  let currentDate = new Date().getTime();
  if (item.value === "") {
    item.error = `${item.label} là bắt buộc`;
    isValid = false;
  }
  if (dateTime > currentDate) {
    item.error = `${item.label} không hợp lệ`;
    isValid = false;
  }
  return isValid;
};
const checkSalary = (item) => {
  let isValid = true;
  let salary = item.value;
  if (salary?.toString().length === 0) {
    item.error = `${item.label} là bắt buộc`;
    isValid = false;
  }
  if (salary?.toString().length > 0 && !NUMBER_REGEX.test(salary)) {
    item.error = `${item.label} phải là số`;
    isValid = false;
  }
  if (salary?.toString().length > item.maxLength) {
    item.error = `${item.label} tối đa là ${item.maxLength} chữ số`;
    isValid = false;
  }
  return isValid;
};
