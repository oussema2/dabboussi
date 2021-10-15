import { useCallback, useState } from "react";

export const useForm = (formObj, onSubmit) => {
  const [form, setForm] = useState(formObj);

  const renderFormInputs = () => {
    return Object.values(form).map((inputObj) => {
      const { value, label, errorMessage, valid, renderInput } = inputObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });
  };

  const handleSubmit = (event) => {
    onSubmit(event, form);
  };
  const isInputFieldValid = useCallback(
    (inputField) => {
      for (const rule of inputField.validationRules) {
        if (!rule.validate(inputField.value, form)) {
          inputField.errorMessage = rule.message;
          return false;
        }
      }
      return true;
    },
    [form]
  );
  const onInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      const inputObj = { ...form[name] };
      inputObj.value = value;
      checkValidation(inputObj, inputObj);
      inputObj.touched = true;
      setForm({ ...form, [name]: inputObj });
    },
    [form, isInputFieldValid]
  );

  const checkValidation = (inputObj, fileValue) => {
    const isValidInput = isInputFieldValid(fileValue);
    if (isValidInput && !inputObj.valid) {
      inputObj.valid = true;
    }
    if (!isValidInput && inputObj.valid) {
      inputObj.valid = false;
    }
  };

  const isFormValid = useCallback(
    (dependenciesValidation = []) => {
      const formInputs = Object.values(form);
      for (let j = 0; j < dependenciesValidation.length; j++) {
        if (!dependenciesValidation[j]) {
          return false;
        }
      }
      for (let i = 0; i < formInputs.length; i++) {
        if (!formInputs[i].valid) {
          return false;
        }
      }
      return true;
    },
    [form]
  );

  return { renderFormInputs, isFormValid, handleSubmit, form };
};
