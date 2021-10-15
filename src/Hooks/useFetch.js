import axios from "axios";
import React from "react";

export const useFetch = (url, params, header = null) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, header);
        if (response.data.status === 200) {
          setLoading(false);
          setData(response.data);
        }
      } catch (error) {
        setLoading(false);
        setError("error");
      }
    })();
  }, [params]);

  return {
    data,
    loading,
    error,
    setData,
  };
};
