import React from "react";
import Size from "./size";
import styled from "styled-components";
import Colors from "./colors";
export const Icons = {
  checkmark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path d="M30.72 5.824c-.704-.704-1.856-.704-2.56 0l-16.64 16.64-7.744-7.744c-.64-.64-1.856-.64-2.496 0-.704.704-.704 1.856 0 2.56l8.96 8.96c.32.32.768.512 1.216.512.256 0 .832 0 1.344-.512L30.72 8.32c.704-.704.704-1.792 0-2.496z"></path>
    </svg>
  ),
  arrow: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M506.134 241.843l-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z" />
    </svg>
  ),
  sun: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="116"
      height="116"
      viewBox="0 0 116 116"
    >
      <title>helios sun-colored</title>
      <g>
        <path
          d="M20.9 69.2C19 64.1 18 58.7 18 53.2 18 29.5 36 10.2 58.1 10.2 80.3 10.2 98.3 29.5 98.3 53.2 98.3 58.7 97.3 64.1 95.4 69.2L106 69.2C107.5 64 108.3 58.6 108.3 53.2 108.3 23.9 85.8 0 58.1 0 30.5 0 8 23.9 8 53.2 8 58.6 8.8 64 10.3 69.2L20.9 69.2Z"
          fill="#fff"
        ></path>
        <path
          d="M110.3 85.4L6 85.4C4.1 85.6 2.3 84.6 1.4 83 0.4 81.3 0.4 79.3 1.4 77.7 2.3 76 4.1 75.1 6 75.2L110.3 75.2C112.2 75.1 113.9 76 114.9 77.7 115.9 79.3 115.9 81.3 114.9 83 113.9 84.6 112.2 85.6 110.3 85.4Z"
          fill="#fff"
        ></path>
        <path
          d="M89.6 90.1L26.7 90.1C24.9 89.9 23.1 90.9 22.1 92.5 21.1 94.2 21.1 96.2 22.1 97.9 23.1 99.5 24.9 100.4 26.7 100.3L89.6 100.3C91.4 100.4 93.2 99.5 94.2 97.9 95.1 96.2 95.1 94.2 94.2 92.5 93.2 90.9 91.4 89.9 89.6 90.1"
          fill="#fff"
        ></path>
        <path
          d="M69.1 104.9L47.1 104.9C45.3 104.8 43.5 105.7 42.5 107.4 41.5 109 41.5 111.1 42.5 112.7 43.5 114.3 45.3 115.3 47.1 115.2L69.1 115.2C71.8 115 73.8 112.7 73.8 110 73.8 107.3 71.8 105.1 69.1 104.9"
          fill="#fff"
        ></path>
      </g>
    </svg>
  ),
};

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
    {withArrow ? <StyledArrow>{Icons.arrow}</StyledArrow> : null}
  </StyledButton>
);
