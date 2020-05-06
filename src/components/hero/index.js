import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Colors from "../../utils/colors";
import { Container, Col, Flex } from "../../utils/elements";
import Card from "../card";
import herobg_src from "../../images/hero-bg.svg";
import {
  StyledForm,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
} from "../forms/elements";

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
`;

const HeroWrapper = styled.div`
  padding: 120px 0;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${herobg_src});
  background-position-y: 40%;
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: cover;

  /* @media (min-width: 1000px) {
    background-position-y: center;
  }

  @media (max-width: 768px) {
    background-position-y: bottom;
  }  */
`;

const HeroTitle = styled.h1``;
const HeroSubTitle = styled.h3``;
const HeroDescription = styled.p`
  margin-bottom: 32px;
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
    <StyledHero>
      <HeroWrapper>
        {/* <HeroBG>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1366 768"
          >
            <title>hero</title>
            <path
              d="M255.11,764.82C375.83,530.22,680.53,363.7,1037.35,363.7c115.66,0,225.84,17.5,326.05,49.14"
              fill="none"
              stroke="#e0e0e0"
            />
            <circle cx="408.98" cy="575.09" r="5.27" fill="#e0e0e0" />
            <path
              d="M0,109.08A1815,1815,0,0,1,274,88.53c522.49,0,962,217.8,1090,513.36"
              fill="none"
              stroke="#e0e0e0"
            />
            <circle cx="508.08" cy="103.81" r="5.27" fill="#e0e0e0" />
          </svg>
        </HeroBG> */}
        <Container>
          <Flex align="center">
            <Col width="45%">
              <HeroTitle>{title}</HeroTitle>

              <HeroDescription>{description}</HeroDescription>
              {link ? <LinkButton to={link}>{linkText}</LinkButton> : null}
            </Col>
            <Col width="55%">
              <Card title="Calculate Your IP Expense" buttonText="Next">
                <StyledForm>
                  <Flex justify="space-around">
                    <StyledInputWrapper padding="0 16px 0 0">
                      <StyledLabel hidden htmlFor="firstName">
                        First Name
                      </StyledLabel>
                      <StyledInput
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper padding="0 0 0 16px">
                      <StyledLabel hidden htmlFor="lastName">
                        Last Name
                      </StyledLabel>
                      <StyledInput
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                      />
                    </StyledInputWrapper>
                  </Flex>
                  <StyledInputWrapper padding="32px 0 0 0">
                    <StyledLabel hidden htmlFor="email">
                      Email
                    </StyledLabel>
                    <StyledInput
                      placeholder="Email Address"
                      name="email"
                      id="email"
                    />
                  </StyledInputWrapper>
                  <StyledInputWrapper padding="32px 0 0 0">
                    <StyledLabel hidden htmlFor="company">
                      Company Name
                    </StyledLabel>
                    <StyledInput
                      placeholder="Company Name"
                      name="company"
                      id="company"
                    />
                  </StyledInputWrapper>
                  <Flex justify="space-around">
                    <StyledInputWrapper padding="32px 16px 0 0">
                      <StyledLabel hidden htmlFor="companyType">
                        Company Type
                      </StyledLabel>
                      <StyledInput
                        placeholder="Company Type"
                        name="companyType"
                        id="companyType"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper padding="32px 0 0 16px">
                      <StyledLabel hidden htmlFor="patentProfile">
                        Patent Profile
                      </StyledLabel>
                      <StyledInput
                        placeholder="Patent Profile"
                        name="patentProfile"
                        id="patentProfile"
                      />
                    </StyledInputWrapper>
                  </Flex>
                </StyledForm>
              </Card>
            </Col>
          </Flex>
        </Container>
      </HeroWrapper>
    </StyledHero>
  );
};
