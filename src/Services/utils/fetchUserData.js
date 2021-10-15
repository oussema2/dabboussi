import axios from "axios";

export const fetchUserData = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/getUser", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.data.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    console.log("error");
  }
};
