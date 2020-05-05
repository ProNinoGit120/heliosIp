import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Colors from "../../utils/colors";
import Size from "../../utils/size";
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
  &:hover {
    border: 1px solid rgba(255,255,255,.2);
    /* box-shadow: 2px 2px 10px #ee7d49, 
             -2px -2px 10px #ff8d53; */
    transition: all 300ms ease;
  }
`;

const NavLink = styled(Link)`
  width: 100%;
  display: block;
`;

// const NavButton = styled(Link)`
//   display: block;
//   padding: 6px 12px;
//   border-radius: 6px;
//   border: 0;
//   color: white;
//   background: ${Colors.orange};
//   box-shadow: none;
//   font-family: "Roboto";
//   transition: all 300ms ease;
//   &:hover {
//     box-shadow: 4px 4px 7px #de5b1f, -4px -4px 7px #ff6b25;

//     transition: all 300ms ease;
//   }
// `;

export default () => (
  <StyledNav>
    <NavList>
      <NavLink to="/">
        <NavItem>Why Helios</NavItem>
      </NavLink>
      <NavLink to="/">
        <NavItem>Platform</NavItem>
      </NavLink>
      <NavLink to="/">
        <NavItem>Services</NavItem>
      </NavLink>

      <NavLink to="/">
        <NavItem>Pricing</NavItem>
      </NavLink>
      <NavLink to="/">
        <NavItem>Resources</NavItem>
      </NavLink>

      <NavLink to="/">
        <NavItem>Contact</NavItem>
      </NavLink>
    </NavList>
  </StyledNav>
);
