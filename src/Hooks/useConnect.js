import { useEffect, useState } from "react";

export const useConnect = (value, validator, onSubmitfun, valueChekers) => {
  const [values, setValues] = useState(value);

  const [validatorValue, setvalidatorValue] = useState(validator);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checker, setchecker] = useState("");
  const handleChange = (key, value) => {
    const dataForm = { ...values };
    dataForm[key] = value;
    setValues(dataForm);
  };
  const runonSubmit = async () => {
    onSubmitfun();
  };
  useEffect(() => {
    if (checker) {
      valueChekers[checker](values[checker], validatorValue, setvalidatorValue);
    }
  }, [values]);

  return {
    values,
    loading,
    error,
    checker,
    validatorValue,
    setvalidatorValue,
    handleChange,
    setLoading,
    setError,
    setchecker,
    runonSubmit,
  };
};
