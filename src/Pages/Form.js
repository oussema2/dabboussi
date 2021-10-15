import axios from "axios";
import { useForm } from "Hooks/useForm";
import React, { useContext } from "react";
import { ConnectContext } from "Services/StateManagment/ConnectState/ConnectContext";
import { logInForm } from "StaticData/LogInFormData";

const Form = () => {
  const connectContext = useContext(ConnectContext);

  const { renderFormInputs, isFormValid, handleSubmit } = useForm(
    logInForm,
    async (e, formobj) => {
      e.preventDefault();
      const email = formobj.email.value;
      const password = formobj.password.value;
      try {
        const connectResponse = await axios.post(
          "http://localhost:8000/api/logIn",
          { email: email, password: password }
        );
        connectContext.connectDispatch({
          type: "connect",
          payload: connectResponse.data.user.name,
        });
        localStorage.setItem("token", connectResponse.data.token);
        localStorage.setItem("name", connectResponse.data.user.name);
      } catch (error) {
        console.log("error");
      }
    }
  );
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="width-400px height-500px"
    >
      <h1>LogIn</h1>
      {renderFormInputs()}
      <button
        disabled={!isFormValid()}
        /*   onClick={() => handleSubmit()} */
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
