import React, { useState } from "react";
import styled from "styled-components";
// import { Colors } from "../utils";
import { StyledSelect } from "../utils/elements";

const useInput = ({ placeholder, options }) => {
  const [value, setValue] = useState("");
  const [isSelected, setSelected] = useState(false);
  function clear() {
    setValue("");
    setSelected(false);
  }
  const input = (
    <StyledSelect
      value={value}
      onChange={e => {
        setValue(e.target.value);
        if (e.target.value === placeholder) {
          setSelected(false);
        } else {
          setSelected(true);
        }
      }}
      selected={isSelected}
    >
      <option selected>{placeholder}</option>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
  return [value, input, clear];
};

export default useInput;
