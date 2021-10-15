import Column from "Components/Containers/Column";
import React from "react";

const InputField = (props) => {
  const { label, type, name, handleChange, errorMessage, isValid, value } =
    props;

  if (type === "textarea") {
    return (
      <Column className="inputFieldMargin">
        <label className="labelMargin fontSize-1-1rem">{label}</label>

        <textarea
          cols={50}
          rows="5"
          className="padding-10px border-none margin-0-0-8px-0 boxSizing-borderBox borderBottom-1px-solid-777 bgr-eee outline-none fontSize-1-1rem"
          name={name}
          value={value}
          onChange={handleChange}
        ></textarea>
        {errorMessage && !isValid && (
          <span className="color-red fontSize-1-1rem ">{errorMessage}</span>
        )}
      </Column>
    );
  }

  return (
    <Column className="inputFieldMargin">
      <label className="labelMargin fontSize-1-1rem">{label}</label>
      <input
        className="padding-10px border-none margin-0-0-8px-0 boxSizing-borderBox borderBottom-1px-solid-777 bgr-eee outline-none fontSize-1-1rem"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {errorMessage && !isValid && (
        <span className="color-red fontSize-1-1rem ">{errorMessage}</span>
      )}
    </Column>
  );
};

export default InputField;
