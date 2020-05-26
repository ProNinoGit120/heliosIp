import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Colors from "../../../utils/colors";
import { Container, Flex } from "../../../utils/elements";
import logo_src from "../../../images/logo.svg";
import Nav from "./nav";

const StyledHeader = styled.header`
  z-index: 50;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background: ${Colors.orange_gradient};
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  height: 80px;
`;

const HeaderInner = styled.div`
  padding: 0 32px;
`;

const HeaderLogo = styled.img`
  margin: -4px 116px 0 0;
  width: 150px;
  vertical-align: middle;
  @media(max-width:1023.93px){
    width:95px; 
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container maxWidth={1440}>
        <HeaderInner>
          <Flex align="center" justify="flex-start">
            <Link to="/">
              <HeaderLogo src={logo_src} alt="Helios Logo" />
            </Link>
            <Nav />
          </Flex>
        </HeaderInner>
      </Container>
    </StyledHeader>
  );
};

export default Header;
