import { createValidationRule } from "../createValidationRule";

export const passwordMatchRule = () => {
  return createValidationRule(
    "PasswordMatch",
    `password do not match`,
    (inputValue, formObj) => inputValue === formObj.password.value
  );
};
