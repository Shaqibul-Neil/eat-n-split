import { useState } from "react";

const useInputField = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return [inputValue, handleInputChange];
};

export default useInputField;
