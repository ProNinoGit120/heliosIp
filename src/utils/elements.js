import React from "react";
import Size from "./size";
import styled from "styled-components";
import Colors from "./colors";
import { arrow } from "./icons";

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
  padding: 0 32px;
`;

export const Col = ({ children, width }) => (
  <StyledCol width={width}>{children}</StyledCol>
);

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ bg }) => bg};
  padding: 8px 16px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 2px solid transparent;
  transition: all 300ms ease;
  font-size: inherit;
  box-shadow: 5px 5px 10px #cdcdcd, -5px -5px 10px #ffffff;

  &:hover {
    border: 2px solid white;
    transition: all 300ms ease;
  }
`;
const StyledArrow = styled.span`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    fill: white;
    width: 24px;
  }
`;

export const Button = ({ children, withArrow, width, height, bg }) => (
  <StyledButton width={width} height={height} bg={bg}>
    {children}
    {withArrow ? <StyledArrow>{arrow}</StyledArrow> : null}
  </StyledButton>
);
