import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import styled, { createGlobalStyle } from "styled-components";
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
import { platform, network, arrow, support, annuity } from "../utils/icons";
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
  padding-top: 340px;
  padding-bottom: 340px;
  position: relative;
  z-index: 1;
  background: ${Colors.gray};
  overflow-x: hidden;
  &:after {
    top: 0;
    left: 0;
    border-right: 100vw solid transparent;
    border-top: 15.625rem solid #fff;
    content: "";
    position: absolute;
    z-index: -1;
    @media (max-width: 991px) {
      border-right: 200vw solid transparent;
    }
    @media (max-width: 480px) {
      border-right: 200vw solid transparent;
      border-top: 6.625rem solid #fff;
    }
  }

  &:before {
    bottom: 0;
    right: 0;
    border-left: 100vw solid transparent;
    border-bottom: 15.625rem solid #fff;
    content: "";
    position: absolute;
    z-index: -1;
    @media (max-width: 991px) {
      border-left: 200vw solid transparent;
    }
    @media (max-width: 480px) {
      border-left: 200vw solid transparent;
      border-bottom: 6.625rem solid #fff;
    }
  }
  @media (max-width: 768px) {
    margin-top: -100px;
    padding-bottom: 200px;
  }
`;

const BreakdownInner = styled.div`
  /* padding-top: 60px; */
`;

const BreakdwonDesc = styled.p`
  margin-bottom: 16px;
  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 32px;
    padding: 0 10px;
  }
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
  @media (max-width: 991px) {
    width: 305px;
    height: 100%;
    margin: auto;
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
const GlobalStyleHome = createGlobalStyle`
.breakDown_flex {
  @media(max-width: 767px) {
    flex-direction:column !important;
    margin-top:-120px !important;
  }
  ${"" /* @media(max-width: 991px) {
    flex-direction:row;
  } */}
}
.leftBlock_breakdown{
  @media(max-width:767px){
    width:auto ;
    margin:50px 0 !important;
  }
  @media(max-width:991px){
    margin-bottom:100px;
  }
}
.rightBlock_breakdown{
  @media(max-width:767px){
    width:100%;
    margin:50px 0 !important;
    text-align:center;
  }
  @media(max-width:991px){
    width:100%;
    margin-bottom:100px;
  }
}

 .diagram-bg{
   @media(max-width:991px){
      width:100%;
    }
  }

  .top-left {
    @media(max-width:991px){
    left: 35px !important;
    top: 50px !important;
    }
  }

  .top-right {
      @media(max-width:991px){
        right: 35px !important ;
        top: 50px !important;
      }
  }

  .bottom-left {
    @media(max-width:991px){
      left: 35px !important;
      bottom: 50px !important;
    }
  }

  .bottom-right {
    @media(max-width:991px){
      right: 35px !important;
      bottom: 50px !important;
    }
  }

  .titleLarge{
    @media(max-width:767px){
      font-size:28px;
      text-align:center
    }
  }
  .diagramLogo{
    @media(max-width:991px){
      width:80px !important;
      height:80px !important;
    }
  }
`;

const IndexPage = () => {
  return (
    <Layout page="">
      <GlobalStyleHome />
      <SEO title="Home" />
      <Hero
        subtitle=""
        description="Increase quality, improve efficiency, reduce costs. Industry leading SaaS platform integrated with expert global IP support services. Docketing, filing, maintenance and portfolio analytics in a monthly subscription."
        link="/why"
        linkText="Learn More"
      />
      <Timeline className="blue" />
      <Breakdown>
        <BreakdownInner>
          <Container>
            <Flex
              align="center"
              justify="space-between"
              className="breakDown_flex"
            >
              <Col width="50%" className="leftBlock_breakdown">
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
                      {annuity}
                    </DiagramIcon>
                    <DiagramLogo>
                      <Sun color={Colors.blue} className="diagramLogo" />
                    </DiagramLogo>
                  </DiagramInner>
                </BreakdownDiagram>
              </Col>
              <Col width="50%" className="rightBlock_breakdown">
                <TitleLarge
                  color={Colors.blue}
                  align="left"
                  className="titleLarge"
                >
                  All Inclusive <br />
                  Monthly Subscription
                  {/* Get the right tools and services for your business and your
                  team. */}
                </TitleLarge>
                <BreakdwonDesc>
                  Whether supporting your existing IP team, or introducing new
                  systems and support services, HeliosComplete™ offers a
                  flexible approach to augment and improve your current
                  operations.
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
      <Ready title="Ready to Get Started?" />
    </Layout>
  );
};

export default IndexPage;
