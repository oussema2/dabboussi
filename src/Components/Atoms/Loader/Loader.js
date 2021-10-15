import React from "react";

const Loader = (props) => {
  return (
    <div
      className={`loader border-loader width-${props.width}px height-${props.height}px ${props.className}`}
    ></div>
  );
};

export default Loader;
