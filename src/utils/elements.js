import React from "react";
import { Link } from "gatsby";
import Size from "./size";
import styled, { css } from "styled-components";
import Colors from "./colors";

const StyledContainer = styled.div`
  max-width: ${Size.max}px;
  width: 100%;
  margin: 0 auto;
`;

export const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export const Flex = ({ children, align, justify, direction, responsive }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      alignItems: `${align}`,
      justifyContent: `${justify}`,
      flexDirection: `${direction ? direction : `row`}`,
    }}
  >
    {children}
  </div>
);

const StyledCol = styled.div`
  width: ${({ width }) => width};
  padding: ${({ noP }) => (noP ? `0` : `0 32px`)};
`;

export const Col = ({ children, width, noP }) => (
  <StyledCol noP={noP} width={width}>
    {children}
  </StyledCol>
);

const StyledButton = css`
  cursor: pointer;
  outline: none;
  padding: 8px 16px;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: all 300ms ease;
  font-size: inherit;
  color: white;
`;

const StyledButtonLink = styled(Link)`
  ${StyledButton};
  /* min-height: 38px; */

  &:hover {
    /* border: 1px solid rgba(255, 255, 255, 0.1); */
    transition: all 300ms ease;
  }

  &.orange {
    background: ${Colors.orange};
    box-shadow: 5px 5px 10px #db5a1f, -5px -5px 10px #ff6c25;
  }

  &.blue {
    background: ${Colors.blue};
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 5px 5px 5px #00002c, -5px -5px 5px #000039;
  }

  &.blue:hover {
    box-shadow: 5px 5px 5px #000025, -5px -5px 5px #000043;
  }

  /* &.blue:hover {
    box-shadow: 5px 5px 4px #000025, -5px -5px 4px ##000040;
  } */

  &.gray {
    background: ${Colors.gray};
    color: ${Colors.blue};
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 10px 10px 16px #e7e7e7, -10px -10px 16px #fbfbfb;
  }

  &.gray:hover {
    /* box-shadow: 10px 10px 16px #b2b2b2, -10px -10px 16px #ffffff; */
    box-shadow: 10px 10px 10px #d9d9d9, -10px -10px 10px #fbfbfb;
  }
`;

export const ButtonLink = ({ className, children, to }) => (
  <StyledButtonLink className={className} to={to}>
    {children}
  </StyledButtonLink>
);

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
