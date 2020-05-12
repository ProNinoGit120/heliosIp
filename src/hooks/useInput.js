import React, { useState } from "react";
import styled from "styled-components";
// import { Colors } from "../utils";
import { StyledInput } from "../utils/elements";

const useInput = ({ type, placeholder, id }) => {
  const [value, setValue] = useState("");
  function clear() {
    setValue("");
  }
  const input = (
    <StyledInput
      id={id}
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
      type={type}
      name={id}
      placeholder={placeholder}
    />
  );
  return [value, input, clear];
};

export default useInput;
