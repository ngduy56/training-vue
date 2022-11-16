export const ValidateFirstForm = (firstStepForm) => {
  firstStepForm.map((item) => {
    item.error = "";
    return item;
  });
  let isValid = true;

  const fullNameInput = firstStepForm.filter((item) => item.key === "fullName");
  let fullName = fullNameInput[0].value;
  if (!fullName) {
    fullNameInput[0].error = "Họ và tên là bắt buộc";
    isValid = false;
  } else if (fullName.length > 100) {
    fullNameInput[0].error = "Tối đa là 100 ký tự";
    isValid = false;
  }

  const aboutInput = firstStepForm.filter((item) => item.key === "about-me");
  let about = aboutInput[0].value;
  if (about.length > 1000) {
    aboutInput[0].error = "Tối đa là 1000 ký tự";
    isValid = false;
  }

  const dateInput = firstStepForm.filter((item) => item.key === "dob");
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
// const checkTime = (start, end, nextStart, nextEnd) => {
//   let isValid = false;

//   let fromTime = new Date(start).getTime();
//   let toTime = new Date(end).getTime();
//   let nextFromTime = new Date(nextStart).getTime();
//   let endFromTime = new Date(nextEnd).getTime();

//   if (fromTime < toTime) isValid = true;
//   else if (toTime < nextFromTime) isValid = true;
//   // else if (fromTime < nextFromTime && toTime < endFromTime) isValid = false;
//   return isValid;
// };

export const ValidateSecondForm = (secondStepForm) => {
  secondStepForm.map((item) => {
    item.childrens.map((itemChild) => {
      itemChild.error = "";
    });
  });
  secondStepForm.map((item) => {
    if (item.value === "default") {
      item.error = "Vui lòng chọn công ty";
    }
  });
  let isValid = true;
  secondStepForm.map((item) => {
    item.childrens.map((itemChild) => {
      if (itemChild.key === "position") {
        if (itemChild.value.length > 100) {
          itemChild.error = "Tối đa là 100 ký tự";
          isValid = false;
        }
      }
      if (itemChild.key === "time") {
        let fromTime = new Date(itemChild.value.from).getTime();
        let toTime = new Date(itemChild.value.to).getTime();
        if (fromTime > toTime) {
          itemChild.error = "Thời gian làm việc không hợp lệ";
          isValid = false;
        } else if (!itemChild.value.from || !itemChild.value.to) {
          itemChild.error = "Vui lòng chọn thời gian làm việc";
          isValid = false;
        }
      }
      if (itemChild.key === "about-work") {
        if (itemChild.value.length > 5000) {
          itemChild.error = "Tối đa là 5000 ký tự";
          isValid = false;
        }
      }
    });
  });
  return isValid;
};
