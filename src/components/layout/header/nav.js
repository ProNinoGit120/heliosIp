import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Colors from "../../../utils/colors";
import Size from "../../../utils/size";
const StyledNav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  font-family: "Roboto";
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
    border: 1px solid rgba(255,255,255,.2);
  }

  &:hover {
    border: 1px solid rgba(255,255,255,.2);
    /* box-shadow: 2px 2px 10px #ee7d49, 
             -2px -2px 10px #ff8d53; */
    transition: all 300ms ease;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  width: 100%;
  display: block;
`;

export default () => (
  <StyledNav>
    <NavList>
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
      <NavLink to="/">
        <NavItem>Resources</NavItem>
      </NavLink>
      <NavLink to="/">
        <NavItem className="contact">Contact</NavItem>
      </NavLink>
    </NavList>
  </StyledNav>
);
