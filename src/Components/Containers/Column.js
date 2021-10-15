import React from "react";

const Column = (props) => {
  return (
    <div
      {...props}
      className={`display-flex
       flexDirection-column
          ${props.className}
         ${props.className} 
          height-${props.height}px
         
          `}
    >
      {props.children}
    </div>
  );
};

export default Column;
