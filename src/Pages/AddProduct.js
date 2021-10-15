import axios from "axios";
import Button from "Components/Atoms/Buttons/Button";
import { buttonStyle } from "Components/Atoms/Buttons/Button";
import SelectOptions from "Components/Atoms/SelectOptions/SelectOptions";
import Notification from "Components/Molecules/Notification/Notification";
import { useFetch } from "Hooks/useFetch";
import { useForm } from "Hooks/useForm";
import React, { useState } from "react";
import { addProductFormData } from "StaticData/AddProductForm";
import { breakTime } from "StaticData/BreackTime";

const AddProduct = () => {
  const [notificationView, notif] = Notification();

  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/getCatalogues"
  );
  const [categorieId, setcategorieId] = useState(0);

  const { renderFormInputs, isFormValid, handleSubmit } = useForm(
    addProductFormData,
    async (e, formobj) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("nom", formobj.nomProduit.value);
      formData.append("description", formobj.description.value);
      formData.append("quantite", formobj.quantitie.value);
      formData.append("prix", formobj.prix.value);
      formData.append("idCatalogue", categorieId);
      formData.append(
        "image",
        document.getElementsByTagName("form")[0][4].files[0]
      );

      try {
        const response = await axios.post(
          "http://localhost:8000/api/addProduct",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.status === 200) {
          notif(breakTime);
        }
      } catch (error) {
        console.log("Error");
      }
    }
  );
  isFormValid([categorieId !== 0]);

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="width-500px height-1000px display-flex flexDirection-column margin-auto"
      >
        <h1 className=" textAlign-center">Add Product</h1>
        {renderFormInputs()}

        <SelectOptions
          label="categorie"
          data={data.categories}
          errorMessage="shoose categorie please"
          isValid={categorieId !== 0 ? true : false}
          loading={loading}
          error={error}
          handleChange={(id) => setcategorieId(id)}
        />
        <Button
          disabled={!isFormValid([categorieId !== 0])}
          type="submit"
          buttonText="Add Product"
          btnStyle={buttonStyle.default}
        />
      </form>
      {notificationView("Product Added")}
    </div>
  );
};

export default AddProduct;
