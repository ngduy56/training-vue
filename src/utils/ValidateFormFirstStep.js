export const ValidateForm = (firstStepForm) => {
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
    fullNameInput[0].error = "Họ và tên có độ dài tối đa 100 ký tự";
    isValid = false;
  }

  const aboutInput = firstStepForm.filter((item) => item.key === "about-me");
  let about = aboutInput[0].value;
  if (about.length > 1000) {
    aboutInput[0].error = "Phần giới thiệu có độ dài tối đa 1000 ký tự";
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
