import InputField from "Components/Atoms/InputField/InputField";
import React from "react";

/**
 *
 * @param {string} label -label to show with the form input
 * @param {string} name -input name
 * @param {string} type -input type
 * @param {string} defaultValue - default value for the input
 */

const createFormFieldConfig = (label, name, type, defaultValue = "") => {
  return {
    renderInput: (handleChange, value = defaultValue, isValid, error, key) => {
      return (
        <InputField
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },

    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
  };
};

export default createFormFieldConfig;
