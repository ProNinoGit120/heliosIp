import React, { useState } from "react";
import styled from "styled-components";
// import { Colors } from "../utils";
import { StyledInput } from "../utils/elements";

const useInput = ({ type, placeholder }) => {
  const [value, setValue] = useState("");
  function clear() {
    setValue("");
  }
  const input = (
    <StyledInput
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
      type={type}
      placeholder={placeholder}
    />
  );
  return [value, input, clear];
};

export default useInput;
