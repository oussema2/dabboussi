import React from "react";

const ProductImage = (props) => {
  return (
    <div className="flex-1 producImage cursor-pointer  overflow-hidden position-relative display-flex alignItems-center justifyContent-center height-300px width-400px ">
      <div
        style={{
          backgroundImage: `url(${`http://localhost:8000/${props.imagePath}`})`,
        }}
        className="height-200px width-300px  transition-0-3s bgr-cover bgr-repeat-no scale-3-25"
      ></div>
      {props.children}
    </div>
  );
};

export default ProductImage;
