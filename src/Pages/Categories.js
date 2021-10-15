import axios from "axios";
import DataTable from "Components/Molecules/DataTable/DataTable";
import ModalView from "Components/Molecules/Modal/Modal";
import { useFetch } from "Hooks/useFetch";
import React, { useState } from "react";

const Categories = () => {
  const [pageNum, setpageNum] = useState(0);
  const tableHead = ["id", "nom", "description", "nombreProduit"];
  const [modalDisplay, setmodalDisplay] = useState(false);
  const [idDeleteCategorie, setidDeleteCategorie] = useState(null);
  const { data, loading, error, setData } = useFetch(
    `http://localhost:8000/api/getCategorieInAdminSide/${pageNum}`
  );

  const nextPageCategorie = async (pageNumber) => {
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
  const searchCategories = async (pattern) => {
    if (pattern) {
      try {
        const searchResponse = await axios.get(
          `http://localhost:8000/api/getWithSearchNameCategorie/${pattern}/0`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setData({
          ...data,
          ["categorieNumber"]: searchResponse.data.categorieNumber,
          ["categories"]: searchResponse.data.categories,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const searchResponse = await axios.get(
          `http://localhost:8000/api/getCategorieInAdminSide/0`
        );
        setData({
          ...data,
          ["categorieNumber"]: searchResponse.data.categorieNumber,
          ["categories"]: searchResponse.data.categories,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteCategorie = async (id) => {
    try {
      const deleteResponse = await axios.delete(
        `http://localhost:8000/api/deleteCatalogue/${id}`,
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
            `http://localhost:8000/api/getCategorieInAdminSide/0`
          );
          setData({
            ...data,
            ["categorieNumber"]: searchResponse.data.categorieNumber,
            ["categories"]: searchResponse.data.categories,
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
    setidDeleteCategorie(id);
    setmodalDisplay(true);
  };

  return (
    <div>
      Categories
      <DataTable
        editAbility={false}
        handleSearch={searchCategories}
        changePage={nextPageCategorie}
        itemNumber={data.categorieNumber}
        handleDelete={handleDIsplayAndDelete}
        data={data.categories}
        loading={loading}
        tableHead={tableHead}
        error={error}
        currentPage={pageNum + 1}
      />
      <ModalView
        annuler={() => setmodalDisplay(false)}
        title="Are you sure to delete this Product"
        action={() => deleteCategorie(idDeleteCategorie)}
        setmodalDisplay={setmodalDisplay}
        display={modalDisplay}
      />
    </div>
  );
};

export default Categories;
