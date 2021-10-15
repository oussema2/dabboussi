import axios from "axios";
import Column from "Components/Containers/Column";
import Row from "Components/Containers/Row";
import Pagination from "Components/Molecules/Pagination/Pagination";
import ProductCarte from "Components/Molecules/ProductCarte/ProductCarte";
import React from "react";
import { useHistory, useParams } from "react-router";
import { fetchLogicInHome } from "Services/utils/fetChingLogicInHome";

const Home = () => {
  const { numPage, idCategorie } = useParams();
  const history = useHistory();
  const { data, loading, error, setData } = fetchLogicInHome(
    numPage - 1,
    idCategorie
  );
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  console.log(data);
  const changePage = async (numPage) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/getProducts/${numPage}`
      );
      if (response.data.status === 200) {
        console.log(response);
        setData(response.data);
      }
    } catch (error) {
      console.log("error");
    }
    if (idCategorie) {
      history.push(`/${numPage + 1}/${idCategorie}`);
    } else {
      history.push(`/${numPage + 1}`);
    }
  };

  console.log(data);
  return (
    <Column>
      <Pagination
        number={data.productsNumber}
        changePage={changePage}
        currentPage={Number(numPage)}
      />
      <Row className="flexWrap-wrap margin-top-200px ">
        {data.data?.length
          ? data.data.map((item) => (
              <ProductCarte
                image={item.image}
                nomProduct={item.nom}
                priceProduct={item.prix}
                key={item.id}
              ></ProductCarte>
            ))
          : null}
      </Row>
    </Column>
  );
};

export default Home;
