import createFormFieldConfig from "Services/utils/createFormFieldConfig";
import { emailRegExRule } from "Services/utils/Rules/emailRegExRule";
import { maxLengthRule } from "Services/utils/Rules/maxLengthRule";
import { minLengthRule } from "Services/utils/Rules/minLengthRule";
import { requiredRule } from "Services/utils/Rules/reauiredRule";

export const logInForm = {
  email: {
    ...createFormFieldConfig("Email", "email", "email"),
    validationRules: [requiredRule("email"), emailRegExRule()],
  },
  password: {
    ...createFormFieldConfig("Password", "password", "password"),
    validationRules: [
      requiredRule("password"),
      minLengthRule("password", 6),
      maxLengthRule("password", 15),
    ],
  },
};
