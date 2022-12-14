import { NUMBER_REGEX } from "@/constants/FormConstants";
export const validateFirstForm = (firstStepForm) => {
  firstStepForm.map((item) => {
    item.error = "";
  });
  let isValid = true;

  const fullNameInput = firstStepForm.filter(
    (item) => item.key === "fullName"
  )[0];
  let fullName = fullNameInput.value;
  if (!fullName) {
    fullNameInput.error = `${fullNameInput.label} là bắt buộc`;
    isValid = false;
  } else if (fullName.length > fullNameInput.maxLength) {
    fullNameInput.error = `${fullNameInput.label} có độ dài tối đa là ${fullNameInput.maxLength} ký tự`;
    isValid = false;
  }

  const aboutInput = firstStepForm.filter((item) => item.key === "about-me")[0];
  let about = aboutInput.value;
  let maxLength = aboutInput.maxLength;
  if (about.length > maxLength) {
    aboutInput.error = `${aboutInput.label} tối đa là ${maxLength} ký tự`;
    isValid = false;
  }

  const dateInput = firstStepForm.filter((item) => item.key === "dob")[0];
  let dob = dateInput.value;
  let dateTime = new Date(dob).getTime();
  let currentDate = new Date().getTime();
  if (!dob) {
    dateInput.error = `${dateInput.label} là bắt buộc`;
    isValid = false;
  }
  if (dateTime > currentDate) {
    dateInput.error = `${dateInput.label} không hợp lệ`;
    isValid = false;
  }
  return isValid;
};
export const validateSecondForm = (secondStepForm) => {
  let isValid = true;

  secondStepForm.map((item) => {
    item.childrens.map((itemChild) => {
      itemChild.error = "";
    });
  });

  secondStepForm.map((item, index, element) => {
    let nextElement = element[index + 1];
    let nextTimeElement = "";
    let nextStartDate;

    if (nextElement) {
      nextTimeElement = nextElement.childrens.filter(
        (child) => child.key === "time"
      )[0];
      if (nextTimeElement) {
        nextStartDate = new Date(nextTimeElement.value.from).getTime();
      }
    }

    item.childrens.map((itemChild) => {
      if (itemChild.key === "company") {
        if (itemChild.value === "") {
          itemChild.error = "Vui lòng chọn công ty";
          isValid = false;
        }
      }
      if (itemChild.key === "position") {
        if (itemChild.value === "") {
          itemChild.error = `${itemChild.label} là bắt buộc`;
          // itemChild.error = "Vui lòng nhập vị trí làm việc";
          isValid = false;
        } else if (itemChild.value.length > itemChild.maxLength) {
          itemChild.error = `${itemChild.label} tối đa là ${itemChild.maxLength} ký tự`;
          isValid = false;
        }
      }
      if (itemChild.key === "time") {
        const currentDate = new Date().getTime();
        let startDate = new Date(itemChild.value.from).getTime();
        let endDate = new Date(itemChild.value.to).getTime();

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
        if (startDate > nextStartDate || endDate > nextStartDate) {
          itemChild.error = `${itemChild.label} không hợp lệ`;
          isValid = false;
        }
      }
      if (itemChild.key === "about-work") {
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

  const reasonInput = thirdStepForm.filter((item) => item.key === "reason")[0];
  let reason = reasonInput.value;
  if (!reason) {
    reasonInput.error = `${reasonInput.label} là bắt buộc`;
    isValid = false;
  } else if (reason.length > reasonInput.maxLength) {
    reasonInput.error = `${reasonInput.label} tối đa là ${reasonInput.maxLength} ký tự`;
    isValid = false;
  }
  const salaryInput = thirdStepForm.filter((item) => item.key === "salary")[0];
  let salary = salaryInput.value;

  if (!NUMBER_REGEX.test(salary)) {
    salaryInput.error = `${salaryInput.label} phải là số`;
    isValid = false;
  }
  if (salary?.toString().length > salaryInput.maxLength) {
    salaryInput.error = `${salaryInput.label} tối đa là ${salaryInput.maxLength} chữ số`;
    isValid = false;
  }
  return isValid;
};
