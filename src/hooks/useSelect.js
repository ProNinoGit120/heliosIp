import React, { useState } from "react";
import styled from "styled-components";
// import { Colors } from "../utils";
import { StyledSelect } from "../utils/elements";

const useInput = ({ placeholder, options }) => {
  const [value, setValue] = useState("");
  const input = (
    <StyledSelect
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
    >
      <option selected>{placeholder}</option>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
  return [value, input];
};

export default useInput;
