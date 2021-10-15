import axios from "axios";

export const fetchCategorie = async () => {
  try {
    const categoriesResponse = await axios.get(
      "http://localhost:8000/api/getCatalogues"
    );

    if (categoriesResponse.data.status === 200 && categoriesResponse.data) {
      return categoriesResponse.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
