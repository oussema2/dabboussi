import Column from "Components/Containers/Column";
import React from "react";

const SelectOptions = (props) => {
  return (
    <Column className="inputFieldMargin">
      <label className="labelMargin fontSize-1-1rem">{props.label}</label>
      <select
        className="padding-10px border-none margin-0-0-8px-0 boxSizing-borderBox borderBottom-1px-solid-777 bgr-eee outline-none fontSize-1-1rem"
        name={props.name}
        onChange={(e) => props.handleChange(e.target.value)}
      >
        <option selected value={0}>
          Choose Product Categorie
        </option>
        {props.data
          ? props.data.map((item) => (
              <option value={item.id} key={item.id}>
                {item.nom}
              </option>
            ))
          : null}
      </select>
      {props.errorMessage && !props.isValid && (
        <span className="color-red fontSize-1-1rem ">{props.errorMessage}</span>
      )}
    </Column>
  );
};

export default SelectOptions;
