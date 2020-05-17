import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import styled from "styled-components";
import Colors from "../utils/colors";
import Ready from "../components/ready";
import {
  Container,
  Flex,
  Col,
  Button,
  ButtonLink,
  TitleLarge,
  TitleMedium,
  TitleSmall,
  Sun,
} from "../utils/elements";
import { platform, network, arrow, support } from "../utils/icons";
import Timeline from "../components/timeline";

const ArrowIcon = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  & svg {
    width: 24px;
    fill: ${Colors.blue};
  }
`;

const Breakdown = styled.section`
  padding-top: 300px;
  padding-bottom: 250px;
  position: relative;
  z-index: 1;
  background: ${Colors.gray};

  &:after {
    top: 0;
    left: 0;
    border-right: 100vw solid transparent;
    border-top: 15.625rem solid #fff;
    content: "";
    position: absolute;
    z-index: -1;
  }

  &:before {
    bottom: 0;
    right: 0;
    border-left: 100vw solid transparent;
    border-bottom: 15.625rem solid #fff;
    content: "";
    position: absolute;
    z-index: -1;
  }
`;

const BreakdownInner = styled.div`
  /* padding-top: 60px; */
`;

const BreakdwonDesc = styled.p`
  margin-bottom: 16px;
`;

const BreakdownDiagram = styled.div`
  position: relative;
`;

const DiagramLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DiagramInner = styled.div`
  width: 395px;
  height: 395px;
  position: relative;
  pointer-events: none;

  &.diagram-bg {
    display: block;
    width: 401px;
    height: 401px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  &.diagram-bg-path {
  }
`;

const DiagramIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${Colors.orange_sun};
  display: flex;
  align-items: center;
  justify-content: center;

  &.top-left {
    left: 30px;
    right: auto;
    top: 30px;
    bottom: auto;
  }

  &.top-right {
    right: 30px;
    left: auto;
    top: 30px;
    bottom: auto;
  }

  &.bottom-left {
    right: auto;
    left: 30px;
    top: auto;
    bottom: 30px;
  }

  &.bottom-right {
    right: 30px;
    left: auto;
    top: auto;
    bottom: 30px;
  }

  & svg {
    width: 32px;
    height: auto;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        subtitle=""
        description="Increase quality, improve efficiency, reduce costs. Industry leading SaaS platform integrated with expert global IP support services. Docketing, filing, maintenance and portfolio analytics in a monthly subscription.​"
        link="/why"
        linkText="Learn More"
      />
      <Timeline className="blue" />
      <Breakdown>
        <BreakdownInner>
          <Container>
            <Flex align="center" justify="space-between">
              <Col width="50%">
                <BreakdownDiagram>
                  <DiagramInner>
                    <svg
                      className="diagram-bg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="401"
                      height="401"
                      viewBox="0 0 401 401"
                    >
                      <path
                        className="diagram-bg-path"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#333e63"
                        strokeDasharray="4px"
                        strokeLinecap="round"
                        strokeWidth="2px"
                        d="M120.17 380.925c99.646 44.366 216.39-.448 260.755-100.095 44.366-99.646-.448-216.39-100.095-260.755-99.646-44.366-216.39.448-260.755 100.095-44.366 99.646.448 216.39 100.095 260.755z"
                        opacity=".1"
                      ></path>
                    </svg>
                    <DiagramIcon className="top-left">{platform}</DiagramIcon>
                    <DiagramIcon className="top-right">{network}</DiagramIcon>
                    <DiagramIcon className="bottom-left">{support}</DiagramIcon>
                    <DiagramIcon className="bottom-right">
                      {platform}
                    </DiagramIcon>
                    <DiagramLogo>
                      <Sun color={Colors.blue} />
                    </DiagramLogo>
                  </DiagramInner>
                </BreakdownDiagram>
              </Col>
              <Col width="50%">
                <TitleLarge color={Colors.blue} align="left">
                  All Inclusive <br />
                  Monthly Subscription
                  {/* Get the right tools and services for your business and your
                  team.​ */}
                </TitleLarge>
                <BreakdwonDesc>
                  Whether supporting your existing IP team, or introducing new
                  systems and support services, HeliosComplete™ offers a
                  flexible approach to augment and improve your current
                  operations.​
                </BreakdwonDesc>
                <ButtonLink className="gray" to="/pricing">
                  Pricing
                  <ArrowIcon>{arrow}</ArrowIcon>
                </ButtonLink>
              </Col>
            </Flex>
          </Container>
        </BreakdownInner>
      </Breakdown>
      <Ready title="Ready?" />
    </Layout>
  );
};

export default IndexPage;
