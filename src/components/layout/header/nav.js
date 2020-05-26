import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";
import { hamburger, hamburgerClose } from "../../../utils/icons";
import { Flex } from "../../../utils/elements";
import Colors from "../../../utils/colors";
import Size from "../../../utils/size";
import useWindowSize from "../useWindowSize";
const StyledNav = styled.nav`
  width: 100%;
  @media(max-width: 991px) {
    position: absolute;
    left: 0;
    right: 0;
    background: #f16322;
    top: 79px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    &.active {
      max-height: 361px;
    }
  }
`;

const GlobalHeaderStyles = createGlobalStyle`
  .navbar-toggler {
    display: none;
    position: absolute;
    right: 32px;
    background: #ff5745;
    border-radius: 0;
    padding: 0;
    width: 36px;
    height: 36px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    @media(max-width: 991px) {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }
  }

  .headerFlexBox {
    @media(max-width: 991px) {
      flex-direction: column !important;  
      align-items: flex-start !important;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media(max-width: 991px) {
    flex-direction: column !important;
    padding: 20px 0;
  }
`;

const NavItem = styled.li`
  font-family: "Roboto", sans-serif;
  border: 1px solid transparent;
  color: white;
  padding: 6px 12px;
  margin-right: 12px;
  margin-left: 12px;
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
    @media(max-width: 991px) {
      justify-content: center;
      margin-top:20px;
    }
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
    @media(max-width: 991px) {
      margin-right: 12px;
    }
  }

`;

const NavLink = styled(Link)`
  display: block;
  @media(max-width: 991px) {
    width: 100%;
  }
`;

export default () => {
  const width = window.innerWidth;
  const breakpoint = 991;
  const windowSize = useWindowSize(); 
  const [toggleNavList, setToggleNavList] = useState(false);
  const navListClass = (windowSize > breakpoint || toggleNavList ) ? 'active' : '';
  return(
    <>
      <GlobalHeaderStyles />
      <button 
        className="navbar-toggler"
        onClick={() => setToggleNavList(!toggleNavList)}
      >
        { !toggleNavList && hamburger }
        { toggleNavList && hamburgerClose }
      </button>

      <StyledNav className={navListClass}>
        <NavList>
          <Flex align="center" className="headerFlexBox">
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
          <Flex align="center" justify="flex-end" className="headerFlexBox">
            <NavLink to="/resources">
              <NavItem>Contact</NavItem>
            </NavLink>
            <NavLink to="/">
              <NavItem className="contact">Get Started</NavItem>
            </NavLink>
          </Flex>
        </NavList>
      </StyledNav> 
    </>
  );
};

