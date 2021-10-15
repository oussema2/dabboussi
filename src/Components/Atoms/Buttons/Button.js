import React from "react";

export const buttonStyle = {
  default: "default-Button",
  success: "success-Button",
  error: "error-Button",
  disabled: "disabled-Button",
};

const Button = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.clickButton}
      className={`btn-text-fontSize margin-top-20px width-${
        props.width
      }px   border-radius-10px cursor-pointer  outline-none transition-0-5-s ${
        props.className
      } ${props.disabled ? buttonStyle.disabled : props.btnStyle} `}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
