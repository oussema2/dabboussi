import React from "react";

const Row = (props) => {
  return (
    <div
      {...props}
      className={`display-flex
      flexDirection-row
       alignItems-center
        justifyContent-center
         flex-1 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Row;
