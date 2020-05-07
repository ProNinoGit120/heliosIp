import React from "react";
import Size from "../../utils/size";
import { arrow } from "../../utils/icons";
import styled from "styled-components";
import Colors from "../../utils/colors";
import {
  Container,
  Col,
  Flex,
  ButtonLink,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from "../../utils/elements";

const HeroCard = styled.div`
  box-shadow: 30px 30px 60px #dedede, -30px -30px 60px #ffffff;
  background: ${Colors.gray};
  /* width: 100%; */
  border-radius: ${Size.radius}px;
  border: 1px solid white;
`;

const CardHeader = styled.div`
  padding: 32px;

  border-bottom: 1px solid ${Colors.border};
`;

const CardFooter = styled.div`
  padding: 0 64px 32px 64px;
`;

const CardTitle = styled.h3`
  text-align: center;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PricingList = styled.ul``;

const PricingItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

const CardButton = styled.button`
  border: 3px solid white;
  outline: 0;
  cursor: pointer;
  height: 70px;
  background: ${Colors.blue};
  width: 100%;
  border-radius: ${Size.radius}px;
  color: white;
  border-radius: ${Size.radius}px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* &:hover {
    box-shadow: 10px 10px 10px white, -10, -10, 10px ${Colors.text};
  } */

  & svg {
    margin-left: 8px;
    fill: white;
    width: 24px;
  }
`;

const FormNavigation = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationControl = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  border: 1px solid transparent;
  background: ${Colors.border};
  border-radius: 50%;
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    border: 1px solid ${Colors.border};
    background: white;
  }
`;

export default () => {
  return (
    <HeroCard>
      <CardHeader>
        <CardTitle>Calculate Your IP Expense</CardTitle>
      </CardHeader>
      <CardBody>
        {" "}
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
            <StyledInput placeholder="Email Address" name="email" id="email" />
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
      </CardBody>
      <CardFooter>
        <Flex direction="column" align="center" justify="center">
          <CardButton>Next{arrow}</CardButton>
          <FormNavigation>
            <NavigationControl className="active"></NavigationControl>
            <NavigationControl></NavigationControl>
          </FormNavigation>
        </Flex>
      </CardFooter>
    </HeroCard>
  );
};
