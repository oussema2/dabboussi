import React from "react";
import Title from "../Title/Title";
export const borderStyle = {
  default: "border-solid-1px-default",
  success: "border-solid-1px-success",
  error: "border-solid-1px-error",
};
const Input = (props) => {
  return (
    <div className="flex-1 display-flex flexDirection-column width-400px ">
      <Title text="Password" />
      <input
        onFocus={props.onFocus}
        className={`${props.className} ${props.borderStyle} ${
          props.isValid === false ? borderStyle.error : null
        } ${props.isValid === null ? borderStyle.default : null}  ${
          props.isValid === true ? borderStyle.success : null
        } placeholderStyle-margin-10px height-50px width-90 border-radius-5px   outline-none`}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => props.handleChange(e)}
      />
      {props.isValid === false ? (
        <Title text={props.errorText} size={20} />
      ) : null}
    </div>
  );
};

export default Input;
