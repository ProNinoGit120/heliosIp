import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Modal from "react-modal";
import { Link } from "gatsby";
import { hamburger, hamburgerClose } from "../../../utils/icons";
import { Flex, Container } from "../../../utils/elements";
import Colors from "../../../utils/colors";
import Size from "../../../utils/size";
import useWindowSize from "../useWindowSize";
import ContactModal from "../../cards/contactModal";

const customStyles = {
  overlay: {
    zIndex: "51",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    width: "32%",
    padding: "0px",
    border: "0px",
    marginRight: "-50%",
    maxHeight: "95%",
    // transform: "translate(-50%, -50%)",
  },
};

const StyledNav = styled.nav`
  width: 100%;
  @media (max-width: 991px) {
    border-top: 1px solid rgba(255, 255, 255, 0.33);
    position: absolute;
    left: 0;
    right: 0;
    background: #f16322;
    top: 79px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease;
    &.active {
      max-height: 361px;
    }
  }
`;

const StyledHamburger = styled.button`
  display: none;
  position: absolute;
  right: 32px;
  background: ${Colors.orange};
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 6px;
  outline: 0;
  padding: 0;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    display: flex;
  }
`;

const GlobalHeaderStyles = createGlobalStyle`
  /* .navbar-toggler {
    display: none;
    position: absolute;
    right: 32px;
    background: ${Colors.orange};
    border-radius: 0;
    padding: 0;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    @media(max-width: 991px) {
      display: flex;
    }
  } */

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
  @media (max-width: 991px) {
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
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export default ({page}) => {
  const breakpoint = 991;
  const windowSize = typeof window !== "undefined" ? useWindowSize() : 1000;

  const [toggleNavList, setToggleNavList] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [navPos, setNavPos] = useState(0);

  const navListClass = windowSize > breakpoint || toggleNavList ? "active" : "";

  const onPress = (pos) => {
    setNavPos(pos);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <GlobalHeaderStyles />
      <StyledHamburger
        className="navbar-toggler"
        onClick={() => setToggleNavList(!toggleNavList)}
      >
        {!toggleNavList && hamburger}
        {toggleNavList && hamburgerClose}
      </StyledHamburger>

      <StyledNav className={navListClass}>
        <NavList>
          <Flex align="center" className="headerFlexBox">
            <NavLink to="/why">
              <NavItem
                className={page === "why" ? "contact" : ""}
                onClick={() => onPress(1)}
              >
                Why Helios
              </NavItem>
            </NavLink>
            <NavLink onClick={() => onPress(2)} to="/platform">
              <NavItem className={page === "platform" ? "contact" : ""}>
                Platform
              </NavItem>
            </NavLink>
            <NavLink onClick={() => onPress(3)} to="/services">
              <NavItem className={page === "services" ? "contact" : ""}>
                Services
              </NavItem>
            </NavLink>

            <NavLink onClick={() => onPress(4)} to="/pricing">
              <NavItem className={page === "pricing" ? "contact" : ""}>
                Pricing
              </NavItem>
            </NavLink>
            <NavLink onClick={() => onPress(5)} to="/resources">
              <NavItem className={page === "resources" ? "contact" : ""}>
                Resources
              </NavItem>
            </NavLink>
          </Flex>
          <Flex align="center" justify="flex-end" className="headerFlexBox">
            <NavLink to={`/${page}`}>
              <NavItem
                onClick={() => {
                  openModal();
                }}
              >
                Contact
              </NavItem>
            </NavLink>
            <NavLink to="/">
              <NavItem className="contact">Get Started</NavItem>
            </NavLink>
          </Flex>
        </NavList>
      </StyledNav>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
        >
          <Container>
            {/* <Flex align="center" className="heroBlock_flex"> */}
            {/* <Col width="55%" className="rightBlock_Hero"> */}
            <ContactModal />
            {/* </Col> */}
            {/* </Flex> */}
          </Container>
        </Modal>
      </div>
    </>
  );
};
