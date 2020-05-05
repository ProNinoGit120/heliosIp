import React from "react";
import styled from "styled-components";
import Colors from "../../utils/colors";
import Size from "../../utils/size";
export const StyledForm = styled.form`
  margin: 0;
  padding: 0;
  width: 100%;
`;
export const StyledInputWrapper = styled.div`
  width: 100%;
  padding: ${({ padding }) => padding};
`;
export const StyledLabel = styled.label`
  margin-bottom: 8px;
`;
export const StyledInput = styled.input`
  border-radius: ${Size.radius}px;
  width: 100%;
  outline: 0;
  height: 48px;
  border: 1px solid ${Colors.border};
  padding: 0 16px;
  &:focus {
    border-color: ${Colors.blue};
  }
`;
export const StyledTextArea = styled.textarea``;
export const StyledFormButton = styled.button``;
// export const StyledFormButton = styled.button``;
