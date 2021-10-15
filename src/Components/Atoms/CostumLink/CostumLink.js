import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

const CostumLink = (props) => {
  return (
    <Link to={props.path} className="textDecoration-none color-black ">
      <Title
        cursor="pointer"
        className={` ${props.className}`}
        text={props.title}
        size={20}
        weight={600}
      />
    </Link>
  );
};

export default CostumLink;
