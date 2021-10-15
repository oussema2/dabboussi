import { createValidationRule } from "../createValidationRule";

export const requiredRule = (inputName) => {
  return createValidationRule(
    "required",
    `${inputName} Required`,
    (inputValue) => inputValue.length !== 0
  );
};
