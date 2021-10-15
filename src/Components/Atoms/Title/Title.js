import React from "react";

const Title = (props) => {
  return (
    <div className={`display-flex alignItems-center   ${props.contentStyle} `}>
      <p
        className={`fontwieght-${props?.weight} ${props.className} fontSize-${
          props?.size
        }px    ${
          props.cursor === "pointer" ? "cursor-pointer" : "cursor-context-menu"
        } `}
      >
        {props.text}
      </p>
      {props.children}
    </div>
  );
};

export default Title;
