export const initialState = {
  connected: false,
  name: {},
};
export const reducerFunc = (state = initialState, action) => {
  switch (action.type) {
    case "connect":
      return {
        connected: true,
        userData: action?.payload,
      };

    case "logOut":
      localStorage.removeItem("token");
      localStorage.removeItem("name");

      return {
        connected: false,
      };

    default:
      return state;
  }
};
