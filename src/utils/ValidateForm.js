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
  let nextElement = {};

  secondStepForm.map((item) => {
    item.childrens.map((itemChild) => {
      itemChild.error = "";
    });
  });
  secondStepForm.map((item, index, element) => {
    nextElement = element[index + 1];

    item.childrens.map((itemChild) => {
      if (itemChild.key === "company" && itemChild.value === "") {
        itemChild.error = "Vui lòng chọn công ty";
        isValid = false;
      }
      if (nextElement !== undefined && itemChild.key === "company") {
        const compa = itemChild.value;
        const nextCompa = nextElement.childrens.find(
          (item) => item.key === "company"
        );
        console.log(nextCompa);
        if (compa === nextCompa.value) {
          itemChild.error = "Công ty bị trùng";
          nextCompa.error = "Công ty bị trùng";
          isValid = false;
        }
      }
      if (itemChild.key === "position") {
        if (itemChild.required && itemChild.value === "") {
          itemChild.error = `${itemChild.label} là bắt buộc`;
          isValid = false;
        }
        if (itemChild.value.length > itemChild.maxLength) {
          itemChild.error = `${itemChild.label} tối đa là ${itemChild.maxLength} ký tự`;
          isValid = false;
        }
      }
      if (itemChild.key === "time") {
        const currentDate = new Date().getTime();
        let startDate = new Date(itemChild.value.from).getTime();
        let endDate = new Date(itemChild.value.to).getTime();
        let nextTimeElement = {};
        let nextStartDate = 0;

        if (!itemChild.value.from || !itemChild.value.to) {
          itemChild.error = "Vui lòng chọn thời gian làm việc";
          isValid = false;
        }
        if (endDate > currentDate || startDate > currentDate) {
          itemChild.error = `${itemChild.label} không hợp lệ`;
          isValid = false;
        }
        if (startDate > endDate) {
          itemChild.error = `${itemChild.label} không hợp lệ`;
          isValid = false;
        }
        if (nextElement !== undefined) {
          nextTimeElement = nextElement.childrens.find(
            (child) => child.key === "time"
          );
          nextStartDate = new Date(nextTimeElement.value.from).getTime();

          if (startDate > nextStartDate || endDate > nextStartDate) {
            itemChild.error = `${itemChild.label} không hợp lệ`;
            nextTimeElement.error = `${nextTimeElement?.label} không hợp lệ`;
            isValid = false;
          }
        }
        return isValid;
      }
      if (itemChild.key === "about-work") {
        if (itemChild.required && itemChild.value === "") {
          itemChild.error = `${itemChild.label} là bắt buộc`;
          isValid = false;
        }
        if (itemChild.value.length > itemChild.maxLength) {
          itemChild.error = `${itemChild.label} tối đa là ${itemChild.maxLength} ký tự`;
          isValid = false;
        }
      }
    });
  });
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
