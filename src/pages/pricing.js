import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Size from "../utils/size";
import Colors from "../utils/colors";
import {
  Container,
  Flex,
  Col,
  TitleXLarge,
  TitleLarge,
  TitleMedium,
  TextBody,
  Sun,
  TitleSmall,
} from "../utils/elements";
import { checkmark, plus, filing, money, ids } from "../utils/icons";
import Ready from "../components/ready";

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
  }
`;

const IntroInner = styled.div`
  padding: 120px 0;
  text-align: center;
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
  margin-top: -420px;
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
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`;

const CardSubHeader = styled.div`
  padding: 32px 64px;
  border-bottom: 1px solid ${Colors.gray};
`;

const CardButton = styled.button`
  border: 3px solid white;
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
  border: 1px solid ${Colors.border};
  svg {
    width: 24px;
  }
`;

const SupportWrapper = styled.section`
  padding: 164px 0;
`;

const SupportIntro = styled.div`
  padding-left: 32px;
`;

const SupportCards = styled.div``;

const SupportCard = styled.div`
  border: 1px solid ${Colors.gray};
  padding: 32px;
  border-radius: 12px;
  box-shadow: 41px 41px 82px #d9d9d9, -41px -41px 82px #ffffff;
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

  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${Colors.orange_sun};
  margin-bottom: 16px;
  & svg {
    width: 100%;
  }
`;

const Pricing = () => {
  return (
    <Layout>
      <SEO title="Pricing" />
      <Intro>
        <IntroInner>
          <Container>
            <IntroLogo>
              <Sun color="white" />
            </IntroLogo>

            <TitleLarge color="white" align="center">
              Choose the plan that’s right for you.
            </TitleLarge>
          </Container>
        </IntroInner>
      </Intro>
      <PricingCardsWrapper>
        <Container>
          <Flex align="flex-start">
            <Col width="50%">
              <PricingCard>
                <CardHeader>
                  <CardTitle>SMB Portfolio​</CardTitle>
                </CardHeader>

                <CardSubHeader>
                  <Flex direction="column" align="center">
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
                  <CardButton>Get Started</CardButton>
                </CardFooter>
              </PricingCard>
            </Col>
            <Col width="50%">
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
                  <CardButton>Get Started</CardButton>
                </CardFooter>
              </PricingCard>
            </Col>
          </Flex>
        </Container>
      </PricingCardsWrapper>
      <SupportWrapper>
        <Container>
          <SupportIntro>
            <TitleLarge mb={8}>Added Support Services</TitleLarge>
            <TextBody mb={64}>
              Optional transactional support services monitored and executed on
              your instructions​
            </TextBody>
          </SupportIntro>
          <SupportCards>
            <Flex>
              <Col width={`calc(100% / 3)`}>
                <SupportCard>
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{filing}</SupportIcon>
                    <SupportInfo>i</SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>U.S. Filing​</TitleSmall>
                  <TextBody mb={16}>
                    For U.S. applications, manage all steps in the filing
                    process including: preparation of ADS; POA and inventor
                    declarations; assignments; organize electronic filing
                    package; upload to EFS system; pay and invoice official
                    fees; save documents and confirmation receipts; docket all
                    actions/tasks​
                  </TextBody>
                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$75</strong> / filing
                  </TextBody>
                </SupportCard>
              </Col>
              <Col width={`calc(100% / 3)`}>
                <SupportCard>
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{money}</SupportIcon>
                    <SupportInfo>i</SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>Renewals</TitleSmall>
                  <TextBody mb={16}>
                    Monitor due dates; manage foreign associate instructions;
                    pay and invoice official fees and agent fees; save documents
                    and confirmation receipts; docket actions/tasks. For
                    trademarks prepare and file SOU’s and other required
                    formalities.
                  </TextBody>
                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$35</strong> per payment​
                  </TextBody>
                </SupportCard>
              </Col>
              <Col width={`calc(100% / 3)`}>
                <SupportCard>
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{ids}</SupportIcon>
                    <SupportInfo>i</SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>IDS Filing</TitleSmall>
                  <TextBody mb={16}>
                    Prepare and file Information Disclosure Statement based on
                    references provided by client including: preparation of form
                    SB08; collect and organize included reference materials;
                    prepare electronic filing documentation; pay and invoice
                    official fees and agents costs; save documents and
                    confirmation receipts; docket all actions/tasks​
                  </TextBody>
                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$75</strong> per IDS​
                  </TextBody>
                </SupportCard>
              </Col>
            </Flex>
            <Flex>
              <Col width={`calc(100% / 3)`}>
                <SupportCard>
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{filing}</SupportIcon>
                    <SupportInfo>i</SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>Office Actions​</TitleSmall>
                  <TextBody mb={16}>
                    Manage office action response filings including: receive and
                    coordinate foreign counsel reporting; monitor and coordinate
                    response due dates; manage foreign associate instructions;
                    prepare filing documentation including formalities; pay and
                    invoice official fees and agents costs; save documents and
                    confirmation receipts; docket all actions/tasks​
                  </TextBody>
                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$75</strong> / filing
                  </TextBody>
                </SupportCard>
              </Col>
              <Col width={`calc(100% / 3)`}>
                <SupportCard>
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{money}</SupportIcon>
                    <SupportInfo>i</SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>Foreign Filing​</TitleSmall>
                  <TextBody mb={16}>
                    Monitor and coordinate filing deadlines; manage foreign
                    associate instructions; prepare filing documentation
                    including formalities and translations; pay and invoice
                    official fees and agents costs; save documents and
                    confirmation receipts; docket all actions/tasks
                  </TextBody>
                  <TextBody color={`rgba(0,0,0,.33)`}>
                    ​ Flat rate per country
                  </TextBody>
                </SupportCard>
              </Col>
              <Col width={`calc(100% / 3)`}>
                <SupportCard>
                  <Flex align="flex-start" justify="space-between">
                    <SupportIcon>{ids}</SupportIcon>
                    <SupportInfo>i</SupportInfo>
                  </Flex>
                  <TitleSmall mb={12}>Formalities​</TitleSmall>
                  <TextBody mb={16}>
                    Prepare and file formalities documents(s) including:
                    preparation of assignment, correction of inventorships: POA
                    forms; coordinate signatures; manage foreign associate
                    instructions; pay and invoice official fees and agent costs;
                    save documents and confirmation receipts; docket all
                    actions/tasks​
                  </TextBody>
                  <TextBody color={`rgba(0,0,0,.33)`}>
                    Starting at <strong>$75</strong> per IDS​
                  </TextBody>
                </SupportCard>
              </Col>
            </Flex>
          </SupportCards>
        </Container>
      </SupportWrapper>
      <Ready />
    </Layout>
  );
};

export default Pricing;
