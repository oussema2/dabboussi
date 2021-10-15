import createFormFieldConfig from "Services/utils/createFormFieldConfig";
import { emailRegExRule } from "Services/utils/Rules/emailRegExRule";
import { maxLengthRule } from "Services/utils/Rules/maxLengthRule";
import { minLengthRule } from "Services/utils/Rules/minLengthRule";
import { passwordMatchRule } from "Services/utils/Rules/passwordMatchRule";
import { requiredRule } from "Services/utils/Rules/reauiredRule";

export const registerForm = {
  name: {
    ...createFormFieldConfig("User Name", "name", "text"),
    validationRules: [
      requiredRule("User Name"),

      maxLengthRule("User Name", 20),
    ],
  },
  email: {
    ...createFormFieldConfig("User Email", "email", "email"),
    validationRules: [emailRegExRule("User Email")],
  },
  password: {
    ...createFormFieldConfig("User Password", "password", "password"),
    validationRules: [
      requiredRule("User Password"),
      minLengthRule("User Password", 6),
    ],
  },
  passwordConfirmation: {
    ...createFormFieldConfig(
      "Confirm Password",
      "passwordConfirmation",
      "password"
    ),
    validationRules: [passwordMatchRule()],
  },
  birthDate: {
    ...createFormFieldConfig("User BirthDate", "birthDate", "date"),
    validationRules: [requiredRule("User BirthDate")],
  },
};
