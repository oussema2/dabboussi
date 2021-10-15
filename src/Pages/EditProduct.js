import axios from "axios";
import Button from "Components/Atoms/Buttons/Button";
import { buttonStyle } from "Components/Atoms/Buttons/Button";
import Title from "Components/Atoms/Title/Title";
import Column from "Components/Containers/Column";
import Row from "Components/Containers/Row";
import ModalView from "Components/Molecules/Modal/Modal";
import { useForm } from "Hooks/useForm";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { EditProductForm } from "StaticData/EditProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const [modalDisplay, setmodalDisplay] = useState(false);
  const history = useHistory();
  const [productData, setproductData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await axios.get(
          `http://localhost:8000/api/getProduct/${id}`
        );
        if (productResponse.data) {
          setproductData(productResponse.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const { renderFormInputs, isFormValid, handleSubmit, form } = useForm(
    EditProductForm,
    async (e) => {
      e.preventDefault();
      setmodalDisplay(true);
    }
  );

  const UpdateProduct = async (formobj) => {
    const EditedProductData = {};
    EditedProductData["id"] = productData.id;
    EditedProductData["nom"] = formobj.nomProduit.value;
    EditedProductData["description"] = formobj.description.value;
    EditedProductData["quantite"] = formobj.quantitie.value;
    EditedProductData["prix"] = formobj.prix.value;

    try {
      const responseEdit = await axios.put(
        "http://localhost:8000/api/updateProduct",
        EditedProductData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (responseEdit.data.status === 200) {
        setmodalDisplay(false);
        history.push("/products");
      } else {
        setmodalDisplay(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="display-flex">
      <Column>
        <Row>
          <Title weight={800} size={30} text="Nom Product: " />
          <Title weight={600} size={20} text={productData.nom} />
        </Row>
        <Row>
          <Title
            weight={800}
            size={30}
            text="Description Product
 :"
          />
          <Title weight={600} size={20} text={productData.description} />
        </Row>
        <Row>
          <Title weight={800} size={30} text="Quantite Product :" />
          <Title weight={600} size={20} text={productData.quantite} />
        </Row>
        <Row>
          <Title weight={800} size={30} text="Product Price :" />
          <Title weight={600} size={20} text={`${productData.prix} TND`} />
        </Row>
      </Column>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="width-500px height-1000px display-flex flexDirection-column margin-auto"
      >
        <h1 className=" textAlign-center">Edit Product</h1>
        {renderFormInputs()}

        <Button
          disabled={!isFormValid()}
          type="submit"
          buttonText="Edit Product"
          btnStyle={buttonStyle.default}
        />
      </form>

      <ModalView
        annuler={() => setmodalDisplay(false)}
        title="Are you sure to Update this Product"
        action={() => UpdateProduct(form)}
        setmodalDisplay={setmodalDisplay}
        display={modalDisplay}
      />
    </div>
  );
};

export default EditProduct;
