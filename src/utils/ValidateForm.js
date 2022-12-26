import { NUMBER_REGEX } from "@/constants/FormConstants";
export const validateFirstForm = (firstStepForm) => {
  firstStepForm.map((item) => {
    item.error = "";
  });
  let isValid = true;
  const fullNameInput = firstStepForm.find((item) => item.key === "fullName");
  isValid = checkTextField(fullNameInput, isValid);
  const dateInput = firstStepForm.find((item) => item.key === "dob");
  isValid = checkTime(dateInput, isValid);
  const aboutArea = firstStepForm.find((item) => item.key === "about-me");
  isValid = checkTextField(aboutArea, isValid);
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
      if (itemChild.key === "company") {
        isValid = checkCompany(itemChild, nextElement, isValid);
      }
      if (itemChild.key === "position") {
        isValid = checkTextField(itemChild, isValid);
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
      }
      if (itemChild.key === "about-work") {
        isValid = checkTextField(itemChild, isValid);
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
  isValid = checkTextField(reasonInput, isValid);
  const salaryInput = thirdStepForm.find((item) => item.key === "salary");
  isValid = checkSalary(salaryInput);

  return isValid;
};
// const checkCompany = (item, nextElement) => {
//   if (item.value === "") {
//     item.error = "Vui lòng chọn công ty";
//     isValid = false;
//   }
//   if (nextElement !== undefined) {
//     const compa = item.value;
//     const nextCompa = nextElement.childrens.find(
//       (item) => item.key === "company"
//     );
//     if (compa === nextCompa.value && compa !== "" && nextCompa.value !== "") {
//       item.error = "Công ty bị trùng";
//       nextCompa.error = "Công ty bị trùng";
//       isValid = false;
//     }
//   }
//   return isValid;
// };
const checkTextField = (item, isValid) => {
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
const checkTime = (item, isValid) => {
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
  let salary = item.value;
  if (salary?.toString().length === 0) {
    item.error = `${item.label} là bắt buộc`;
  }
  if (salary?.toString().length > 0 && !NUMBER_REGEX.test(salary)) {
    item.error = `${item.label} phải là số`;
  }
  if (salary?.toString().length > item.maxLength) {
    item.error = `${item.label} tối đa là ${item.maxLength} chữ số`;
  }
};
////////////////////////////////////////////////
const checkRequired = (item) => {
  if (item.required && !item.value) {
    if (item.label) {
      console.log("here");
      item.error = `${item.label} là thông tin bắt buộc`;
    } else {
      item.error = `Thông tin này là bắt buộc`;
    }
  }
};
const checkLength = (item) => {
  if (item.value.length > item.maxLength) {
    item.error = `${item.label} có độ dài tối đa là ${item.maxLength} ký tự`;
  }
};
const checkDate = (item) => {
  const dateTime = new Date(item.value).getTime();
  const currentDate = new Date().getTime();
  if (dateTime > currentDate) {
    item.error = `${item.label} không hợp lệ`;
  }
};
const checkInputField = (item) => {
  checkRequired(item);
  checkLength(item);
};
const checkInputDate = (item) => {
  checkRequired(item);
  checkDate(item);
};
const checkInputSalary = (item) => {
  checkRequired(item);
  checkSalary(item);
};
const checkCompany = (currentCompany, nextElement) => {
  console.log(currentCompany, nextCompany);
  const nextCompany = nextElement.childrens.find(
    (item) => item.key === "company"
  );
};
const checkInvalidTime = (child) => {
  const currentDate = new Date().getTime();
  const startDate = new Date(child.value.from).getTime();
  const endDate = new Date(child.value.to).getTime();
  if (!child.value.from && !child.value.to) {
    child.error = `${child.label} là bắt buộc`;
  }
  if (
    startDate > currentDate ||
    endDate > currentDate ||
    startDate >= endDate ||
    startDate === endDate
  ) {
    console.log("here");
    child.error = `${child.label} không hợp lệ`;
  }
};
const checkTimezone = (child, formData) => {
  console.log(child);
  checkInvalidTime(child);
  formData.forEach((item, index, element) => {
    let currentTimeElement = {};
    let currentStartDate = 0;
    let currentEndDate = 0;

    let nextElement = {};
    let nextTimeElement = {};
    let nextStartDate = 0;

    currentTimeElement = item.childrens.find((item) => item.key === "time");
    currentStartDate = new Date(currentTimeElement.value.from).getTime();
    currentEndDate = new Date(currentTimeElement.value.to).getTime();

    if (element[index + 1]) {
      nextElement = element[index + 1];
      nextTimeElement = nextElement.childrens.find(
        (child) => child.key === "time"
      );
      nextStartDate = new Date(nextTimeElement.value.from).getTime();
      if (currentStartDate > nextStartDate || currentEndDate > nextStartDate) {
        currentTimeElement.error = `${currentTimeElement.label} không hợp lệ`;
        nextTimeElement.error = `${nextTimeElement.label} không hợp lệ`;
      } else {
        currentTimeElement.error = "";
      }
    }
  });
};

export {
  checkRequired,
  checkLength,
  checkDate,
  checkInputField,
  checkInputDate,
  checkInputSalary,
  checkTimezone,
  checkCompany,
};
