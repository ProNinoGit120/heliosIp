import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "../components/layout";
import EmbedVideo from "../components/video";
import SEO from "../components/seo";
import { play, arrow } from "../utils/icons";
import Colors from "../utils/colors";
import platform_src from "../images/platform.svg";
import services_src from "../images/services.svg";
import network_src from "../images/network.svg";
import budget_src from "../images/budget.svg";
import video_src from "../images/why-video.svg";
import {
  TitleLarge,
  TitleMedium,
  TextBody,
  Flex,
  Col,
  Container,
  ButtonLink,
  WatchVideo,
} from "../utils/elements";
import Ready from "../components/ready";

const GlobalStyleWhy = createGlobalStyle`
  .titleLarge_h1{
    @media(max-width:991px){
      font-size:32px;
    }
  }
  .titleMedium_why{
    @media(max-width:767px){
      font-size:32px;
      text-align:center;
    }
  }

  .why_flex{
    @media(max-width:767px){
      flex-direction:column !important;
    }
  }

  .leftBlock_why{
    @media(max-width: 767px) {
      width:100%;
      margin-bottom:15px;
      text-align:center;
    } 
  }

  .rightBlock_why{
    @media(max-width: 767px) {
      width:100%;
      text-align:center;
    } 
  }
`;

const Intro = styled.section`
  overflow: hidden;
  padding-bottom: 400px;
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
    @media (max-width: 991px) {
      height: 50%;
    }
  }
`;

const IntroInner = styled.div`
  padding: 120px 0;
  @media (max-width: 991px) {
    padding: 75px 0;
  }
`;

const IntroDesc = styled(TextBody)`
  font-size: 24px;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

const Video = styled.div`
  margin-top: -490px;
  @media (max-width: 991px) {
    margin-top: -350px;
  }
`;

const VideoWrapper = styled.div`
  padding-top: 32px;
  width: 100%;
  /* margin-top: -50px; */
  @media (max-width: 991px) {
    padding: 15px;
  }
`;

const VideoInner = styled.div`
  position: relative;
  border-radius: 12px;
  box-shadow: 0 24px 48px 0 rgba(174, 174, 186, 0.32);
`;

const VideoImg = styled.img`
  opacity: ${({ isPlaying }) => (isPlaying ? `0` : `1`)};
  max-width: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  z-index: 1;
  margin-bottom: 0;
  border-radius: 12px;
`;

const VideoBtn = styled.div`
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 128px;
  background: ${Colors.orange};

  opacity: ${({ isPlaying }) => (isPlaying ? `0` : `1`)};
  visibility: ${({ isPlaying }) => (isPlaying ? `hidden` : `visible`)};
  transition: all 0.5s ease;
  @media (max-width: 767px) {
    width: 90px;
    height: 90px;
  }
  & svg {
    fill: white;
    width: 48px;
    height: 48px;
    @media (max-width: 991px) {
      margin-left: 10px;
    }
  }
`;

const VideoSrc = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
`;

const Difference = styled.section`
  padding: 120px 0;
  margin-bottom: -120px;
  @media (max-width: 991px) {
    padding: 60px 0;
  }
`;

const DifferenceIntro = styled.div`
  padding-bottom: 64px;
`;

const DifferenceItem = styled.section`
  position: relative;
  z-index: 1;

  /* &.slant {
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
  } */
  &.slant {
    background: ${Colors.blue};
    padding-top: 340px;
    padding-bottom: 340px;
    color: white;
  }
  @media(max-width:767px){
    padding: 150px 0 !important;
  }

  &:after {
    top: 0;
    left: 0;
    border-right: 100vw solid transparent;
    border-top: 15.625rem solid #fff;
    content: '';
    position: absolute;
    z-index: -1;
    @media(max-width:767px){
      border-top: 6.625rem solid #fff;
    }
  }

  &:before {
    bottom: 0;
    right: 0;
    border-left: 100vw solid transparent;
    border-bottom: 15.625rem solid #fff;
    content: '';
    position: absolute;
    z-index: -1;
     @media(max-width:767px){
      border-bottom: 6.625rem solid #fff;
    }
  }
`;

const DifferenceInner = styled.div`
  /* padding-top: 60px; */
  @media (max-width: 991px) {
    margin: 50px 0;
  }
`;

const DifferenceImg = styled.img`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const DifferenceDesc = styled.p`
  margin-bottom: 32px;
`;

const ArrowIcon = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  & svg {
    width: 24px;
    fill: ${({ color }) => (color ? `${color}` : `${Colors.blue}`)};
  }
`;

const Why = () => {
  const videoRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const handleVideoPlay = () => {
    setPlaying(!isPlaying);
  };

  // if (isPlaying) {
  //   video.pause();
  // } else {
  //   video.play();
  // }

  return (
    <>
      <GlobalStyleWhy />
      <Layout>
        <SEO title="Why" />
        <Intro>
          <IntroInner>
            <TitleLarge
              align="center"
              color={Colors.blue}
              className="titleLarge_h1"
            >
              Level Up Your IP Operations
            </TitleLarge>
            <IntroDesc align="center" mb={16} large>
              Our fully integrated, easy-to-use platform makes IP operations
              painless
            </IntroDesc>
            <WatchVideo color={Colors.orange} />
          </IntroInner>
        </Intro>
        <Video>
          <VideoWrapper>
            <Container>
              <VideoInner>
                <VideoImg isPlaying={isPlaying} src={video_src} />
                <EmbedVideo videoFoam={isPlaying} />
                {/* <VideoSrc
                  ref={videoRef}
                  onEnded={() => {
                    setPlaying(false);
                  }}
                  loop={false}
                  muted={true}
                  width="1120"
                  height="648"
                  src="https://www.zenefits.com/wp-content/themes/zenefits-website/dist/img/payroll/payroll.mp4"
                ></VideoSrc> */}
                <VideoBtn
                  isPlaying={isPlaying}
                  role="button"
                  onClick={() => {
                    handleVideoPlay();
                  }}
                >
                  {play}
                </VideoBtn>
              </VideoInner>
            </Container>
          </VideoWrapper>
        </Video>
        <Difference>
          {/* <DifferenceIntro>
          <TitleLarge align="center">How we're Different</TitleLarge>
          <TextBody align="center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy{" "}
          </TextBody>
        </DifferenceIntro> */}
          <DifferenceItem>
            <DifferenceInner>
              <Container>
                <Flex
                  align="center"
                  justify="space-between"
                  className="why_flex"
                >
                  <Col width="50%" className="leftBlock_why">
                    <DifferenceImg src={platform_src} />
                  </Col>
                  <Col width="50%" className="rightBlock_why">
                    <TitleMedium
                      color={Colors.blue}
                      align="left"
                      className="titleMedium_why"
                    >
                      Leading Platform
                    </TitleMedium>
                    <DifferenceDesc>
                      Manage all your information in the industry’s most
                      complete IP system. Full lifecycle management for patents,
                      trademarks and designs, with global country rules,
                      document management, advanced analytics, and PTO
                      integration. Built on the Microsoft® platform, with
                      enterprise-class performance and integrated to O365,
                      Outlook, Sharepoint and Teams.​
                    </DifferenceDesc>
                    <ButtonLink className="white" to="/platform">
                      Platform
                      <ArrowIcon>{arrow}</ArrowIcon>
                    </ButtonLink>
                  </Col>
                </Flex>
              </Container>
            </DifferenceInner>
          </DifferenceItem>
          <DifferenceItem className="slant">
            <DifferenceInner>
              <Container>
                <Flex
                  align="center"
                  justify="space-between"
                  className="why_flex"
                >
                  <Col width="50%" className="leftBlock_why">
                    <TitleMedium
                      color="white"
                      align="left"
                      className="titleMedium_why"
                    >
                      Support Services
                    </TitleMedium>
                    <DifferenceDesc>
                      Manage all your information in the industry’s most
                      complete IP system. Full lifecycle management for patents,
                      trademarks and designs, with global country rules,
                      document management, advanced analytics, and PTO
                      integration. Built on the Microsoft® platform, with
                      enterprise-class performance and integrated to O365,
                      Outlook, Sharepoint and Teams.​
                    </DifferenceDesc>
                    <ButtonLink className="blue" to="/services">
                      Services
                      <ArrowIcon color="white">{arrow}</ArrowIcon>
                    </ButtonLink>
                  </Col>
                  <Col width="50%" className="rightBlock_why">
                    <DifferenceImg src={services_src} />
                  </Col>
                </Flex>
              </Container>
            </DifferenceInner>
          </DifferenceItem>
          <DifferenceItem>
            <DifferenceInner>
              <Container>
                <Flex
                  align="center"
                  justify="space-between"
                  className="why_flex"
                >
                  <Col width="50%" className="leftBlock_why">
                    <DifferenceImg src={network_src} />
                  </Col>
                  <Col width="50%" className="rightBlock_why">
                    <TitleMedium
                      color={Colors.blue}
                      align="left"
                      className="titleMedium_why"
                    >
                      Global Network
                    </TitleMedium>
                    <DifferenceDesc>
                      The Helios IP Network (HIPN) provides US law firms and IP
                      departments simple, easy-to-use access to our preferred
                      foreign associates and agents, at pre-negotiated, most
                      favored rates. Clients work directly with foreign
                      associates, while Helios coordinates docketing, documents,
                      office actions, POA’s and other support activities. Helios
                      also manages foreign associate invoicing to ensure
                      financial accuracy and accountability.​
                    </DifferenceDesc>
                    <ButtonLink className="white" to="/">
                      Network
                      <ArrowIcon>{arrow}</ArrowIcon>
                    </ButtonLink>
                  </Col>
                </Flex>
              </Container>
            </DifferenceInner>
          </DifferenceItem>
          <DifferenceItem className="slant">
            <DifferenceInner>
              <Container>
                <Flex
                  align="center"
                  justify="space-between"
                  className="why_flex"
                >
                  <Col width="50%" className="leftBlock_why">
                    <TitleMedium
                      color="white"
                      align="left"
                      className="titleMedium_why"
                    >
                      Flexible Budget
                    </TitleMedium>
                    <DifferenceDesc>
                      The HeliosComplete™ subscription pricing provides
                      transparency and predictability in setting your
                      operational budget. Our base platform subscription
                      provides a cost-effective foundation on which to build the
                      support activities you need today, with the flexibility to
                      adapt as your requirements change. ​
                    </DifferenceDesc>
                    <ButtonLink className="blue" to="/pricing">
                      Pricing
                      <ArrowIcon color="white">{arrow}</ArrowIcon>
                    </ButtonLink>
                  </Col>
                  <Col width="50%" className="rightBlock_why">
                    <DifferenceImg src={budget_src} />
                  </Col>
                </Flex>
              </Container>
            </DifferenceInner>
          </DifferenceItem>
        </Difference>
        <Ready title="Get Tangible Results" />
      </Layout>
    </>
  );
};

export default Why;
