import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { Colors } from "../utils";
import { StyledSelect } from "../utils/elements";

const useInput = ({ placeholder, options, id }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [isSelected, setSelected] = useState(false);

  function clear() {
    setValue("");
    setSelected(false);
  }

  useEffect(() => {
    if (value === placeholder) {
      setError(true);
    } else {
      setError(false);
    }
  }, [value]);

  const handleSelect = e => {
    setValue(e.target.value);
    if (e.target.value === placeholder) {
      setSelected(false);
      setError(true);
    } else {
      setSelected(true);
    }
  };

  // function validate() {
  //   if (!isSelected) {
  //     setError(true);
  //   } else {
  //     setError(false);
  //   }
  // }

  const input = (
    <StyledSelect
      hasError={error}
      id={id}
      name={id}
      value={value}
      onChange={handleSelect}
      selected={isSelected}
      onClick={() => {
        if (value === "") {
          setError(true);
        } else {
          setError(false);
        }
      }}
      // defaultValue={placeholder}
    >
      <option defaultValue>{placeholder}</option>
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
  return [value, input, clear, error];
};

export default useInput;
