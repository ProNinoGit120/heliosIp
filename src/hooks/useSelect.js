import React, { useState } from "react";
import styled from "styled-components";
// import { Colors } from "../utils";
import { StyledSelect } from "../utils/elements";

const useInput = ({ placeholder, options, id }) => {
  const [value, setValue] = useState("");
  const [isSelected, setSelected] = useState(false);
  function clear() {
    setValue("");
    setSelected(false);
  }
  const input = (
    <StyledSelect
      id={id}
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
      <option defaultValue={placeholder}>{placeholder}</option>
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
  return [value, input, clear];
};

export default useInput;
