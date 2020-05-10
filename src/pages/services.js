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
  TextBody,
} from "../utils/elements";
import { calendar, ids, filing, money, reporting } from "../utils/icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import patent_src from "../images/services-patent.svg";
import ids_src from "../images/services-ids.svg";
import filing_src from "../images/services-filing.svg";
import annuties_src from "../images/services-annuties.svg";
import reporting_src from "../images/services-reporting.svg";

import Ready from "../components/ready";

const Intro = styled.section`
  overflow-x: hidden;
  padding-bottom: 120px;
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

const IntroInner = styled.div`
  padding: 120px 0;
`;

const IntroDesc = styled(TextBody)`
  margin: 0 auto;
  max-width: 600px;
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
    fill: rgba(255, 255, 255, 0.66);
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
`;

const Services = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <Intro>
        <IntroInner>
          <TitleLarge align="center" color={Colors.blue}>
            Create Better IP Assets
          </TitleLarge>
          <IntroDesc align="center" mb={16}>
            Our partner programs are designed for brokers, insurance carriers,
            affiliates, and technology providers who want to connect their
            networks with our modern HR solution. Find the program that works
            best for you
          </IntroDesc>
        </IntroInner>
      </Intro>
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
              <Flex align="center">
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
              <Flex align="center">
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
              <Flex align="center">
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
              <Flex align="center">
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
              <Flex align="center">
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
      </ServiceTabs>
      <Ready />
    </Layout>
  );
};

export default Services;
