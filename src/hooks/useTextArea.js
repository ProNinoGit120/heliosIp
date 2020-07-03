import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { Colors } from "../utils";
import { StyledTextArea } from "../utils/elements";

const useTextArea = ({ placeholder, id }) => {
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
    } else {
      setError(false);
    }
  }

  const input = (
    <StyledTextArea
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
      placeholder={placeholder}
      hasError={error}
    />
  );
  return [value, input, clear, error];
};

export default useTextArea;
