import { createValidationRule } from "../createValidationRule";

export const categorieSelected = (inputName) => {
  return createValidationRule(
    "categorieSelectedRule",
    `Select A ${inputName}`,
    (inputValue) => inputValue !== 0
  );
};
