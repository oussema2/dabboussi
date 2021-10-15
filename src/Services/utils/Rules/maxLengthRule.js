import { createValidationRule } from "../createValidationRule";

export const maxLengthRule = (inputName, maxCharactere) => {
  return createValidationRule(
    "maxLength",
    `${inputName} should contain more than ${maxCharactere} charachters`,
    (inputValue) => inputValue.length <= maxCharactere
  );
};
