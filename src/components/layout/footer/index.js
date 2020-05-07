import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Colors from "../../../utils/colors";
import { twitter, linkedin } from "../../../utils/icons";
import { Container, Flex, Col } from "../../../utils/elements";
import logo_src from "../../../images/logo.svg";

const StyledFooter = styled.footer`
  background: ${Colors.orange_gradient};
  padding: 164px 0;
`;

const FooterLogo = styled.img`
  margin-bottom: 0;
  margin-top: -20px;
`;

const FooterListTitle = styled.h3`
  color: white;
`;

const FooterList = styled.ul``;

const FooterListItem = styled.li`
  padding-bottom: 6px;
  color: white;
`;

const StyledLink = styled(Link)`
  font-family: "Roboto", sans-serif;
  color: white;
`;

const SocialItem = styled(Link)`
  display: inline-block;
  margin-right: 16px;
`;

const Footer = () => {
  const getDate = () => {
    const d = new Date();
    const y = d.getFullYear();
    return y;
  };

  return (
    <StyledFooter>
      <Container>
        <Flex>
          <Col width="20%">
            <FooterList>
              <FooterLogo src={logo_src} />

              <FooterListItem>© {getDate()} IPM Solutions</FooterListItem>
              {/* <FooterListItem>
                Built by{" "}
                <StyledLink style={{ textDecoration: "underline" }}>
                  Isophex
                </StyledLink>
              </FooterListItem> */}
              <FooterListItem>
                <Flex>
                  <SocialItem>{twitter}</SocialItem>
                  <SocialItem>{linkedin}</SocialItem>
                </Flex>
              </FooterListItem>
            </FooterList>
          </Col>
          <Col width="20%">
            <FooterListTitle>Platform</FooterListTitle>
            <FooterList>
              <FooterListItem>
                <StyledLink>Why Helios</StyledLink>
              </FooterListItem>
              <FooterListItem>
                <StyledLink>HeliosComplete™</StyledLink>
              </FooterListItem>
              <FooterListItem>
                <StyledLink>Docketing Module</StyledLink>
              </FooterListItem>
            </FooterList>
          </Col>
          <Col width="20%">
            <FooterListTitle>Services</FooterListTitle>
            <FooterList>
              <FooterListItem>
                <StyledLink>Support & Operations</StyledLink>
              </FooterListItem>
              <FooterListItem>
                <StyledLink>IP Legal Services</StyledLink>
              </FooterListItem>
              <FooterListItem>
                <StyledLink>Consulting</StyledLink>
              </FooterListItem>
            </FooterList>
          </Col>
          <Col width="20%">
            <FooterListTitle>Resources</FooterListTitle>
            <FooterList>
              <FooterListItem>
                <StyledLink>About</StyledLink>
              </FooterListItem>
              <FooterListItem>
                <StyledLink>Pricing</StyledLink>
              </FooterListItem>
              <FooterListItem>
                <StyledLink>HIP Directory</StyledLink>
              </FooterListItem>
              <FooterListItem>
                <StyledLink>Privacy</StyledLink>
              </FooterListItem>
            </FooterList>
          </Col>
          <Col width="20%">
            <FooterListTitle>Get Started</FooterListTitle>
            <FooterList>
              <FooterListItem>
                <StyledLink>Sign up</StyledLink>
              </FooterListItem>
              <FooterListItem>
                <StyledLink>Talk to advisor</StyledLink>
              </FooterListItem>
            </FooterList>
          </Col>
        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
