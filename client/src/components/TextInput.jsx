import React from "react";

const TextInput = ({ name, value, placeholder, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
