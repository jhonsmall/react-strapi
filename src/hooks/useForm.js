import { useState } from "react";

const useForm = (initialState = {}, callback) => {
  const [values, setValues] = useState(initialState);
  
  // console.log(initialState);
  // console.log(callback);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();
    console.log('handleSubmit');
    callback();
  };

  // el orden importa
  return [
    values,
    setValues,
    handleInputChange,
    handleSubmit
  ];
}

export default useForm;