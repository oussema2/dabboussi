import axios from "axios";
import DataTable from "Components/Molecules/DataTable/DataTable";
import ModalView from "Components/Molecules/Modal/Modal";
import { useFetch } from "Hooks/useFetch";
import React, { useState } from "react";
import { useHistory } from "react-router";
const Products = () => {
  const [pageNum, setpageNum] = useState(0);
  const tableHead = [
    "id",
    "nom",
    "description",
    "categorie",
    "quantite",
    "prix",
  ];
  const [modalDisplay, setmodalDisplay] = useState(false);
  const [idDeleteProduct, setidDeleteProduct] = useState(null);
  const history = useHistory();
  const { data, loading, error, setData } = useFetch(
    `http://localhost:8000/api/getPoductsInAdminSide/${pageNum}`
  );

  const nextPageProducts = async (pageNumber) => {
    setpageNum(pageNumber);
    try {
      const productResponse = await axios.get(
        `http://localhost:8000/api/getPoductsInAdminSide/${pageNumber}`
      );
      if (productResponse.data.status === 200) {
        setData(productResponse.data);
        setpageNum(pageNumber);
      }
    } catch (error) {
      console.log("error");
    }
  };
  const searchProducts = async (pattern) => {
    if (pattern) {
      try {
        const searchResponse = await axios.get(
          `http://localhost:8000/api/getWithSearchName/${pattern}/0`
        );
        setData({
          ...data,
          ["productsNumber"]: searchResponse.data.productsNumber,
          ["products"]: searchResponse.data.products,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const searchResponse = await axios.get(
          `http://localhost:8000/api/getPoductsInAdminSide/0`
        );
        setData({
          ...data,
          ["productsNumber"]: searchResponse.data.productsNumber,
          ["products"]: searchResponse.data.products,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteProduit = async (id) => {
    try {
      const deleteResponse = await axios.delete(
        `http://localhost:8000/api/deleteProduct/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setmodalDisplay(false);
      if (deleteResponse.status === 200) {
        try {
          const searchResponse = await axios.get(
            `http://localhost:8000/api/getPoductsInAdminSide/0`
          );
          setData({
            ...data,
            ["productsNumber"]: searchResponse.data.productsNumber,
            ["products"]: searchResponse.data.products,
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDIsplayAndDelete = (id) => {
    setidDeleteProduct(id);
    setmodalDisplay(true);
  };
  const onGotToEdit = (id) => {
    history.push(`/editProduct/${id}`);
  };

  return (
    <div>
      Products
      <DataTable
        editAbility={true}
        handleSearch={searchProducts}
        changePage={nextPageProducts}
        itemNumber={data.productsNumber}
        handleDelete={handleDIsplayAndDelete}
        data={data.products}
        loading={loading}
        tableHead={tableHead}
        error={error}
        currentPage={pageNum + 1}
        onGotToEdit={onGotToEdit}
      />
      <ModalView
        annuler={() => setmodalDisplay(false)}
        title="Are you sure to delete this Product"
        action={() => deleteProduit(idDeleteProduct)}
        setmodalDisplay={setmodalDisplay}
        display={modalDisplay}
      />
    </div>
  );
};

export default Products;
