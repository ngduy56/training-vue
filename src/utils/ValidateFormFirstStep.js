export const ValidateForm = (fullName, dob, about, error) => {
  let isValid = true;
  if (!fullName) {
    error.fullName = "Họ và tên là bắt buộc";
    isValid = false;
  } else if (fullName.length > 100) {
    error.fullName = "Họ và tên có độ dài tối đa 100 ký tự";
    isValid = false;
  }
  if (about.length > 10) {
    error.about = "Giới thiệu có độ dài tối đa 1000 ký tự";
    isValid = false;
  }
  let inputDate = new Date(dob).getTime();
  let currentDate = new Date().getTime();
  if (inputDate > currentDate) {
    error.dob = "Vui lòng chọn lại ngày";
    isValid = false;
  }
  return isValid;
};
