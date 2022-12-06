import { NUM_BYTE, REGEX_FILE_EXTENSION } from "@/constants/DropzoneConstants";

export const Validate = (files, typeFile, errors, maxNumber, maxSize) => {
  let inValid = false;
  if (files.length > maxNumber) {
    errors.number = `The maximum file uploaded is ${maxNumber}`;
    inValid = true;
  } else inValid = false;

  for (let i = 0; i < files.length; i++) {
    if (Math.ceil(files[i].size / NUM_BYTE) > maxSize) {
      errors.size = `The maximum file size is ${maxSize / NUM_BYTE} MB`;
      inValid = true;
    }
    let filterFileExtension = files[i].name.match(REGEX_FILE_EXTENSION)[0];
    if (!typeFile.includes(filterFileExtension)) {
      errors.type = `The type file must be ${typeFile.join(", ")}.`;
      inValid = true;
    }
  }
  return inValid;
};
