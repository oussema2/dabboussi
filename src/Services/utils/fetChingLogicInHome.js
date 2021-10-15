import { useFetch } from "Hooks/useFetch";

export const fetchLogicInHome = (numPage, idCategorie) => {
  if (idCategorie) {
    return useFetch(
      `http://localhost:8000/api/getProductsWithCategorie/${Number(
        numPage
      )}/${Number(idCategorie)}`,
      idCategorie
    );
  } else {
    return useFetch(
      `http://localhost:8000/api/getProducts/${numPage}`,
      numPage
    );
  }
};
