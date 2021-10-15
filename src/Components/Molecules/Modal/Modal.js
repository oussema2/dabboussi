import Button from "Components/Atoms/Buttons/Button";
import { buttonStyle } from "Components/Atoms/Buttons/Button";
import Column from "Components/Containers/Column";
import Row from "Components/Containers/Row";
import React from "react";
import Modal from "react-modal";

const ModalView = (props) => {
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
          textAlign: `center`,
          width: `500px`,
          height: `300px`,
          margin: `auto`,
          borderRadius: `10px`,
        },
      }}
      onRequestClose={() => props.setmodalDisplay(false)}
      isOpen={props.display}
    >
      <Column className="justifyContent-spaceBetween height-100   padding-right-10px">
        <h3 className="fontSize-30px projectFont">{props.title}</h3>
        <Row className="width-100 justifyContent-evenly ">
          <Button
            className="height-50px"
            btnStyle={buttonStyle.success}
            disabled={false}
            buttonText={"Annuler"}
            clickButton={props.annuler}
            width={100}
          />
          <Button
            className="height-50px"
            width={100}
            buttonText={"Confirm"}
            btnStyle={buttonStyle.error}
            clickButton={props.action}
            disabled={false}
          />
        </Row>
      </Column>
    </Modal>
  );
};

export default ModalView;
