import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Colors from "../../utils/colors";
import { Container, Flex } from "../../utils/elements";
import logo_src from "../../images/logo.svg";
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
`;

const HeaderInner = styled.div`
  padding: 0 32px;
`;

const HeaderLogo = styled.img`
  display: block;
  margin: 0;
  width: 150px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <Flex align="center" justify="space-between">
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
