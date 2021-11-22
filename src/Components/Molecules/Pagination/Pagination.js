import Button from "Components/Atoms/Buttons/Button";
import { buttonStyle } from "Components/Atoms/Buttons/Button";
import React from "react";

const Pagination = (props) => {
  console.log(props);
  return (
    <div className="display-flex flexDirection-row flex-6 ">
      {props.number
        ? Array(
            Math.floor(props.number / 10) === 0
              ? 1
              : Math.floor(props.number / 10 + 1)
          )
            .fill(1)
            .map((item, index) => (
              <Button
                clickButton={() => props.changePage(index)}
                width={50}
                key={index}
                disabled={props.currentPage === index + 1 ? true : false}
                buttonText={index + 1}
                btnStyle={buttonStyle.default}
              />
            ))
        : null}
    </div>
  );
};

export default Pagination;
