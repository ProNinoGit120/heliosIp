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
} from "../utils/elements";
import { checkmark, plus } from "../utils/icons";

const Intro = styled.section`
  overflow-x: hidden;
  padding-bottom: 370px;
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
  margin-top: -370px;
`;

const PricingCard = styled.div`
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2),
    -10px -10px 30px rgba(0, 0, 0, 0.11);
  background: white;
  /* width: 100%; */
  border-radius: ${Size.radius * 2}px;
  border: 1px solid ${Colors.border};
`;

const CardHeader = styled.div`
  padding: 32px;

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
  border-bottom: 1px solid ${Colors.border};
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
                  <CardTitle>Value Portfolio</CardTitle>
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
                  <CardTitle>Value Portfolio</CardTitle>
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
          </Flex>
        </Container>
      </PricingCardsWrapper>
    </Layout>
  );
};

export default Pricing;
