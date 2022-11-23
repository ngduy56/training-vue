export const validateFirstForm = (thirdStepForm) => {
  thirdStepForm.map((item) => {
    item.error = "";
    return item;
  });
  let isValid = true;

  const fullNameInput = thirdStepForm.filter((item) => item.key === "fullName");
  let fullName = fullNameInput[0].value;
  if (!fullName) {
    fullNameInput[0].error = "Họ và tên là bắt buộc";
    isValid = false;
  } else if (fullName.length > 100) {
    fullNameInput[0].error = "Tối đa là 100 ký tự";
    isValid = false;
  }

  const aboutInput = thirdStepForm.filter((item) => item.key === "about-me");
  let about = aboutInput[0].value;
  if (about.length > 1000) {
    aboutInput[0].error = "Tối đa là 1000 ký tự";
    isValid = false;
  }

  const dateInput = thirdStepForm.filter((item) => item.key === "dob");
  let dob = dateInput[0].value;
  let dateTime = new Date(dob).getTime();
  let currentDate = new Date().getTime();
  if (!dob) {
    dateInput[0].error = "Vui lòng chọn ngày sinh";
    isValid = false;
  }
  if (dateTime > currentDate) {
    dateInput[0].error = "Vui lòng chọn lại ngày";
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
  secondStepForm.map((item) => {
    if (item.value === "default") {
      item.error = "Vui lòng chọn công ty";
      isValid = false;
    } else item.error = "";
  });
  secondStepForm.map((item, index, element) => {
    let nextElement = element[index + 1];
    let nextTimeElement = "";
    let nextStartDate;

    if (nextElement) {
      nextTimeElement = nextElement.childrens.filter(
        (child) => child.key === "time"
      );
      if (nextTimeElement) {
        nextStartDate = new Date(nextTimeElement[0].value.from).getTime();
      }
    }

    item.childrens.map((itemChild) => {
      if (itemChild.key === "position") {
        if (itemChild.value == "") {
          itemChild.error = "Vui lòng nhập vị trí làm việc";
          isValid = false;
        } else if (itemChild.value.length > 100) {
          itemChild.error = "Tối đa là 100 ký tự";
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
          itemChild.error = "Thời gian làm việc không hợp lý";
          isValid = false;
        }
        if (startDate > endDate) {
          itemChild.error = "Thời gian làm việc không hợp lý";
          isValid = false;
        }
        if (startDate > nextStartDate || endDate > nextStartDate) {
          itemChild.error = "Thời gian làm việc không hợp lý";
          isValid = false;
        }
      }
      if (itemChild.key === "about-work") {
        if (itemChild.value.length > 1000) {
          itemChild.error = "Tối đa là 1000 ký tự";
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

  const reasonInput = thirdStepForm.filter((item) => item.key === "reason");
  let reason = reasonInput[0].value;
  if (!reason) {
    reasonInput[0].error = "Lý do ứng tuyển là bắt buộc";
    isValid = false;
  } else if (reason.length > 1000) {
    reasonInput[0].error = "Tối đa là 1000 ký tự";
    isValid = false;
  }
  const salaryInput = thirdStepForm.filter((item) => item.key === "salary");
  let salary = salaryInput[0].value;
  var reg = /^\d+$/;
  if (!reg.test(salary)) {
    salaryInput[0].error = "Mức lương phải là số";
    isValid = false;
  }
  if (salary && salary.length > 10) {
    salaryInput[0].error = "Tối đa là 10 chữ số";
    isValid = false;
  }
  return isValid;
};
