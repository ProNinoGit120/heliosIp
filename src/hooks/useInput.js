import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { Colors } from "../utils";
import { StyledInput } from "../utils/elements";

const useInput = ({ type, placeholder, id }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  function clear() {
    setValue("");
  }

  useEffect(() => {
    if (error) {
      validate();
    }
  }, [value]);

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validate() {
    if (!value || value === "") {
      setError(true);
    } else if (type === "email") {
      if (validateEmail(value)) {
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setError(false);
    }
  }

  const input = (
    <StyledInput
      id={id}
      name={id}
      value={value}
      onChange={e => {
        setValue(e.target.value);
        validate();
      }}
      onBlur={() => {
        validate();
      }}
      type={type}
      placeholder={placeholder}
      hasError={error}
    />
  );
  return [value, input, clear, error];
};

export default useInput;
