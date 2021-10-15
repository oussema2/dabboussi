import axios from "axios";
import Button from "Components/Atoms/Buttons/Button";
import { buttonStyle } from "Components/Atoms/Buttons/Button";
import Notification from "Components/Molecules/Notification/Notification";
import { useForm } from "Hooks/useForm";
import React from "react";
import { useHistory } from "react-router";
import { breakTime } from "StaticData/BreackTime";
import { registerForm } from "StaticData/RegisterForm";

const Register = () => {
  const [notificationView, notif] = Notification();
  const history = useHistory();

  const { renderFormInputs, isFormValid, handleSubmit } = useForm(
    registerForm,
    async (e, formObj) => {
      e.preventDefault();
      const userData = {};
      userData["name"] = formObj.name.value;
      userData["email"] = formObj.email.value;
      userData["password"] = formObj.password.value;
      userData["dateDeNaissance"] = formObj.birthDate.value;
      try {
        const response = await axios.post(
          "http://localhost:8000/api/register",
          userData
        );
        if (response.data.status === 200) {
          notif(breakTime);
          setTimeout(() => {
            history.push("/connexion");
          }, breakTime);
        }
      } catch (error) {
        console.log("Error");
      }
    }
  );

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="width-500px height-1000px display-flex flexDirection-column margin-auto"
      >
        <h1 className=" textAlign-center">Register</h1>
        {renderFormInputs()}

        <Button
          disabled={!isFormValid()}
          type="submit"
          buttonText="Register"
          btnStyle={buttonStyle.default}
        />
      </form>
      {notificationView("Registration success")}
    </div>
  );
};

export default Register;
