import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import SEO from "../components/seo";
import Modal from "react-modal";
import Layout from "../components/layout";
import Size from "../utils/size";
import Colors from "../utils/colors";
import {
  Container,
  Flex,
  Col,
  TitleXLarge,
  TitleLarge,
  TextBody,
  Sun,
  TitleSmall,
} from "../utils/elements";
import {
  checkmark,
  plus,
  money,
  ids,
  close,
  patent,
  trademark,
  calendar,
  formal,
} from "../utils/icons";
import CalculateExpense from "../components/cards/calculateExpense";
import Ready from "../components/ready";
import FormModal from "../components/modal";

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

const GlobalStylePriceing = createGlobalStyle`
  .priceing_flex{
    @media(max-width:767px){
      flex-direction:column !important;
    }
  }
  .titleLarge_price{
    @media(max-width:767px){
      font-Size:32px !important;
    }
  }
  .leftBlock_price{
    @media(max-width:767px){
      width:100%;
      margin-bottom:25px;
    }
  }

  .rightBlock_price{
    @media(max-width:767px){
      width:100%;
    }
  }

`;

const Intro = styled.section`
  overflow-x: hidden;
  padding-bottom: 400px;
  position: relative;
  z-index: -2;

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    background: ${Colors.blue_gradient};
    transform: rotate(-9.5deg);
    z-index: -1;
    transform-origin: left bottom;
    @media (max-width: 767px) {
      height: 60%;
    }
  }
  @media (max-width: 767px) {
    padding-bottom: 400px;
  }
`;

const IntroInner = styled.div`
  padding-top: 120px;
  text-align: center;
  @media (max-width: 767px) {
    padding-bottom: 100px;
  }
`;

const IntroDescription = styled.p`
  color: white;
  max-width: 650px;
  margin: 0 auto;
`;

const IntroLogo = styled.div`
  margin: 0 auto 32px auto;
  border-radius: 50%;
  width: 164px;
  height: 164px;
  background: ${Colors.blue_sun};
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 128px;
  }
`;

const PricingCardsWrapper = styled.div`
  margin-top: -300px;
  @media (max-width: 991px) {
    margin-top: -350px !important;
  }
  @media (max-width: 767px) {
    margin-top: -500px !important;
  }
`;

const PricingCard = styled.div`
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2),
    -10px -10px 30px rgba(0, 0, 0, 0.05);
  background: white;
  /* width: 100%; */
  border-radius: ${Size.radius * 2}px;
  border: 1px solid ${Colors.border};
`;

const CardHeader = styled.div`
  padding: 32px;
  background: ${Colors.gray};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 1px solid ${Colors.border};
`;

const CardFooter = styled.div`
  padding: 0 64px 32px 64px;
`;

const CardTitle = styled.h3`
  text-align: center;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 32px 64px;
  display: flex;
  /* height: 31vh; */
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  @media (max-width: 768px) {
    /* height: 61vh; */
  }
  @media (max-width: 480px) {
    height: auto;
  }
`;

const CardSubHeader = styled.div`
  padding: 32px 64px;
  border-bottom: 1px solid ${Colors.gray};
`;

const CardButton = styled.button`
  outline: 0;
  cursor: pointer;
  height: 70px;
  background: ${Colors.blue};
  width: 100%;
  color: white;
  border-radius: ${Size.radius}px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* &:hover {
    box-shadow: 10px 10px 10px white, -10, -10, 10px ${Colors.text};
  } */

  & svg {
    margin-left: 8px;
    fill: white;
    width: 24px;
  }
`;

const PricingList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.card {
    padding: 16px 0;
  }
`;

const PricingItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  &.orange {
    color: ${Colors.orange};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const PricingItemIcon = styled.div`
  margin-right: 8px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* border: 1px solid ${Colors.border}; */
  svg {
    width: 24px;
  }
`;

const SupportWrapper = styled.section`
  padding: 225px 0;
  @media (max-width: 767px) {
    padding: 150px 0;
  }
`;

const SupportIntro = styled.div`
  padding-left: 32px;
  @media (max-width: 767px) {
    padding: 0 15px;
    text-align: center;
  }
`;

const SupportCards = styled.div`
  padding: 0 32px;
  width: 100%;
  margin-bottom: 64px;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 64px;
  perspective: 600px;
`;

const SupportCard = styled.div`
  border: 1px solid ${Colors.gray};
  min-height: 350px;
  border-radius: 12px;
  box-shadow: 41px 41px 82px #d9d9d9, -41px -41px 82px #ffffff;
  width: 100%;
  height: 100%;
  transition: transform 300ms;
  transform-style: preserve-3d;
  position: relative;

  &.isFlipped {
    transform: rotateY(180deg);
  }
`;

const SupportCardFace = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;

  &.front {
    z-index: 1;
  }
  &.back {
    transform: rotateY(180deg);
    z-index: 10;
  }
`;

const SupportCardTitle = styled.div``;

const SupportInfo = styled.div`
  cursor: pointer;
  border: 1px solid ${Colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-weight: bold;
  transition: opacity 0.3s ease-out;
  backface-visibility: hidden;
  &:hover {
    opacity: 0.33;
  }
`;

const SupportIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${Colors.orange_sun};
  margin-bottom: 16px;
  & svg {
    width: 100%;
  }
`;

// const SupportCardBack = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
// `;

const SupportInfoClose = styled(SupportInfo)`
  width: 36px;
  & svg {
    width: 18px;
    & path {
      fill: ${Colors.text};
    }
  }
`;

const SupportList = styled(PricingList)``;

const SupportItem = styled(PricingItem)`
  margin-bottom: 0;
`;

const Pricing = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  // useEffect(() => {

  // }, [])

  const handleCardOpen = e => {
    e.target.parentNode.parentNode.parentNode.classList.add("isFlipped");
    // console.log(
    //   e.target.parentNode.parentNode.parentNode.classList.toggle("isFlipped")
    // );
  };

  const handleCardClose = e => {
    e.target.parentNode.parentNode.parentNode.parentNode.classList.remove(
      "isFlipped"
    );
    // console.log(
    //   e.target.parentNode.parentNode.parentNode.classList.toggle("isFlipped")
    // );
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <GlobalStylePriceing />
      <Layout page="pricing">
        <SEO title="Pricing" />
        <Intro>
          <IntroInner>
            <Container>
              <IntroLogo>
                <Sun color="white" />
              </IntroLogo>
              <TitleLarge
                color="white"
                align="center"
                className="titleLarge_price"
              >
                Choose the plan that’s right for you.
              </TitleLarge>
            </Container>
          </IntroInner>
        </Intro>
        <PricingCardsWrapper>
          <Container>
            <Flex align="flex-start" className="priceing_flex">
              <Col width="50%" className="leftBlock_price">
                <PricingCard>
                  <CardHeader>
                    <CardTitle>SMB Portfolio​</CardTitle>
                  </CardHeader>

                  <CardSubHeader>
                    <Flex
                      direction="column"
                      align="center"
                      className="priceing_flex"
                    >
                      <Flex align="center" justify="center">
                        <TitleXLarge>$1</TitleXLarge>
                        <TextBody mb={-8} ml={8}>
                          Per Month <br /> Per Pending Record
                        </TextBody>
                      </Flex>
                      <TextBody>+ $500/Month Platform Fee</TextBody>
                    </Flex>
                  </CardSubHeader>
                  <CardBody>
                    <PricingList>
                      <PricingItem>
                        <PricingItemIcon>{checkmark}</PricingItemIcon>
                        HeliosComplete™ Portal
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{checkmark}</PricingItemIcon>
                        Patents & Trademarks Modules
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{checkmark}</PricingItemIcon>
                        Core Docketing
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{checkmark}</PricingItemIcon>
                        U.S. Annuities & Renewals
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{checkmark}</PricingItemIcon>
                        Monitoring & Reminders
                      </PricingItem>
                    </PricingList>
                  </CardBody>
                  <CardFooter>
                    <CardButton
                      onClick={() => {
                        openModal();
                      }}
                    >
                      Get Started
                    </CardButton>
                  </CardFooter>
                </PricingCard>
              </Col>
              <Col width="50%" className="rightBlock_price">
                <PricingCard>
                  <CardHeader>
                    <CardTitle>Global Portfolio</CardTitle>
                  </CardHeader>

                  <CardSubHeader>
                    <Flex direction="column" align="center">
                      <Flex align="center" justify="center">
                        <TitleXLarge>$2</TitleXLarge>
                        <TextBody mb={-8} ml={8}>
                          Per Month <br /> Per Pending Record
                        </TextBody>
                      </Flex>
                      <TextBody>+ $1500/Month Platform Fee</TextBody>
                    </Flex>
                  </CardSubHeader>
                  <CardBody>
                    <PricingList>
                      <PricingItem className="orange">
                        <PricingItemIcon>{checkmark}</PricingItemIcon>
                        Includes All Value Features
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{plus}</PricingItemIcon>
                        HeliosComplete™ Enterprise
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{plus}</PricingItemIcon>
                        Full Suite of IP Modules​
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{plus}</PricingItemIcon>
                        Electronic PTO Data Integration​
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{plus}</PricingItemIcon>
                        Global DocketEngine™ Ruleset​
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{plus}</PricingItemIcon>
                        Microsoft® 365 Integration
                      </PricingItem>
                      <PricingItem>
                        <PricingItemIcon>{plus}</PricingItemIcon>
                        Power BI Dashboards​
                      </PricingItem>
                    </PricingList>
                  </CardBody>
                  <CardFooter>
                    <CardButton
                      onClick={() => {
                        openModal();
                      }}
                    >
                      Get Started
                    </CardButton>
                  </CardFooter>
                </PricingCard>
              </Col>
            </Flex>
          </Container>
        </PricingCardsWrapper>
        <SupportWrapper>
          <Container>
            <SupportIntro>
              <TitleLarge mb={8} className="titleLarge_price">
                Added Support Services
              </TitleLarge>
              <TextBody style={{ fontSize: "24px" }} mb={64}>
                Optional transactional support services monitored and executed
                on your instructions​
              </TextBody>
            </SupportIntro>
            <SupportCards>
              <SupportCard>
                <SupportCardFace className="front">
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{patent}</SupportIcon>
                    <SupportInfo
                      onClick={e => {
                        handleCardOpen(e);
                      }}
                    >
                      i
                    </SupportInfo>
                  </Flex>
                  <Flex direction="column" justify="space-between">
                    <TitleSmall mb={12}>Patent Filing </TitleSmall>

                    <TextBody mb={16}>
                      U.S. and Foreign patent, design and utility model filings
                      ​
                    </TextBody>

                    <TextBody color={`rgba(0,0,0,.33)`}>
                      Starting at <strong>$475</strong> per filing
                    </TextBody>
                  </Flex>
                </SupportCardFace>
                <SupportCardFace className="back">
                  <Flex justify="space-between" align="flex-start">
                    <TitleSmall mb={8} />

                    <SupportInfoClose
                      onClick={e => {
                        handleCardClose(e);
                      }}
                    >
                      {close}
                    </SupportInfoClose>
                  </Flex>
                  <SupportList>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      U.S. filing
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Priority filing
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      EP validations
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      PCT national phase
                    </PricingItem>
                  </SupportList>
                </SupportCardFace>
              </SupportCard>
              <SupportCard>
                <SupportCardFace className="front">
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{trademark}</SupportIcon>
                    <SupportInfo
                      onClick={e => {
                        handleCardOpen(e);
                      }}
                    >
                      i
                    </SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>Trademark Filing​</TitleSmall>

                  <TextBody mb={16}>
                    U.S. and Foreign trademark and industrial design filings
                  </TextBody>

                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$575</strong> per filing
                  </TextBody>
                </SupportCardFace>
                <SupportCardFace className="back">
                  <Flex justify="space-between" align="flex-start">
                    <TitleSmall mb={8} />

                    <SupportInfoClose
                      onClick={e => {
                        handleCardClose(e);
                      }}
                    >
                      {close}
                    </SupportInfoClose>
                  </Flex>
                  <SupportList>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      U.S. filing
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      National registration
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      EU marks
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Mardrid filing
                    </PricingItem>
                  </SupportList>
                </SupportCardFace>
              </SupportCard>
              <SupportCard>
                <SupportCardFace className="front">
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{calendar}</SupportIcon>
                    <SupportInfo
                      onClick={e => {
                        handleCardOpen(e);
                      }}
                    >
                      i
                    </SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>Office Actions​​</TitleSmall>

                  <TextBody mb={16}>
                    Monitor, manage and file U.S. and foreign office action
                    responses​ ​​
                  </TextBody>

                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$75</strong> per response
                  </TextBody>
                </SupportCardFace>
                <SupportCardFace className="back">
                  <Flex justify="space-between" align="flex-start">
                    <TitleSmall mb={8} />

                    <SupportInfoClose
                      onClick={e => {
                        handleCardClose(e);
                      }}
                    >
                      {close}
                    </SupportInfoClose>
                  </Flex>
                  <SupportList>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Central intake
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Review and docket
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Reminders
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Response filing
                    </PricingItem>
                  </SupportList>
                </SupportCardFace>
              </SupportCard>
              <SupportCard>
                <SupportCardFace className="front">
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{money}</SupportIcon>
                    <SupportInfo
                      onClick={e => {
                        handleCardOpen(e);
                      }}
                    >
                      i
                    </SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>Renewals​​​</TitleSmall>

                  <TextBody mb={16}>
                    Pay U.S. and foreign renewals for patents, trademarks and
                    designs​ ​​
                  </TextBody>

                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$35</strong> per renewal
                  </TextBody>
                </SupportCardFace>
                <SupportCardFace className="back">
                  <Flex justify="space-between" align="flex-start">
                    <TitleSmall mb={8} />

                    <SupportInfoClose
                      onClick={e => {
                        handleCardClose(e);
                      }}
                    >
                      {close}
                    </SupportInfoClose>
                  </Flex>
                  <SupportList>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Due date monitoring
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Online instructions
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Global agent network
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Payment reporting
                    </PricingItem>
                  </SupportList>
                </SupportCardFace>
              </SupportCard>
              <SupportCard>
                <SupportCardFace className="front">
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{ids}</SupportIcon>
                    <SupportInfo
                      onClick={e => {
                        handleCardOpen(e);
                      }}
                    >
                      i
                    </SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>IDS Filing​</TitleSmall>

                  <TextBody mb={16}>
                    Track, prepare and file IDS including reference storage​ ​
                    ​​
                  </TextBody>

                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$95</strong> per filing
                  </TextBody>
                </SupportCardFace>
                <SupportCardFace className="back">
                  <Flex justify="space-between" align="flex-start">
                    <TitleSmall mb={8} />

                    <SupportInfoClose
                      onClick={e => {
                        handleCardClose(e);
                      }}
                    >
                      {close}
                    </SupportInfoClose>
                  </Flex>
                  <SupportList>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Reference library
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Cross citation reports
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      SB08 filing
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Due date monitoring
                    </PricingItem>
                  </SupportList>
                </SupportCardFace>
              </SupportCard>
              <SupportCard>
                <SupportCardFace className="front">
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{formal} </SupportIcon>
                    <SupportInfo
                      onClick={e => {
                        handleCardOpen(e);
                      }}
                    >
                      i
                    </SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>Formalities</TitleSmall>

                  <TextBody mb={16}>
                    Prepare and file assignments, POAs, and other formalities
                  </TextBody>

                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$125</strong> per filing
                  </TextBody>
                </SupportCardFace>
                <SupportCardFace className="back">
                  <Flex justify="space-between" align="flex-start">
                    <TitleSmall mb={8} />

                    <SupportInfoClose
                      onClick={e => {
                        handleCardClose(e);
                      }}
                    >
                      {close}
                    </SupportInfoClose>
                  </Flex>
                  <SupportList>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Assignments
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      POAs / Legalizations
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Change of ownership
                    </PricingItem>
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      Electronic documents
                    </PricingItem>
                  </SupportList>
                </SupportCardFace>
              </SupportCard>
            </SupportCards>
          </Container>
        </SupportWrapper>
        <Ready title="Ready to Start Saving?" />
      </Layout>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <Container>
          {/* <Flex align="center" className="heroBlock_flex"> */}
          {/* <Col width="55%" className="rightBlock_Hero"> */}
          <CalculateExpense />
          {/* </Col> */}
          {/* </Flex> */}
        </Container>
      </Modal>
    </>
  );
};

export default Pricing;
