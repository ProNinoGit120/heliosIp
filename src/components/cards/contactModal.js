import React, { useState, useEffect } from "react";
import axios from "axios";
import Size from "../../utils/size";
import { arrow, checkmark, close } from "../../utils/icons";
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
import useTextArea from "../../hooks/useTextArea";
import useSelect from "../../hooks/useSelect";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import encode from "../../utils/dataEncoder";
import PhoneInput from "react-phone-number-input/input";
import { isPossiblePhoneNumber } from "react-phone-number-input";

const HeroCard = styled.div`
  box-shadow: 30px 30px 60px #dedede, -30px -30px 60px #ffffff;
  background: ${Colors.gray};
  /* width: 100%; */
  border-radius: ${Size.radius * 2}px;
  border: 1px solid white;
  position: relative;
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
  @media (max-width: 767px) {
    padding: 20px 10px;
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

const SuccessIcon = styled.div`
  border-radius: 50%;
  position: absolute;
  top: -24px;
  left: -24px;
  width: 48px;
  height: 48px;
  background: ${Colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;

  & path {
    stroke: white;
  }
`;

const ErrorIcon = styled.div`
  border-radius: 50%;
  position: absolute;
  top: -24px;
  left: -24px;
  width: 48px;
  height: 48px;
  background: ${Colors.orange_sun};
  display: flex;
  align-items: center;
  justify-content: center;

  & path {
    fill: white;
  }
`;

const StyledPhoneInput = styled(PhoneInput)`
  display: flex;
  border-radius: ${Size.radius}px;
  width: 100%;
  outline: 0;
  height: 48px;
  border: 1px solid;
  border-color: ${({ hasError }) =>
    hasError ? `${Colors.orange}` : `${Colors.border}`};
  padding: 0 16px;
  &:focus {
    border-color: ${({ hasError }) =>
      hasError ? `${Colors.orange}` : `${Colors.text}`};
  }
`;

export default () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [firstName, firstNameInput, clearFirstName, firstNameError] = useInput({
    type: "text",
    placeholder: "First Name",
    id: "firstName",
  });
  const [lastName, lastNameInput, clearLastName, lastNameError] = useInput({
    type: "text",
    placeholder: "Last Name",
    id: "lastName",
  });
  const [
    organization,
    organizationInput,
    clearOrganization,
    orgError,
  ] = useInput({
    type: "text",
    placeholder: "Organization",
    id: "organization",
  });
  const [email, emailInput, clearEmail, emailError] = useInput({
    type: "email",
    placeholder: "Email Address",
    id: "email",
  });
  const [message, messageInput, clearMessage, messageError] = useTextArea({
    placeholder: "Message",
    id: "message",
  });
  // const [phone, phoneInput, clearPhone, phoneError] = useInput({
  //   type: "tel",
  //   placeholder: "Phone Number",
  //   id: "phone",
  // });
  const [practice, practiceSelect, clearPractice, practiceError] = useSelect({
    placeholder: "Practice Type",
    options: ["Law Firm", "Corporate"],
    id: "practice",
  });
  const [patents, patentsInput, clearPatents, patentError] = useInput({
    type: "number",
    placeholder: "Number of Pending Records",
    id: "patents",
  });
  const [team, teamInput, clearTeam, teamError] = useInput({
    type: "number",
    placeholder: "Number of Users",
    id: "team",
  });

  const [
    department,
    departmentSelect,
    clearDepartment,
    departmentError,
  ] = useSelect({
    placeholder: "Current Docketing System",
    options: [
      "Client Support",
      "Sales",
      "Accounts",
      "Human Resources",
      "Patents Team",
      "Trademarks Team",
      "Management Team",
    ],
    id: "department",
  });

  const { honeypot, honeypotInput } = useInput({
    placeholder: "First Name",
    type: "text",
    id: "bot-field",
  });

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      organization: organization,
      email: email,
      phone: phoneValue,
      department: department,
      message: message,
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(res => {
        console.log('------', res);
        setFormSuccess(true);
        setTabIndex(0);
      })
      .catch(error => {
        setFormError(true);
        setTabIndex(0);
      });

    clearFirstName();
    clearLastName();
    clearOrganization();
    clearEmail();
    setPhoneValue("");
    clearMessage();
    clearDepartment();
  };

  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  // useEffect(() => {
  //   if (phoneError) {
  //     validatePhoneNumber();
  //   }
  // }, [phoneValue]);

  // const validatePhoneNumber = () => {
  //   if () {
  //     setPhoneError(true);
  //   } else {
  //     setPhoneError(false);
  //   }
  // };

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={index => setTabIndex(index)}
      forceRenderTabPanel={true}
    >
      <HeroCard>
        {formSuccess ? (
          <SuccessIcon>{checkmark}</SuccessIcon>
        ) : formError ? (
          <ErrorIcon>{close}</ErrorIcon>
        ) : null}

        <CardHeader>
          <CardTitle>
            {formSuccess ? (
              <>
                Thank You! <br /> We'll Be in Touch with You Shortly
              </>
            ) : formError ? (
              `Something Happened, Try Again`
            ) : (
              `Contact Us`
            )}
          </CardTitle>
        </CardHeader>
        <StyledForm
          name="contact"
          method="post"
          onSubmit={e => {
            handleSubmit(e);
          }}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <CardBody>
            <Flex justify="space-around">
              <StyledInputWrapper padding="0 16px 0 0">
                <StyledLabel htmlFor="firstName" hasError={firstNameError}>
                  {firstNameInput}
                </StyledLabel>
              </StyledInputWrapper>
              <StyledInputWrapper padding="0 0 0 16px">
                <StyledLabel htmlFor="lastName" hasError={lastNameError}>
                  {lastNameInput}
                </StyledLabel>
              </StyledInputWrapper>
            </Flex>
            <StyledInputWrapper padding="16px 0 0 0">
              <StyledLabel htmlFor="organization" hasError={orgError}>
                {organizationInput}
              </StyledLabel>
            </StyledInputWrapper>
            <StyledInputWrapper padding="16px 0 0 0">
              <StyledLabel htmlFor="email" hasError={emailError}>
                {emailInput}
              </StyledLabel>
            </StyledInputWrapper>

            <StyledInputWrapper padding="16px 0 0 0">
              <StyledLabel htmlFor="phone" hasError={phoneError}>
                <StyledPhoneInput
                  name="phone"
                  id="phone"
                  value={phoneValue}
                  onChange={e => {
                    setPhoneValue(e);
                    setPhoneError(!isPossiblePhoneNumber(e));
                    return e;
                  }}
                  onBlur={() =>
                    setPhoneError(!isPossiblePhoneNumber(phoneValue))
                  }
                  placeholder="Phone"
                  hasError={phoneError}
                />
              </StyledLabel>
            </StyledInputWrapper>
            <StyledInputWrapper padding="16px 0 0 0">
              <StyledLabel htmlFor="department" hasError={departmentError}>
                {departmentSelect}
              </StyledLabel>
            </StyledInputWrapper>

            <StyledInputWrapper padding="16px 0 16px 0">
              <StyledLabel htmlFor="message" hasError={messageError}>
                {messageInput}
              </StyledLabel>
            </StyledInputWrapper>

            <CardButton
              disabled={
                !firstName ||
                firstNameError ||
                !lastName ||
                lastNameError ||
                !organization ||
                orgError ||
                !email ||
                emailError ||
                !phoneValue ||
                phoneError ||
                !department ||
                departmentError ||
                !message ||
                messageError
              }
              type="submit"
            >
              Send
            </CardButton>
          </CardBody>
        </StyledForm>
      </HeroCard>
    </Tabs>
  );
};
