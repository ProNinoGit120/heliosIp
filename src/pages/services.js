import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";
import Modal from "react-modal";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Colors from "../utils/colors";
import {
  Container,
  Flex,
  Col,
  TitleLarge,
  TitleMedium,
  TitleSmall,
  TextBody,
  TitleXLarge,
  ButtonLink,
} from "../utils/elements";
import {
  calendar,
  ids,
  filing,
  money,
  reporting,
  checkmark,
  arrow,
} from "../utils/icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import person_src from "../images/persons/person-4.png";
import services_src from "../images/services.svg";
import patent_src from "../images/services-patent.svg";
import global_src from "../images/services-global.svg";
import ids_src from "../images/services-ids.svg";
import filing_src from "../images/services-filing.svg";
import annuties_src from "../images/services-annuties.svg";
import reporting_src from "../images/services-reporting.svg";
import CalculateExpense from "../components/cards/calculateExpense";
import Ready from "../components/ready";
import Slider from "react-slick";

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

const GlobalStylesServices = createGlobalStyle`
  .heading {
    @media(max-width: 767px) {
      font-size: 34px;
    }
  }

  .titleLarge {
    @media(max-width: 767px) {
      font-size: 40px;
    }
  }

  .titleMedium {
    @media(max-width: 767px) {
      font-size: 24px;
    }
  }
`;

const Intro = styled.section`
  overflow-x: hidden;
  /* padding-bottom: 120px; */
  position: relative;

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    background: ${Colors.gray};
    transform: rotate(-9.5deg);
    z-index: -1;
    transform-origin: left bottom;
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  margin-bottom: ${({ mb }) => mb}px;
  @media (max-width: 767px) {
    font-size: 36px;
    margin-bottom: 32px;
  }
`;

const HeroButton = styled.button`
  background: ${Colors.gray};
  padding: 8px 16px;
  box-shadow: rgb(231, 231, 231) 10px 10px 16px,
    rgb(251, 251, 251) -10px -10px 16px;
  color: ${Colors.blue};
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
`;

const IntroTop = styled.div`
  padding-bottom: 120px;
`;

const IntroImg = styled.img`
  display: block;
  width: 100%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const IntroContentWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const IntroInner = styled.div`
  padding: 70px 0 150px 0;
  @media (max-width: 767px) {
    padding: 40px 0 70px 0;
  }
`;

const IntroDesc = styled(TextBody)`
  font-size: 24px;
  margin: 0 auto;
  padding-bottom: 16px;
`;

const ServiceTabs = styled.section`
  /* padding-top: 60px; */
  padding-bottom: 120px;
`;

const ServiceTablist = styled(TabList)`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 75px;
  &:before {
    z-index: -2;
    background-color: #e0e0e0;
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    top: 50px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 80%;
  }
`;

const ServiceTabWrapper = styled(Tab)`
  outline: 0;
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.react-tabs__tab--selected > div {
    border-color: ${Colors.blue};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.33),
      -5px -5px 19px ${Colors.border};
  }
  &.react-tabs__tab--selected path {
    fill: white;
  }

  &.react-tabs__tab--selected p {
    color: ${Colors.text};
  }
`;

const ServiceTab = styled.div`
  border: 4px solid ${Colors.border};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.blue_sun};
  margin-bottom: 8px;
  & path {
    fill: rgba(255, 255, 255, 0.15);
    width: 40px;
  }
`;

const ServiceTabText = styled.p`
  text-align: center;
  display: block;
  color: rgba(0, 0, 0, 0.33);
`;

const ServiceTabImg = styled.img`
  display: block;
  width: 100%;
  padding-left: 64px;
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

const SupportCards = styled.div`
  ${"" /* padding-bottom: 120px; */}
  padding-top: 50px;
  margin-bottom: 200px;
  @media (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0px;
  }
`;

const SupportCard = styled.div`
  background: ${Colors.white};
  border: 1px solid white;
  padding: 64px 32px;
  border-radius: 12px;
  box-shadow: 41px 41px 82px #d9d9d9, -41px -41px 82px #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* &:nth-child(1) {
    margin-top: 112px;
  } */
  &.first {
    margin-top: 112px;
  }

  &.second {
    margin-top: 56px;
  }
`;

const SupportNotification = styled.div`
  margin-bottom: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 999px;
  padding: 4px 16px;
  color: ${Colors.blue};
  position: relative;

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

const LearnMoreBtn = styled(Link)`
  color: ${Colors.orange};
  padding-top: 16px;
`;

const SupportCardImg = styled.img`
  display: block;
  width: 100%;
  min-height: 300px;
  max-height: 300px;
`;

const SupportCardTitle = styled.div``;

const SupportInfo = styled.div`
  border: 1px solid ${Colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  font-weight: bold;
`;

const SupportIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: ${Colors.orange_sun};
  margin-bottom: 16px;
`;

const SlideCardList = styled.ul``;

const SlideCardItem = styled.li`
  margin-top: 10px;
  color: white;
  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SlideCardItemIcon = styled.div`
margin-right: 8px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* border: 1px solid ${Colors.border}; */
  svg {
    width: 24px;
    & path {stroke: white;}
  }
`;

const SupportSlider = styled.div`
  padding-top: 100px;
  padding-bottom: 120px;
  @media (max-width: 991px) {
    padding-top: 30px;
  }
  overflow-x: hidden;

  &:before {
    content: " ";
    overflow-x: hidden;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    background: ${Colors.gray};
    transform: rotate(-9.5deg);
    z-index: -1;
    transform-origin: left bottom;
  }
`;

const SupportSlideWrapper = styled.div`
  display: flex;
  padding-bottom: 164px;
  @media (max-width: 767px) {
    padding-bottom: 50px;
    flex-direction: column !important;
  }
`;

const SupportSlideLeft = styled.div`
  border-radius: 12px;
  padding: 32px;
  background: ${Colors.blue_sun};
  width: 33%;
  position: relative;
  z-index: 10;
  margin-top: 64px;
  @media (max-width: 767px) {
    margin: 0 0 20px;
    flex-direction: column !important;
    width: 100% !important;
  }
`;

const SupportSlideContent = styled.div`
  width: 100%;
  box-shadow: 41px 41px 60px #d9d9d9, -41px -41px 60px #ffffff;
  padding: 80px 64px;
  border-radius: 12px;
  position: relative;
  z-index: -1;
  border: 1px solid ${Colors.gray};
  margin-left: -64px;
  margin-bottom: -64px;
  @media (max-width: 767px) {
    margin-left: 0;
    margin-bottom: 0;
    padding: 20px 0;
  }
`;

const SupportSlide = styled.div`
  position: relative;
  display: flex;
  padding: 0 32px;
  @media (max-width: 767px) {
    flex-direction: column !important;
  }
`;

const SlideCardIcon = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.11);
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${Colors.blue};
  margin-bottom: 16px;
  & svg {
    width: 100%;
  }
`;

const CardButton = styled.button`

  outline: 0;
  cursor: pointer;
  height: 70px;
  background: ${Colors.blue};
  width: 100%;
  color: white;
  border-radius: 6px;
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

const SliderControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: absolute;
  top: -64px;
  right: 32px;
  @media (max-width: 767px) {
    right: 0;
    left: 0;
    justify-content: center;
    margin: 25px 0;
  }
`;

const Control = styled.div`
  display: flex;
  align-items: center;

  & svg {
    width: 40px;
    fill: ${Colors.border};
  }

  &:first-child svg {
    margin-right: 16px;
    transform: rotate(-180deg);
  }

  &.active {
    & svg {
      fill: ${Colors.orange};
    }
  }
`;

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 1500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   arrows: false,
//   afterChange: current => {
//     console.log("current", current);
//     let timelineItem = Array.from(
//       document.getElementsByClassName("timelineItem")
//     );
//     timelineItem.forEach((timelineItem, index) => {
//       timelineItem.classList.remove("active");
//       if (current === index) {
//         timelineItem.classList.add("active");
//       }
//     });
//     setTimelineActiveIndex(current);
//   },
// };

const Services = () => {
  // const windowSize = useWindowSize();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Layout page="services">
      <SEO title="Services" />
      <Intro>
        <IntroInner>
          <Container>
            {/* <IntroTop>
              <TitleLarge align="center" color={Colors.blue}>
                Create Better IP Assets
              </TitleLarge>
              <IntroDesc align="center" mb={16}>
                Get dedicated support from our team of paralegals and IP
                specialists.
              </IntroDesc>
            </IntroTop> */}
            <Flex align="center" direction="column">
              {/* <Flex className="flexHero" align="center"> */}
              <Col className="heroImg">
                <HeroTitle>Your On-demand IP Operations Team</HeroTitle>
                <IntroDesc mb={16}>
                  Dedicated support from our team of paralegals and IP
                  specialists.
                </IntroDesc>
              </Col>
              <Col className="heroImg">
                <IntroImg src={global_src} />
              </Col>
            </Flex>
          </Container>
        </IntroInner>
      </Intro>
      <SupportCards>
        <Container maxWidth="1440">
          <Flex className="flexCol">
            <Col className="leftBlock">
              <SupportCard>
                <Flex
                  align="flex-start"
                  justify="center"
                  align="center"
                  direction="column"
                >
                  <TitleXLarge mb={16}>+ 40%</TitleXLarge>
                  <TitleSmall mb={12}>Improve Productivity</TitleSmall>
                </Flex>

                {/* <PricingList className="card">
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      HeliosComplete™ Portal
                    </PricingItem>
                  </PricingList> */}

                <TextBody mb={16}>
                  Our support allows your team to focus on their value-added
                  work
                </TextBody>
                {/* POA and inventor
                    declarations; assignments; organize electronic filing
                    package; upload to EFS system; pay and invoice official
                    fees; save documents and confirmation receipts; docket all
                    actions/tasks  */}
              </SupportCard>
            </Col>
            <Col className="centerBlock">
              <SupportCard>
                <Flex
                  align="flex-start"
                  justify="center"
                  align="center"
                  direction="column"
                >
                  <TitleXLarge mb={16}>- $750</TitleXLarge>
                  <TitleSmall mb={12}>Reduce Matter Cost</TitleSmall>
                </Flex>

                <TextBody mb={16}>
                  Less billable time and better rates helps reduce spend and
                  improve budgets
                </TextBody>
              </SupportCard>
            </Col>
            <Col className="rightBlock">
              <SupportCard>
                <Flex
                  align="flex-start"
                  justify="center"
                  align="center"
                  direction="column"
                >
                  <TitleXLarge mb={16}>+ 30%</TitleXLarge>
                  <TitleSmall mb={16}>Increased Filings</TitleSmall>
                </Flex>

                <TextBody mb={16}>
                  Improved efficiency reduces turn around time and enables more
                  filings
                </TextBody>
              </SupportCard>
            </Col>
          </Flex>
        </Container>
      </SupportCards>
      <ServiceTabs>
        <Container>
          <Tabs>
            <ServiceTablist>
              <ServiceTabWrapper>
                <ServiceTab>{calendar}</ServiceTab>
                <ServiceTabText>
                  Patent & Trademark
                  <br />
                  Docketing
                </ServiceTabText>
              </ServiceTabWrapper>
              <ServiceTabWrapper>
                <ServiceTab>{ids}</ServiceTab>
                <ServiceTabText>
                  Information Disclosure
                  <br />
                  Statements
                </ServiceTabText>
              </ServiceTabWrapper>
              <ServiceTabWrapper>
                <ServiceTab>{filing}</ServiceTab>
                <ServiceTabText>Foreign Filing</ServiceTabText>
              </ServiceTabWrapper>
              <ServiceTabWrapper>
                <ServiceTab>{money}</ServiceTab>
                <ServiceTabText>Annuties and Renewals</ServiceTabText>
              </ServiceTabWrapper>
              <ServiceTabWrapper>
                <ServiceTab>{reporting}</ServiceTab>
                <ServiceTabText>Reporting</ServiceTabText>
              </ServiceTabWrapper>
            </ServiceTablist>

            <TabPanel>
              <SupportSlideWrapper>
                <SupportSlide>
                  <SupportSlideLeft>
                    <SlideCardList>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        New matter setup
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Global ruleset
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Due date reminders
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Electronic PTO data
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Document storage
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Docket reports
                      </SlideCardItem>
                    </SlideCardList>

                    {/* <CardButton>Get Started</CardButton> */}
                  </SupportSlideLeft>

                  {/* <SliderControl>
                    <Control>{arrow}</Control>
                    <Control className="active">{arrow}</Control>
                  </SliderControl> */}
                  <SupportSlideContent>
                    <Flex align="flex-start" align="center" className="flexBox">
                      <Col noP width="40%" className="leftBlock">
                        <ServiceTabImg src={patent_src} />
                      </Col>
                      <Col width="60%" className="rightBlock">
                        <TitleMedium className="titleMedium">
                          Patent & Trademark Docketing
                        </TitleMedium>
                        <TextBody>
                          We manage all incoming and outgoing prosecution
                          activities including PTO, law firm, and foreign
                          associate correspondences. Information is fully
                          validated and checked against official records and our
                          proprietary DocketEngine™ global prosecution
                          procedures.
                        </TextBody>
                      </Col>
                    </Flex>
                  </SupportSlideContent>
                </SupportSlide>
              </SupportSlideWrapper>
            </TabPanel>
            <TabPanel>
              <SupportSlideWrapper>
                <SupportSlide>
                  <SupportSlideLeft>
                    <SlideCardList>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Reference library
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Cross-family report
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Electronic SB08 form
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Foreign citation review
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Due date tracking
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Document storage
                      </SlideCardItem>
                    </SlideCardList>
                  </SupportSlideLeft>
                  <SupportSlideContent>
                    <Flex align="flex-start" align="center" className="flexBox">
                      <Col noP width="40%" className="leftBlock">
                        <ServiceTabImg src={ids_src} />
                      </Col>
                      <Col width="60%" className="rightBlock">
                        <TitleMedium className="titleMedium">
                          Information Disclosure Statements
                        </TitleMedium>
                        <TextBody>
                          We provide complete end-to-end IDS management from
                          tracking new prior art across the family, to
                          completing and filing IDS and disclosure forms. A
                          complete turnkey solution including access to our IDS
                          system platform, IDS expert staff, and a fixed rate
                          subscription program.
                        </TextBody>
                      </Col>
                    </Flex>
                  </SupportSlideContent>
                </SupportSlide>
              </SupportSlideWrapper>
            </TabPanel>

            <TabPanel>
              <SupportSlideWrapper>
                <SupportSlide>
                  <SupportSlideLeft>
                    <SlideCardList>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Due data tracking
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Provisional filings
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Foreign filing
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        ADS and formalities
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Global agent network
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Document storage
                      </SlideCardItem>
                    </SlideCardList>
                  </SupportSlideLeft>
                  <SupportSlideContent>
                    <Flex align="flex-start" align="center" className="flexBox">
                      <Col noP width="40%" className="leftBlock">
                        <ServiceTabImg src={filing_src} />
                      </Col>
                      <Col width="60%" className="rightBlock">
                        <TitleMedium className="titleMedium">
                          Application Filing
                        </TitleMedium>
                        <TextBody>
                          For U.S. and foreign filing, including provisionals,
                          priority, EP validations and PCT national phase entry,
                          we streamline the filing process from strategy through
                          execution. We prepare all filing documents to ensure
                          requirements are met with expert knowledge of filing
                          procedures. The Helios IP Network provides preferred
                          foreign associates, with full control and transparency
                          into the process.
                        </TextBody>
                      </Col>
                    </Flex>
                  </SupportSlideContent>
                </SupportSlide>
              </SupportSlideWrapper>
            </TabPanel>
            <TabPanel>
              <SupportSlideWrapper>
                <SupportSlide>
                  <SupportSlideLeft>
                    <SlideCardList>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Calculate due dates
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Low cost fees
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Monitor instructions
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Global agent network
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Budget reporting
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Electronic receipts
                      </SlideCardItem>
                    </SlideCardList>
                  </SupportSlideLeft>
                  <SupportSlideContent>
                    <Flex align="flex-start" align="center" className="flexBox">
                      <Col noP width="40%" className="leftBlock">
                        <ServiceTabImg src={annuties_src} />
                      </Col>
                      <Col width="60%" className="rightBlock">
                        <TitleMedium className="titleMedium">
                          Annuities & Renewals
                        </TitleMedium>
                        <TextBody>
                          Helios annuities and renewals service enable clients
                          to eliminate the risk and complexity of their
                          maintenance decisions, while minimizing the cost. We
                          have developed a unique direct-pay process that avoids
                          unnecessary intermediary handling and currency fees,
                          and time consuming foreign agent and POA formalities.
                        </TextBody>
                      </Col>
                    </Flex>
                  </SupportSlideContent>
                </SupportSlide>
              </SupportSlideWrapper>
            </TabPanel>

            <TabPanel>
              <SupportSlideWrapper>
                <SupportSlide>
                  <SupportSlideLeft>
                    <SlideCardList>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Graphical dashboards
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Portfolio analytics
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Prosecution metrics
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Financial spend
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Automated delivery
                      </SlideCardItem>
                      <SlideCardItem>
                        <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                        Excel / Power BI
                      </SlideCardItem>
                    </SlideCardList>
                  </SupportSlideLeft>
                  <SupportSlideContent>
                    <Flex align="flex-start" align="end" className="flexBox">
                      <Col noP width="40%" className="leftBlock">
                        <ServiceTabImg src={reporting_src} />
                      </Col>
                      <Col width="60%" className="rightBlock">
                        <TitleMedium className="titleMedium">
                          Reporting
                        </TitleMedium>
                        <TextBody>
                          Helios IP business intelligence services provide
                          clients the reporting and analysis they need to
                          understand their portfolio and support
                          decision-making. Using advanced BI tools we work with
                          both internal and external data to build comprehensive
                          analytics.
                        </TextBody>
                      </Col>
                    </Flex>
                  </SupportSlideContent>
                </SupportSlide>
              </SupportSlideWrapper>
            </TabPanel>
          </Tabs>
        </Container>
      </ServiceTabs>
      <Ready title="Ready to Get Started?" person={person_src} width={320} />
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
    </Layout>
  );
};

export default Services;
