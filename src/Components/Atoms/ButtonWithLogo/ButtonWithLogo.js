import React from "react";

const ButtonWithLogo = (props) => {
  return (
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <button
        onClick={props.clickButton}
        className={`
        flex-1  width-20px fontSize-20px bgr-none border-none outline-none margin-10px
        `}
      >
        {props.logo}
      </button>
    </div>
  );
};

export default ButtonWithLogo;
