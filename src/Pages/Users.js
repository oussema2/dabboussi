import axios from "axios";
import DataTable from "Components/Molecules/DataTable/DataTable";
import ModalView from "Components/Molecules/Modal/Modal";
import { useFetch } from "Hooks/useFetch";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Users = () => {
  const [pageNum, setpageNum] = useState(0);
  const tableHead = ["id", "name", "email", "Type", "dateDeNaissance"];
  const [modalDisplay, setmodalDisplay] = useState(false);
  const [idDeleteUser, setidDeleteUser] = useState(null);
  const history = useHistory();
  const { data, loading, error, setData } = useFetch(
    `http://localhost:8000/api/getUsersForAdmin/${pageNum}`
  );
  const nextPageProducts = async (pageNumber) => {
    setpageNum(pageNumber);
    try {
      const usersResponse = await axios.get(
        `http://localhost:8000/api/getUsersForAdmin/${pageNumber}`
      );
      if (usersResponse.data.status === 200) {
        setData(usersResponse.data);
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
          `http://localhost:8000/api/getSearchedUsers/${pattern}/0`,
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
          ["userNumber"]: searchResponse.data.userNumber,
          ["users"]: searchResponse.data.users,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const searchResponse = await axios.get(
          `http://localhost:8000/api/getUsersForAdmin/0`
        );
        setData({
          ...data,
          ["userNumber"]: searchResponse.data.userNumber,
          ["users"]: searchResponse.data.users,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteUser = async (id) => {
    try {
      const deleteResponse = await axios.delete(
        `http://localhost:8000/api/deleteUser/${id}`,
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
            `http://localhost:8000/api/getUsersForAdmin/0`
          );
          setData({
            ...data,
            ["userNumber"]: searchResponse.data.userNumber,
            ["users"]: searchResponse.data.users,
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
    setidDeleteUser(id);
    setmodalDisplay(true);
  };
  const onGotToEdit = (id) => {
    history.push(`/editUser/${id}`);
  };
  return (
    <div>
      Users
      <DataTable
        editAbility={false}
        handleSearch={searchProducts}
        changePage={nextPageProducts}
        itemNumber={data.userNumber}
        handleDelete={handleDIsplayAndDelete}
        data={data.users}
        loading={loading}
        tableHead={tableHead}
        error={error}
        currentPage={pageNum + 1}
        onGotToEdit={onGotToEdit}
      />
      <ModalView
        annuler={() => setmodalDisplay(false)}
        title="Are you sure to delete this Product"
        action={() => deleteUser(idDeleteUser)}
        setmodalDisplay={setmodalDisplay}
        display={modalDisplay}
      />
    </div>
  );
};

export default Users;
