import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import Colors from "../../utils/colors";
import {
  Container,
  Flex,
  Col,
  ButtonLink,
  TitleLarge,
  TitleSmall,
} from "../../utils/elements";
import women_src from "../../images/ready-women.png";

const StyledReady = styled.section`
  /* padding-bottom: 0; */
`;

const ReadyInner = styled.div`
  padding-top: 32px;
  @media (max-width: 991px) {
    padding-top: 0px !important;
  }
`;

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

const StyledLink = styled.a`
  ${StyledButton};

  &.blue:hover {
    box-shadow: 5px 5px 5px #000025, -5px -5px 5px #000043;
  }

  &.blue {
    background: ${Colors.blue};
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 5px 5px 5px #00002c, -5px -5px 5px #000039;
  }
`;

// const ReadyItemWrapper = styled.div``;

const ReadyItem = styled.div`
  background: ${({ bg }) => bg};
  padding: 106px;
  position: relative;
  margin-bottom: 120px;

  @media (max-width: 991px) {
    margin-bottom: 0;
    padding: 60px !important;
    max-height: 254px !important;
  }
  &.left {
    display: flex;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    max-height: 350px;
    padding: 127px !important;
    @media (max-width: 768px) {
      padding: 60px !important;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: contain;
      padding-top: 36px;
    }

    @media (max-width: 1440px) {
      border-radius: 0px;
    }
  }

  &.right {
    max-height: 350px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    color: white;
    text-align: center;
    padding: 106px;
    @media (max-width: 1440px) {
      border-radius: 0px;
    }

    @media (max-width: 767px) {
      padding: 50px !important;
    }
  }
`;

const ReadyItemImg = styled.img`
  display: block;
`;

const ReadyItemText = styled.div`
  position: relative;
  z-index: 2;
`;

const ReadyItemDesc = styled.p`
  padding-bottom: 16px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

const GlobalStylReady = createGlobalStyle`
  .flex_ready{
    @media(max-width:767px){
      width:100% !important;
      flex-direction:column !important;
    }
  }
  .leftBlock_ready{
    @media(max-width:767px){
      width:100% !important;
    }
  }
  .leftText{
    padding-left:139px;
    @media(max-width:768px){
      margin-top:40px;
      margin-left:150px !important;
      text-align:center;
      line-height:22px;
    }
    ${"" /* @media(max-width:991px){
      margin-left:150px;
    } */}
  }
  .rightBlock_ready{
    @media(max-width:767px){
      width:100% !important;
    }
  }
  .titleLarge_ready{
    @media(max-width:767px){
      font-size:32px !important;
    }
  }

`;

const Ready = ({ title, person = women_src, width }) => {
  return (
    <>
      <GlobalStylReady />
      <StyledReady>
        <Container maxWidth={1440} className="container_ready">
          <TitleLarge align="center" className="titleLarge_ready">
            {title}
          </TitleLarge>
          <ReadyInner>
            <Flex align="center" justify="space-between" className="flex_ready">
              <Col width="50%" noP className="leftBlock_ready">
                <ReadyItem bg={Colors.gray} className="left ">
                  <Flex align="center" justify="flex-end">
                    <ReadyItemImg width={width} src={person} />
                    <ReadyItemText className="leftText">
                      <ReadyItemDesc>
                        Ask us anything, or schedule a call.
                      </ReadyItemDesc>
                      <ButtonLink className="gray" to="/">
                        Lets talk
                      </ButtonLink>
                    </ReadyItemText>
                  </Flex>
                </ReadyItem>
              </Col>
              <Col Col width="50%" noP className="rightBlock_ready">
                <ReadyItem bg={Colors.blue} className="right ">
                  <Flex justify="center">
                    <ReadyItemText>
                      <TitleSmall color="white">Interactive Demo</TitleSmall>
                      <ReadyItemDesc>
                        Schedule a demo of the platform.
                      </ReadyItemDesc>
                      <StyledLink
                        className="blue"
                        href="https://calendly.com/helioscomplete-demo"
                        target="_blank"
                      >
                        Sign up
                      </StyledLink>
                    </ReadyItemText>
                  </Flex>
                </ReadyItem>
              </Col>
            </Flex>
          </ReadyInner>
        </Container>
      </StyledReady>
    </>
  );
};

export default Ready;