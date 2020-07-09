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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  const [
    department,
    setDepartment
  ] = useState("");

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

    console.log('----------', formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(res => {
        setFormSuccess(true);
        setTabIndex(0);
      })
      .catch(error => {
        setFormError(true);
        setTabIndex(0);
      });

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
        <form
          name="contact"
          method="post"
          onSubmit={e => {
            handleSubmit(e);
          }}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div justify="space-around">
            <div padding="0 16px 0 0">
              <label htmlFor="firstName">
                <input
                  type="text"
                  name="firstName"
                  onChange={e => {
                    setFirstName(e.target.value);
                  }}
                />
              </label>
            </div>
            <div padding="0 0 0 16px">
              <label htmlFor="lastName">
                <input
                  type="text"
                  name="setLastName"
                  onChange={e => {
                    setLastName(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>
          <div padding="16px 0 0 0">
            <label htmlFor="organization">
              <input
                type="text"
                name="organization"
                onChange={e => {
                  setOrganization(e.target.value);
                }}
              />
            </label>
          </div>
          <div padding="16px 0 0 0">
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </div>

          <div padding="16px 0 0 0">
            <label htmlFor="phone">
              <PhoneInput
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
            </label>
          </div>
          <div padding="16px 0 0 0">
            <label htmlFor="department">
              <select
                name="department"
                id="department"
                onChange={e => {
                  setDepartment(e.target.value);
                }}
              >
                <option value="Sales">Sales</option>
                <option value="Accounts">Accounts</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Trademarks Team">Trademarks Team</option>
              </select>
            </label>
          </div>

          <div padding="16px 0 16px 0">
            <label htmlFor="message">
              <textarea
                name="message"
                onChange={e => {
                  setMessage(e.target.value);
                }}
              />
            </label>
          </div>

          <button type="submit">Send</button>
        </form>
      </HeroCard>
    </Tabs>
  );
};
