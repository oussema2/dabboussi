import Button from "Components/Atoms/Buttons/Button";
import { buttonStyle } from "Components/Atoms/Buttons/Button";
import InputField from "Components/Atoms/InputField/InputField";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import Pagination from "../Pagination/Pagination";
const DataTable = (props) => {
  return (
    <div className="display-flex  flexDirection-column width-100 ">
      <div className="flexDirection-row display-flex width-100  ">
        {/* <div className="display-flex flexDirection-row flex-6 ">
          {props.itemNumber
            ? Array(Math.floor(props.itemNumber / 10 + 1))
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
        </div> */}
        <Pagination
          number={props.itemNumber}
          changePage={props.changePage}
          currentPage={props.currentPage}
        />
        <div className="display-flex flexDirection-row flex-3 justifyContent-evenly  ">
          <InputField
            handleChange={(e) => props.handleSearch(e.target.value)}
          />
          <Button
            className="inputFieldMargin"
            width={100}
            btnStyle={buttonStyle.default}
            buttonText="Search"
            disabled={false}
          />
        </div>
      </div>
      <hr className="border-top height-50px margin-top-50px " />
      <table className="textAlign-center fontSize-1-1rem ">
        <thead>
          {props.tableHead.map((item, i) => (
            <th key={i}>{item}</th>
          ))}
          <th>Action</th>
        </thead>
        <tbody>
          {props.data
            ? props.data.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? "bgr-gray" : ""}>
                  {props.tableHead.map((item, index) => (
                    <td key={index}>{product[item]}</td>
                  ))}
                  <td>
                    <RiDeleteBinLine
                      onClick={() => props.handleDelete(product.id)}
                    />{" "}
                    {props.editAbility ? (
                      <AiFillEdit
                        onClick={() => props.onGotToEdit(product.id)}
                      />
                    ) : null}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
