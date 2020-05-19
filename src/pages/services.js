import React from "react";
import styled from "styled-components";
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
import services_src from "../images/services.svg";
import patent_src from "../images/services-patent.svg";
import ids_src from "../images/services-ids.svg";
import filing_src from "../images/services-filing.svg";
import annuties_src from "../images/services-annuties.svg";
import reporting_src from "../images/services-reporting.svg";

import Ready from "../components/ready";

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

const IntroTop = styled.div`
  padding-bottom: 120px;
`;

const IntroImg = styled.img`
  display: block;
  width: 90%;
`;

const IntroInner = styled.div`
  padding: 120px 0 240px 0;
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
  margin-bottom: 120px;
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
`;

const SupportCards = styled.div`
  padding-bottom: 120px;
`;

const SupportCard = styled.div`
  border: 1px solid ${Colors.gray};
  padding: 32px;
  border-radius: 12px;
  box-shadow: 41px 41px 82px #d9d9d9, -41px -41px 82px #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  padding-top: 200px;
`;

const SupportSlideWrapper = styled.div`
  display: flex;
  padding-bottom: 164px;
`;

const SupportSlideLeft = styled.div`
  border-radius: 12px;
  padding: 32px;
  background: ${Colors.blue_sun};
  width: 33%;
  position: relative;
  z-index: 10;
  margin-top: -64px;
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
`;

const SupportSlide = styled.div`
  position: relative;
  display: flex;
  padding: 0 32px;
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

const Services = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <Intro>
        <IntroInner>
          {/* <IntroTop>
            <TitleLarge align="center" color={Colors.blue}>
              Create Better IP Assets
            </TitleLarge>
            <IntroDesc align="center" mb={16}>
              Get dedicated support from our team of paralegals and IP
              specialists.
            </IntroDesc>
          </IntroTop> */}
          <Container>
            <Flex align="center">
              <Col width="50%">
                <IntroImg src={patent_src} />
              </Col>
              <Col width="50%">
                <TitleLarge>
                  An on-demand
                  <br />
                  IP team
                </TitleLarge>
                <IntroDesc mb={16}>
                  Get dedicated support from our team of paralegals and IP
                  specialists.
                </IntroDesc>
                <ButtonLink className="gray" to="/">
                  Get Started
                </ButtonLink>
              </Col>
            </Flex>
          </Container>
        </IntroInner>
      </Intro>
      <SupportCards>
        <Container>
          <Flex>
            <Col width={`calc(100% / 3)`}>
              <SupportCard>
                <Flex
                  align="flex-start"
                  justify="center"
                  align="center"
                  direction="column"
                >
                  <TitleXLarge mb={16}>+ 80%</TitleXLarge>
                  <TitleSmall mb={12}>Improve Productivity​</TitleSmall>
                </Flex>

                {/* <PricingList className="card">
                    <PricingItem>
                      <PricingItemIcon>{checkmark}</PricingItemIcon>
                      HeliosComplete™ Portal
                    </PricingItem>
                  </PricingList> */}

                <TextBody mb={16}>
                  For U.S. applications, manage all steps in the filing process
                  including: preparation of ADS;
                </TextBody>
                {/* POA and inventor
                    declarations; assignments; organize electronic filing
                    package; upload to EFS system; pay and invoice official
                    fees; save documents and confirmation receipts; docket all
                    actions/tasks​  */}
              </SupportCard>
            </Col>
            <Col width={`calc(100% / 3)`}>
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
                  For U.S. applications, manage all steps in the filing process
                  including: preparation of ADS;
                </TextBody>
              </SupportCard>
            </Col>
            <Col width={`calc(100% / 3)`}>
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
                  For U.S. applications, manage all steps in the filing process
                  including: preparation of ADS;
                </TextBody>
              </SupportCard>
            </Col>
          </Flex>
        </Container>
      </SupportCards>
      <SupportSlider>
        <Container maxWidth={1440}>
          <TitleLarge mb={120} align="center">
            IP Support Services
          </TitleLarge>

          <SupportSlideWrapper>
            <SupportSlide>
              <SupportSlideLeft>
                <SlideCardIcon>{calendar}</SlideCardIcon>
                <TitleSmall color="white">Patent & Trademark</TitleSmall>
                <SlideCardList>
                  <SlideCardItem>
                    <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                    HeliosComplete™ Portal
                  </SlideCardItem>
                  <SlideCardItem>
                    <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                    HeliosComplete™ Portal
                  </SlideCardItem>
                  <SlideCardItem>
                    <SlideCardItemIcon>{checkmark}</SlideCardItemIcon>
                    HeliosComplete™ Portal
                  </SlideCardItem>
                </SlideCardList>

                {/* <CardButton>Get Started</CardButton> */}
              </SupportSlideLeft>

              <SliderControl>
                <Control>{arrow}</Control>
                <Control className="active">{arrow}</Control>
              </SliderControl>
              <SupportSlideContent>
                <Flex align="flex-start" align="center">
                  <Col noP width="40%">
                    <ServiceTabImg src={patent_src} />
                  </Col>
                  <Col width="60%">
                    <TitleMedium>Patent & Trademark Docketing</TitleMedium>
                    <TextBody>
                      We manage all incoming and outgoing prosecution activities
                      including PTO, law firm, and foreign associate
                      correspondences. Information is fully validated and
                      checked against official records and our proprietary
                      DocketEngine™ global prosecution procedures.
                    </TextBody>
                  </Col>
                </Flex>
              </SupportSlideContent>
            </SupportSlide>
          </SupportSlideWrapper>
        </Container>
      </SupportSlider>
      {/* <ServiceTabs>
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
              <Flex align="flex-start">
                <Col width="50%">
                  <TitleMedium>Patent & Trademark Docketing</TitleMedium>
                  <TextBody>
                    We manage all incoming and outgoing prosecution activities
                    including PTO, law firm, and foreign associate
                    correspondences. Information is fully validated and checked
                    against official records and our proprietary DocketEngine™
                    global prosecution procedures. We provide full docketing, or
                    augment your internal resources to improve resource
                    utilization and productivity.
                  </TextBody>
                </Col>
                <Col width="50%">
                  <ServiceTabImg src={patent_src} />
                </Col>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex align="flex-start">
                <Col width="50%">
                  <TitleMedium>Information Disclosure Statements</TitleMedium>
                  <TextBody>
                    We provide complete end-to-end IDS management from tracking
                    new prior art across the family, to completing and filing
                    IDS and disclosure forms. A complete turnkey solution
                    including access to our IDS system platform, IDS expert
                    staff, and a fixed rate subscription program.
                  </TextBody>
                </Col>
                <Col width="50%">
                  <ServiceTabImg src={ids_src} />
                </Col>
              </Flex>
            </TabPanel>

            <TabPanel>
              <Flex align="flex-start">
                <Col width="50%">
                  <TitleMedium>
                    Foreign Filing, EP Validations and National Stage Entry
                  </TitleMedium>
                  <TextBody>
                    Helios streamlines the global filing process from strategy
                    through execution. We manage your agent network and ensure
                    that all filing requirements are met with expert knowledge
                    of each country’s procedures. Clients have full control and
                    transparency into the process linked directly to their
                    docketing system.
                  </TextBody>
                </Col>
                <Col width="50%">
                  <ServiceTabImg src={filing_src} />
                </Col>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex align="flex-start">
                <Col width="50%">
                  <TitleMedium>
                    Patent Annuities and Trademark Renewals
                  </TitleMedium>
                  <TextBody>
                    Helios annuities and renewals service enable clients to
                    eliminate the risk and complexity of their maintenance
                    decisions, while minimizing the cost. We have developed a
                    unique direct-pay process that avoids unnecessary
                    intermediary handling and currency fees, and time consuming
                    foreign agent and POA formalities. Clients pay a fixed
                    monthly service fee with no conversion markups.
                  </TextBody>
                </Col>
                <Col width="50%">
                  <ServiceTabImg src={annuties_src} />
                </Col>
              </Flex>
            </TabPanel>

            <TabPanel>
              <Flex align="flex-start">
                <Col width="50%">
                  <TitleMedium>Reporting and Portfolio Analysis</TitleMedium>
                  <TextBody>
                    Helios IP business intelligence services provide clients the
                    reporting and analysis they need to understand their
                    portfolio and support decision-making. Using advanced BI
                    tools we work with both internal and external data to build
                    comprehensive analytics
                  </TextBody>
                </Col>
                <Col width="50%">
                  <ServiceTabImg src={reporting_src} />
                </Col>
              </Flex>
            </TabPanel>
          </Tabs>
        </Container>
      </ServiceTabs> */}
      {/* <Ready title="Ready to Get Support?" /> */}
    </Layout>
  );
};

export default Services;
