import axios from "axios";

export const connectMethod = async (connect, connectContext, history) => {
  try {
    connect.setLoading(true);
    const connectResponse = await connectApi(connect.values);
    if (connectResponse.data.status === 200) {
      connect.setLoading(false);
      saveUserDataInLocalStorage(connectResponse);
      connectContext.connectDispatch("connect");

      history.push("/");
    }

    if (connectResponse.data.status === 401) {
      connect.setError(connectResponse.data.message);
      connect.setLoading(false);
    }
  } catch (error) {
    connect.setError("error");
  }
};

const connectApi = async (values) => {
  const response = await axios.post("http://localhost:8000/api/logIn", values);
  return response;
};

const saveUserDataInLocalStorage = (connectResponse) => {
  localStorage.setItem("token", connectResponse.data.token);
  localStorage.setItem("nom", connectResponse.data.user.name);
};
