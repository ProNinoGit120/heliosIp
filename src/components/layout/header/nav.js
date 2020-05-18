import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Flex } from "../../../utils/elements";
import Colors from "../../../utils/colors";
import Size from "../../../utils/size";
const StyledNav = styled.nav`
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const NavItem = styled.li`
  font-family: "Roboto", sans-serif;
  border: 1px solid transparent;
  color: white;
  padding: 6px 12px;
  margin-right: 12px;
  border-radius: ${Size.radius}px;
  display: flex;
  /* background: ${Colors.orange}; */
  box-shadow: 1px 1px 1px transparent, -1px -1px 1px transparent;
  white-space: nowrap;
  transition: all 300ms ease;

  &.contact {
    margin-left: 12px;
    color: white;
    background: #f56f31;
    box-shadow:  5px 5px 16px #eb6b2f, 
             -5px -5px 16px #ff7333;;
    /* box-shadow: 5px 5px 10px #db5a1f, -5px -5px 10px #ff6c25; */
    border: 1px solid rgba(255,255,255,.22);
  
  }

  &.contact:hover {
    box-shadow: 5px 5px 10px #dd642c, 
             -5px -5px 10px #ff7a36;
  }



  &:hover {
    border: 1px solid rgba(255,255,255,.22);
    /* box-shadow: 2px 2px 10px #ee7d49, 
             -2px -2px 10px #ff8d53; */
    transition: all 300ms ease;
  }

  &:last-child {
    margin-right: 0;
  }

`;

const NavLink = styled(Link)`
  display: block;
`;

export default () => (
  <StyledNav>
    <NavList>
      <Flex align="center">
        <NavLink to="/why">
          <NavItem>Why Helios</NavItem>
        </NavLink>
        <NavLink to="/platform">
          <NavItem>Platform</NavItem>
        </NavLink>
        <NavLink to="/services">
          <NavItem>Services</NavItem>
        </NavLink>

        <NavLink to="/pricing">
          <NavItem>Pricing</NavItem>
        </NavLink>
        <NavLink to="/resources">
          <NavItem>Resources</NavItem>
        </NavLink>
      </Flex>
      <Flex align="center" justify="flex-end">
        <NavLink to="/resources">
          <NavItem>Contact</NavItem>
        </NavLink>
        <NavLink to="/">
          <NavItem className="contact">Get Started</NavItem>
        </NavLink>
      </Flex>
    </NavList>
  </StyledNav>
);
