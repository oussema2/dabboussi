import axios from "axios";
import Button from "Components/Atoms/Buttons/Button";
import { buttonStyle } from "Components/Atoms/Buttons/Button";
import Title from "Components/Atoms/Title/Title";
import Column from "Components/Containers/Column";
import Row from "Components/Containers/Row";
import { useForm } from "Hooks/useForm";
import React, { useEffect, useState } from "react";
import { editUserForm } from "StaticData/EditUSerForm";

const EditUser = () => {
  const [userTypeId, setuserTypeId] = useState(0);
  const [userData, setuserData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const userResponse = await axios.get(
          `http://localhost:8000/api/getUser`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (userResponse.data) {
          setuserData(userResponse.data.user);
          setuserTypeId(userResponse.data.Idtype);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const { renderFormInputs, isFormValid, handleSubmit } = useForm(
    editUserForm,
    async (e, formObj) => {
      e.preventDefault();
      console.log(formObj);
      const editedData = {};

      editedData["name"] = formObj.name.value;
      editedData["email"] = formObj.email.value;
      editedData["dateDeNaissance"] = formObj.birthDate.value;
      editedData["password"] = formObj.password.value;

      try {
        const editResponse = await axios.put(
          "http://localhost:8000/api/updateProfile",
          editedData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (editResponse.data.status === 200) {
          console.log(editResponse.data.user);
        }
      } catch (error) {
        console.log("error");
      }
    }
  );

  return (
    <div className="display-flex">
      <Column>
        <Row>
          <Title weight={800} size={30} text="User Name: " />
          <Title weight={600} size={20} text={userData.name} />
        </Row>
        <Row>
          <Title
            weight={800}
            size={30}
            text="User Email
 :"
          />
          <Title weight={600} size={20} text={userData.email} />
        </Row>
        <Row>
          <Title weight={800} size={30} text="Birth Date  :" />
          <Title weight={600} size={20} text={userData.dateDeNaissance} />
        </Row>
      </Column>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="width-500px height-1000px display-flex flexDirection-column margin-auto"
      >
        <h1 className=" textAlign-center">Edit User</h1>
        {renderFormInputs()}

        <Button
          disabled={!isFormValid([userTypeId !== 0])}
          type="submit"
          buttonText="Edit"
          btnStyle={buttonStyle.default}
        />
      </form>
    </div>
  );
};

export default EditUser;
