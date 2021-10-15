import axios from "axios";
import Button from "Components/Atoms/Buttons/Button";
import { buttonStyle } from "Components/Atoms/Buttons/Button";
import { useForm } from "Hooks/useForm";
import { useContext } from "react";
import { useHistory } from "react-router";
import { ConnectContext } from "Services/StateManagment/ConnectState/ConnectContext";
import { logInForm } from "StaticData/LogInFormData";
const Connexion = () => {
  const connectContext = useContext(ConnectContext);
  const history = useHistory();

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
          payload: {
            name: connectResponse.data.user.name,
            userTypeID:
              connectResponse.data.user.Idtype === 2 ? "Admin" : "Client",
          },
        });
        localStorage.setItem("token", connectResponse.data.token);
        localStorage.setItem("name", connectResponse.data.user.name);
        history.push("/0");
      } catch (error) {
        console.log("error");
      }
    }
  );
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="width-500px height-500px display-flex flexDirection-column margin-auto"
    >
      <h1 className=" textAlign-center">LogIn</h1>
      {renderFormInputs()}
      <Button
        disabled={!isFormValid()}
        type="submit"
        buttonText="LogIn"
        btnStyle={buttonStyle.default}
      />
    </form>
  );
};

export default Connexion;
