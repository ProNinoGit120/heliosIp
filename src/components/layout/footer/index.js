import React, { useState } from "react";
import { Link } from "gatsby";
import Modal from "react-modal";
import styled, { createGlobalStyle } from "styled-components";
import Colors from "../../../utils/colors";
import { twitter, linkedin } from "../../../utils/icons";
import { Container, Flex, Col } from "../../../utils/elements";
import logo_src from "../../../images/logo.svg";

const StyledFooter = styled.footer`
  background: ${Colors.orange_gradient};
  padding-top: 126px;
  padding-bottom: 50px;
  @media (max-width: 991px) {
    padding: 100px 10px !important;
  }
`;

const FooterLogo = styled.img`
  margin-bottom: 2px;
  margin-top: -12px;
  width: 150px;
  @media (max-width: 767px) {
    width: 100px;
  }
`;

const FooterListTitle = styled.h3`
  color: white;
  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const FooterList = styled.ul`
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FooterListItem = styled.li`
  padding-bottom: 6px;
  color: white;
`;

const StyledLink = styled(Link)`
  font-family: "Roboto", sans-serif;
  color: white;
`;

const SocialItem = styled.a`
  display: inline-block;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  margin-right: 16px;
`;

const GlobalStylFooter = createGlobalStyle`
  .footer_flex {
    @media(max-width:767px){
      width:100% !important;
      flex-direction:column !important;
      display: block !important;
    }
  }
  .footer_container{
    padding-top:126px !important;
  }

  .Block_footer{
    @media(max-width:767px){
      width: 50% !important;
      display: inline-block;
      vertical-align: top;
      margin: 0 0 20px;
      padding-left:40px;

    }
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "30%",
    padding: "0px",
    border: "0px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Footer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const getDate = () => {
    const d = new Date();
    const y = d.getFullYear();
    return y;
  };

  return (
    <>
      <GlobalStylFooter />
      <StyledFooter>
        <Container className="footer_container">
          <Flex className="footer_flex">
            <Col width="20%" className="Block_footer">
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
                    <SocialItem
                      href="https://twitter.com/heliosip"
                      noFollow
                      target="_blank"
                    >
                      {twitter}
                    </SocialItem>
                    <SocialItem
                      href="https://www.linkedin.com/company/helios-intellectual-property/"
                      noFollow
                      target="_blank"
                    >
                      {linkedin}
                    </SocialItem>
                  </Flex>
                </FooterListItem>
              </FooterList>
            </Col>
            <Col width="20%" className="Block_footer">
              <FooterListTitle>Platform</FooterListTitle>
              <FooterList>
                <FooterListItem>
                  <StyledLink to="/why">Why Helios</StyledLink>
                </FooterListItem>
                <FooterListItem>
                  <StyledLink to="/platform">HeliosComplete™</StyledLink>
                </FooterListItem>
                {/* <FooterListItem>
                <StyledLink to="/">DocketEngine™​</StyledLink>
              </FooterListItem>
              <FooterListItem>
                <StyledLink to="/">DocketHub™​​</StyledLink>
              </FooterListItem> */}
              </FooterList>
            </Col>
            <Col width="20%" className="Block_footer">
              <FooterListTitle>Services</FooterListTitle>
              <FooterList>
                <FooterListItem>
                  <StyledLink to="/services">Support & Operations</StyledLink>
                </FooterListItem>
                <FooterListItem>
                  <SocialItem
                    href="https://helioscentral.com/"
                    noFollow
                    target="_blank"
                  >
                    Helios IP Network​
                  </SocialItem>
                </FooterListItem>
                {/* <FooterListItem>
                <StyledLink to="/">Consulting</StyledLink>
              </FooterListItem> */}
              </FooterList>
            </Col>
            <Col width="20%" className="Block_footer">
              <FooterListTitle>Resources</FooterListTitle>
              <FooterList>
                <FooterListItem>
                  <StyledLink to="/resources">About</StyledLink>
                </FooterListItem>
                <FooterListItem>
                  <StyledLink to="/pricing">Pricing</StyledLink>
                </FooterListItem>

                <FooterListItem>
                  <SocialItem
                    onClick={() => {
                      openModal();
                    }}
                    noFollow
                  >
                    Privacy
                  </SocialItem>
                </FooterListItem>
                <FooterListItem>
                  <SocialItem
                    href="https://app.termly.io/document/terms-of-use-for-website/bfd013cd-58e7-4823-80ac-67aef75ac67a"
                    noFollow
                  >
                    Terms & Conditions
                  </SocialItem>
                </FooterListItem>
              </FooterList>
            </Col>
            <Col width="20%" className="Block_footer">
              <FooterListTitle>Get Started</FooterListTitle>
              <FooterList>
                <FooterListItem>
                  <StyledLink to="/">Sign up</StyledLink>
                </FooterListItem>
                <FooterListItem>
                  <StyledLink to="/">Talk to Advisor</StyledLink>
                </FooterListItem>
              </FooterList>
            </Col>
          </Flex>
        </Container>
      </StyledFooter>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
      >
        {/* <Flex align="center" className="heroBlock_flex"> */}
        {/* <Col width="55%" className="rightBlock_Hero"> */}
        <div
          name="termly-embed"
          data-id="598f7ac7-e7ad-45db-9a96-23beae5b6dfd"
          data-type="iframe"
        ></div>
        {/* </Col> */}
        {/* </Flex> */}
      </Modal>
    </>
  );
};

export default Footer;
