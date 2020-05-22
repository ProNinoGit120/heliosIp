import React from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import Colors from "../../utils/colors";
import { Container, Col, Flex, ButtonLink } from "../../utils/elements";
import CalculateExpense from "../cards/calculateExpense";
// import herobg_src from "../../images/hero-bg.svg";

  const GlobalStylesHero = createGlobalStyle`
    .heroWrapper {
      @media(max-width: 480px) { 
        padding: 40px 0 !important;
      }
    }
    .heroBlock_flex {
      @media(max-width: 767px) { 
        flex-direction: column !important;
      }
    }
    .leftBlock_Hero {
      @media(max-width: 767px) { 
        width: 100%;
        margin: 0 0 20px;
        padding:0px 25px;
        text-align:center;
      }
    }
    .rightBlock_Hero {
      @media(max-width: 767px) { 
        width: 100%;
        padding:20px;
      }
    }
  `;

const StyledHero = styled.section`
  height: 100%;
  background: ${Colors.gray};
  border-bottom: 1px solid white;
  width: 100%;
`;

const HeroBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const HeroWrapper = styled.div`
  padding: 120px 0;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const HeroTitle = styled.h1`
@media(max-width:767px){
  font-size:32px;
}
`;
const HeroSubTitle = styled.h3``;
const HeroDescription = styled.p`
  margin-bottom: 32px;
  font-size:18px;
`;

const LinkButton = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 6px;
  color: ${Colors.blue};
  background: ${Colors.gray};
  box-shadow: 5px 5px 10px #cdcdcd, -5px -5px 10px #ffffff;
  border: 2px solid transparent;
  transition: all 300ms ease;
  font-size: inherit;
  &:hover {
    border: 2px solid white;
    transition: all 300ms ease;
  }
`;

const ItemIcon = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
  }
`;

export default ({ bgImg, title, subtitle, description, link, linkText }) => {
  return (
    <>
      <GlobalStylesHero />
      <StyledHero>
        <HeroWrapper className="heroWrapper">
          <Container>
            <Flex align="center" className="heroBlock_flex">
              <Col width="45%" className="leftBlock_Hero">
                <HeroTitle> At Last— A Real​
                <br />
                IP Operations​ SaaS Solution​{title}</HeroTitle>

                <HeroDescription>{description}</HeroDescription>
                <ButtonLink to="/" className="gray">
                  Learn More
                </ButtonLink>
              </Col>
              <Col width="55%" className="rightBlock_Hero">
                <CalculateExpense />
              </Col>
            </Flex>
          </Container>
        </HeroWrapper>
      </StyledHero>
    </>
  );
};
