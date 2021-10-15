import axios from "axios";
import { useState } from "react";

export const useForms = (value, url, onSubmit = () => {}) => {
  const [values, setValues] = useState(value);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (key, value) => {
    const dataForm = { ...values };
    dataForm[key] = value;
    setValues(dataForm);
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(url, values);

      if (response.data.status === 200) {
        setLoading(false);
      }

      if (response.data.status === 401) {
        setError(response.data.message);
      }
    } catch (error) {
      setError("error");
    }
  };

  return {
    values,
    loading,
    error,
    handleChange,

    onSubmit,
  };
};
