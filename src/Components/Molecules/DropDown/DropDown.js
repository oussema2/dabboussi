import CostumLink from "Components/Atoms/CostumLink/CostumLink";
import Title from "Components/Atoms/Title/Title";
import Column from "Components/Containers/Column";
import React from "react";

const DropDown = (props) => {
  if (props.loading) {
    return (
      <Column className=" position-relative textAlign-center transform-translateY--200 transition-0-5-s z-index-999 bgr-wheat width-200px height-400px border-radius-10px position-absolute  alignItems-center justifyContent-center  top right">
        <Title text="loading" size={40} weight={800} />;
      </Column>
    );
  }

  if (props.error) {
    return (
      <Column className="position-relative textAlign-center transform-translateY--200 transition-0-5-s z-index-999 bgr-wheat width-200px height-400px border-radius-10px position-absolute  alignItems-center justifyContent-center  top right">
        <Title text={props.error} size={30} weight={600} />;
      </Column>
    );
  }
  return (
    <Column
      className={`position-relative textAlign-center transform-translateY--200 overflow-hidden costumScrollBar overFlow-scrollX-hidden overFlow-scroll transition-0-5-s z-index-999 bgr-wheat width-${props.width}px height-300px border-radius-10px position-absolute   top right`}
    >
      {props.data.map((item, i) => (
        <CostumLink
          path={`${item.path}`}
          key={i}
          title={item.title}
          className=" height-auto border-radius-10px fontSize-30px  cursor-pointer transition-0-5-s bgr-black-hover width-100 color-white-hover  "
        >
          {item.nom}
        </CostumLink>
      ))}
    </Column>
  );
};

export default DropDown;
