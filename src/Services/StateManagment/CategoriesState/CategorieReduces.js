export const initialCategories = {
  categories: [],
  fetched: false,
};

export const reducerCategorie = (state = initialCategories, action) => {
  switch (action.type) {
    case "ADD_CATEGORIES":
      console.log("you are here");
      return {
        categories: action?.payload,
        fetched: true,
      };

    default:
      return state;
  }
};
