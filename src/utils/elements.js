import React from "react";
import { Link } from "gatsby";
import Size from "./size";
import styled, { css } from "styled-components";
import Colors from "./colors";
import { sun, play } from "./icons";

const StyledContainer = styled.div`
  max-width: ${({ maxWidth }) =>
    maxWidth ? `${maxWidth}px` : `${Size.max}px`};
  width: 100%;
  margin: 0 auto;
`;

export const Container = ({ children, maxWidth }) => (
  <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>
);

export const Flex = ({ children, align, justify, direction, responsive, className }) => (
  <div
    className={className}
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

export const TitleXLarge = styled.h1`
  font-size: 72px;
  margin-bottom: 0;
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  margin-bottom: ${({ mb }) => mb}px;
`;

export const TitleLarge = styled.h1`
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  margin-bottom: ${({ mb }) => mb}px;
   @media(max-width:767px){
      margin-bottom:32px;
    }
`;

export const TitleMedium = styled.h2`
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;

export const TitleSmall = styled.h3`
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  margin-bottom: ${({ mb }) => mb}px;
`;

export const TextBody = styled.p`
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  margin-left: ${({ ml }) => ml}px;
  margin-bottom: ${({ mb }) => mb}px;
`;

export const StyledSection = styled.section`
  padding: 120px 0;
`;

const StyledCol = styled.div`
  width: ${({ width }) => width};
  padding: ${({ noP }) => (noP ? `0` : `0 32px`)};

  &.flex {
    display: flex;
  }
  ${'' /* @media(max-width:480px){
    width: 100%;
  } */}
`;

export const Col = ({ children, width, noP, className }) => (
  <StyledCol noP={noP} width={width} className={className}>
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

  &.white {
    background: white;
    color: ${Colors.blue};
    border: 1px solid rgba(0, 0, 00, 0.03);
    box-shadow: 5px 5px 19px #f2f2f2, -5px -5px 19px #ffffff;
  }

  &.white:hover {
    box-shadow: 5px 5px 19px #e0e0e0, -5px -5px 19px #ffffff;
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
  @media(max-width:767px){
     padding: ${({ padding }) => padding};

  }
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
export const StyledSelect = styled.select`
  border-radius: ${Size.radius}px;
  width: 100%;
  outline: 0;
  height: 48px;
  border: 1px solid ${Colors.border};
  text-indent: 8px;
  background: white;
  color: ${({ selected }) =>
    selected ? `${Colors.title}` : `rgba(0, 0, 0, 0.44)`};

  &:focus {
    border-color: ${Colors.blue};
  }
`;
export const StyledTextArea = styled.textarea``;
export const StyledFormButton = styled.button``;

export const Sun = styled(sun)`
  & path {
    fill: ${({ color }) => color};
  }
`;

const PlayIcon = styled.div`
  svg {
    width: 100%;
    fill: ${({ color }) => color};
  @media(max-width:480px){
    width:35px !important; 
  }
  }
`;

const VideoCTA = styled.p`
  font-family: "Montserrat", sans-serif;
  color: ${({ color }) => color};
  display: block;
  margin-left: 8px;
`;

export const WatchVideo = ({ color }) => (
  <Flex justify="center">
    <PlayIcon color={color}>{play}</PlayIcon>
    <VideoCTA
      color={color}
      // onClick={() => {
      //   setPlaying(true);
      // }}
    >
      Watch Video
    </VideoCTA>
  </Flex>
);
