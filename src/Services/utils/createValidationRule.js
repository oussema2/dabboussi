/**
 * create and returns a validation rule
 * object that is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName -name of the validation rule
 * @param {string} errorMessage -message to display
 * @param {function} validateFunc -validation function
 */

export const createValidationRule = (ruleName, errorMessage, validateFunc) => {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
};
