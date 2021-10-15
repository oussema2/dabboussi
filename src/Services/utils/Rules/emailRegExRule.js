import { createValidationRule } from "../createValidationRule";
import { emailChecker } from "../EmailChecker";

export const emailRegExRule = () => {
  return createValidationRule("emailRegex", "invalid Email", (inputValue) =>
    emailChecker(inputValue)
  );
};
