import React, { useState, useEffect } from "react";
import axios from "axios";
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
import useInput from "../../hooks/useInput";
import useSelect from "../../hooks/useSelect";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import encode from "../../utils/dataEncoder";

const HeroCard = styled.div`
  box-shadow: 30px 30px 60px #dedede, -30px -30px 60px #ffffff;
  background: ${Colors.gray};
  /* width: 100%; */
  border-radius: ${Size.radius * 2}px;
  border: 1px solid white;
`;

const CardHeader = styled.div`
  padding: 32px;

  border-bottom: 1px solid ${Colors.border};
`;

const CardFooter = styled.div`
  padding: 0 64px 16px 64px;
`;

const CardTitle = styled.h3`
  text-align: center;
  margin: 0;
`;

const CardBody = styled(TabPanel)`
  padding: 32px 64px 16px 64px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.react-tabs__tab-panel--selected {
    display: flex;
  }
`;

const PricingList = styled.ul``;

const PricingItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

const CardButton = styled.button`

  outline: 0;
  cursor: inherit;
  height: 70px;
  background: ${Colors.blue};
  width: 100%;
  color: rgba(255,255,255,.33);
  border-radius: ${Size.radius}px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    disabled
      ? `  & path {
            fill: rgba(255,255,255,.33);
          }
          cursor: not-allowed;
        `
      : `color: white;
          & path {
            fill: white;
          }
          cursor: pointer;
    `}




  /* &:hover {
    box-shadow: 10px 10px 10px white, -10, -10, 10px ${Colors.text};
  } */

  & svg {
    margin-left: 8px;
    fill: white;
    width: 24px;
  }
`;

const FormNavigation = styled(TabList)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationControl = styled(Tab)`
  cursor: pointer;
  width: 12px;
  height: 12px;
  border: 1px solid transparent;
  background: ${Colors.border};
  border-radius: 50%;
  margin-right: 4px;

  &.react-tabs__tab--selected {
    border: 1px solid ${Colors.border};
    background: white;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [firstName, firstNameInput, clearFirstName] = useInput({
    type: "text",
    placeholder: "First Name",
    id: "firstName",
  });
  const [lastName, lastNameInput, clearLastName] = useInput({
    type: "text",
    placeholder: "Last Name",
    id: "lastName",
  });
  const [organization, organizationInput, clearOrganization] = useInput({
    type: "text",
    placeholder: "Organization",
    id: "organization",
  });
  const [email, emailInput, clearEmail] = useInput({
    type: "email",
    placeholder: "Email Address",
    id: "email",
  });
  const [phone, phoneInput, clearPhone] = useInput({
    type: "number",
    placeholder: "Phone Number",
    id: "phone",
  });
  const [practice, practiceSelect, clearPractice] = useSelect({
    placeholder: "Practice Type",
    options: ["Law Firm", "Corporate"],
    id: "practiceType",
  });
  const [patents, patentsInput, clearPatents] = useInput({
    type: "number",
    placeholder: "Number of Pending Records",
    id: "patentRecords",
  });
  const [team, teamInput, clearTeam] = useInput({
    type: "number",
    placeholder: "Number of Users",
    id: "teamMembers",
  });
  // const [pending, pendingSelect] = useSelect({
  //   placeholder: "Number of Pending Records",
  //   options: ["Law Firm", "Corporate"],

  // });
  const [system, systemSelect, clearSystem] = useSelect({
    placeholder: "Current Docketing System",
    options: [
      "AltLegal",
      "AppColl",
      "Anaqua",
      "CPA Global",
      "CPI",
      "Dennemeyer",
      "IPfolio",
      "Other",
    ],
    id: "system",
  });

  const handleSubmit = e => {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      organization: organization,
      email: email,
      phone: phone,
      practice: practice,
      patents: patents,
      team: team,
      system: system,
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "calculateExpense", formData }),
    })
      .then(() => {
        alert("Success!");
        setTabIndex(0);
      })
      .catch(error => alert(error));

    clearFirstName();
    clearLastName();
    clearOrganization();
    clearEmail();
    clearPhone();
    clearPractice();
    clearPatents();
    clearTeam();
    clearSystem();

    e.preventDefault();
  };

  // useEffect(() => {

  // }, []);

  return (
    <>
      {/* <form name="calculateExpense" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="number" name="phone" />
        <select name="practiceType"></select>
        <input type="number" name="teamMembers" />
        <input type="number" name="patentRecords" />
        <select name="system"></select>
      </form> */}

      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <HeroCard>
          <CardHeader>
            <CardTitle>Calculate Your IP Expense</CardTitle>
          </CardHeader>
          <StyledForm
            onSubmit={e => {
              handleSubmit(e);
            }}
          >
            <CardBody>
              <Flex justify="space-around">
                <StyledInputWrapper padding="0 16px 0 0">
                  <StyledLabel hidden htmlFor="firstName">
                    First Name
                  </StyledLabel>
                  {firstNameInput}
                </StyledInputWrapper>
                <StyledInputWrapper padding="0 0 0 16px">
                  <StyledLabel hidden htmlFor="lastName">
                    Last Name
                  </StyledLabel>
                  {lastNameInput}
                </StyledInputWrapper>
              </Flex>
              <StyledInputWrapper padding="32px 0 0 0">
                <StyledLabel hidden htmlFor="organization">
                  Organization
                </StyledLabel>
                {organizationInput}
              </StyledInputWrapper>
              <StyledInputWrapper padding="32px 0 0 0">
                <StyledLabel hidden htmlFor="email">
                  Email
                </StyledLabel>
                {emailInput}
              </StyledInputWrapper>

              <StyledInputWrapper padding="32px 0 32px 0">
                <StyledLabel hidden htmlFor="phone">
                  Phone
                </StyledLabel>
                {phoneInput}
              </StyledInputWrapper>
              <CardButton
                // disabled={
                //   !firstName || !lastName || !organization || !email || !phone
                // }
                type="button"
                onClick={() => {
                  setTabIndex(1);
                }}
              >
                Next{arrow}
              </CardButton>
            </CardBody>
            <CardBody>
              <StyledInputWrapper padding="0 0 16px 0">
                <StyledLabel hidden htmlFor="practiceType">
                  Practice Type
                </StyledLabel>
                {practiceSelect}
              </StyledInputWrapper>
              <StyledInputWrapper padding="16px 0 0 0">
                <StyledLabel hidden htmlFor="teamMembers">
                  Team Members
                </StyledLabel>
                {teamInput}
              </StyledInputWrapper>

              <StyledInputWrapper padding="32px 0 0 0">
                <StyledLabel hidden htmlFor="patentRecords">
                  Number of Pending Records
                </StyledLabel>
                {patentsInput}
              </StyledInputWrapper>
              <StyledInputWrapper padding="32px 0 32px 0">
                <StyledLabel hidden htmlFor="system">
                  Current Docketing System
                </StyledLabel>
                {systemSelect}
              </StyledInputWrapper>

              <CardButton
                disabled={!practice || !patents || !team || !system}
                type="submit"
              >
                Submit
              </CardButton>
            </CardBody>
          </StyledForm>
          <CardFooter>
            <Flex direction="column" align="center" justify="center">
              <FormNavigation>
                <NavigationControl></NavigationControl>
                <NavigationControl
                  disabled={
                    !firstName || !lastName || !organization || !email || !phone
                  }
                ></NavigationControl>
              </FormNavigation>
            </Flex>
          </CardFooter>
        </HeroCard>
      </Tabs>
    </>
  );
};
