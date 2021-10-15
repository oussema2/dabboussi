import axios from "axios";
import Button from "Components/Atoms/Buttons/Button";
import { buttonStyle } from "Components/Atoms/Buttons/Button";
import Notification from "Components/Molecules/Notification/Notification";
import { useForm } from "Hooks/useForm";
import React from "react";
import { addCategorieForm } from "StaticData/AddCategorieForm";

const AddCategorie = () => {
  const [notificationView, notif] = Notification();
  const { renderFormInputs, isFormValid, handleSubmit } = useForm(
    addCategorieForm,
    async (e, formobj) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("nom", formobj.nomCategorie.value);
      formData.append("description", formobj.description.value);

      formData.append(
        "icon",
        document.getElementsByTagName("form")[0][2].files[0]
      );

      try {
        const response = await axios.post(
          "http://localhost:8000/api/addCatalogue",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 201) {
          notif();
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
        <h1 className=" textAlign-center">Add Categorie</h1>
        {renderFormInputs()}

        <Button
          disabled={isFormValid()}
          type="submit"
          buttonText="Add Categorie"
          btnStyle={buttonStyle.default}
        />
      </form>
      {notificationView("Categorie Added")}
    </div>
  );
};

export default AddCategorie;
