import { createValidationRule } from "../createValidationRule";

export const minLengthRule = (inputName, minCharacter) => {
  return createValidationRule(
    "minLength",
    `${inputName} should contain atleas ${minCharacter} characters`,
    (inputValue) => inputValue.length >= minCharacter
  );
};
