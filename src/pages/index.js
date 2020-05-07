import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import styled from "styled-components";
import Colors from "../utils/colors";
import { Container, Flex, Col, Button, ButtonLink } from "../utils/elements";
import { platform, network, sun, arrow, support } from "../utils/icons";
import { StickyContainer, Sticky } from "react-sticky";
import system_src from "../images/system-white.svg";
import women_src from "../images/ready-women.png";

const Intro = styled.section`
  overflow: hidden;
  padding-bottom: 370px;
  position: relative;

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
`;

const TitleLarge = styled.h1`
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
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
  background: linear-gradient(35deg, ${Colors.lightBlue}, ${Colors.blue});
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 128px;
  }
`;

const LinkButton = styled(Link)`
  padding: 8px 16px;
  border-radius: 6px;
  border: 0;
  color: ${Colors.blue};
  background: ${Colors.gray};
  box-shadow: 5px 5px 10px #cdcdcd, -5px -5px 10px #ffffff;
  border: 1px solid transparent;
  transition: all 300ms ease;
  font-size: inherit;
  &:hover {
    border: 1px solid white;
    transition: all 300ms ease;
  }
`;

const Timeline = styled.div`
  margin-top: -370px;
`;

const TimelineControl = styled.div``;

const TimelineIntro = styled.div`
  min-height: 370px;
  margin-bottom: 64px;
`;

const TitleMedium = styled.h2`
  color: ${({ color }) => color};
`;

const TitleSmall = styled.h3`
  color: ${({ color }) => color};
`;

const TimelineDesc = styled.p`
  color: white;
`;

const TimelineImgWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
`;

const TimelineImgInner = styled.div`
  position: relative;
  /* padding-top: 70%; */
  padding-bottom: 164px;
`;

const TimelineImgItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: right;
`;

const TimelineImg = styled.img`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  width: auto;
  height: auto;
  margin-bottom: 0;
  padding-bottom: 120px;
  /*     
    transition: opacity 200ms ease-in-out; */
  opacity: 1;

  /* box-shadow: 0 24px 48px 0 rgba(174, 174, 186, 0.32); */
`;

const TimelineItem = styled.div`
  position: relative;
  padding-top: 4px;
  padding-left: 50px;
  padding-bottom: 164px;
  color: rgba(0, 0, 0, 0.33);

  &:before {
    content: "";
    position: absolute;
    top: 8px;
    left: 12px;
    z-index: -10;
    bottom: -8px;
    width: 2px;
    background: #e7e8ed;
  }

  &:last-child:before {
    display: none;
  }

  &:after {
    z-index: -10;
    content: "";
    position: absolute;
    top: 4px;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: #e7e8ed;
    border-radius: 50%;
    transform: scale(0.66);
    transform-origin: center;
  }

  &.active h3 {
    color: ${Colors.blue};
  }

  &.active p {
    color: ${Colors.text};
  }

  &.active:after {
    transform: scale(1);
    border: 6px solid #fff;
    background: ${Colors.orange};
    -webkit-box-shadow: 0 2px 4px 0 rgba(174, 174, 186, 0.48),
      0 8px 24px 0 rgba(174, 174, 186, 0.24);
    box-shadow: 0 2px 4px 0 rgba(174, 174, 186, 0.48),
      0 8px 24px 0 rgba(174, 174, 186, 0.24);
  }
`;

const TimelineItemContent = styled.div``;

const TimelineItemTitle = styled.h3`
  color: inherit;
`;

const TimelineItemDesc = styled.p`
  color: inherit;
`;

const StyledSun = styled(sun)`
  & path {
    fill: ${({ color }) => color};
  }
`;

const Breakdown = styled.section`
  padding-bottom: 370px;
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

const BreakdownInner = styled.div`
  padding-top: 120px;
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
  background: ${Colors.orange};
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

const DiagramCTA = styled(Link)`
  margin-top: 32px;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 6px;
  color: ${Colors.blue};
  background: ${Colors.gray};
  box-shadow: 5px 5px 10px #cdcdcd, -5px -5px 10px #ffffff;
  border: 2px solid transparent;
  transition: all 300ms ease;
  font-size: inherit;
  &:hover {
    border: 2px solid white;
    transition: all 300ms ease;
  }
`;

const Ready = styled.section`
  padding: 164px 0;
`;

const ReadyInner = styled.div`
  padding-top: 32px;
`;

// const ReadyItemWrapper = styled.div``;

const ReadyItem = styled.div`
  background: ${({ bg }) => bg};
  padding: 64px;
  position: relative;

  &.left {
    display: flex;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }

  &.right {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    color: white;
    text-align: center;
  }
`;

const ReadyItemImg = styled.img`
  display: block;
`;

const ReadyItemText = styled.div`
  position: relative;
  z-index: 2;
`;

const ReadyItemDesc = styled.p`
  padding-bottom: 16px;
`;

// const ReadyCTA = styled(Link)`
//   margin-top: 32px;
//   display: inline-block;
//   padding: 8px 16px;
//   border-radius: 6px;

//   border: 2px solid transparent;
//   transition: all 300ms ease;
//   font-size: inherit;

//   &.left {
//     color: ${Colors.blue};
//     background: ${Colors.gray};
//     box-shadow: 5px 5px 10px #cdcdcd, -5px -5px 10px #ffffff;
//     border: 2px solid white;
//   }

//   &.right {
//     color: white;
//     background: ${Colors.blue};
//     box-shadow: 5px 5px 16px #000014, -5px -5px 16px #000050;
//     border: 2px solid #000050;
//   }

//   /* &:hover {
//     border: 2px solid rgba(255, 255, 255, 0.3);
//     transition: all 300ms ease;
//   } */
// `;

const IndexPage = () => {
  // const [scrollBtm, setScrollBtm] = useState(null);
  // // let timelineItems = [];
  // // let timelineItemsY = {};
  // useEffect(() => {
  //   timelineItems = Array.from(document.getElementsByClassName("timelineItem"));
  //   // console.log(timelineItems);
  //   timelineItems.map((item, index) => {
  //     timelineItemsY[index] = item.offsetTop;
  //   });
  //   // timelineItems.map((item, index) => {
  //   //   timelineItemsY[index] = item.offsetTop;
  //   // });
  // }, []);

  // useEffect(() => {
  //   if (timelineItemsY[1] >= scrollBtm) {
  //     console.log("IDK");
  //   }
  //   console.log(scrollBtm);
  // }, [scrollBtm]);

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title="Create Better
      IP Assets, For Less"
        subtitle=""
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu scelerisque velit. Nullam lobortis pharetra finibus. Phasellus a aliquam enim, eget consectetur ipsum."
        link="/"
        linkText="Learn More"
      />
      <Intro>
        <IntroInner>
          <Container>
            <IntroLogo>
              <StyledSun color={"white"} />
            </IntroLogo>
            <TitleLarge color="white" align="center">
              A Brighter Way to Manage IP
            </TitleLarge>
          </Container>
        </IntroInner>
      </Intro>

      <Timeline>
        <Container>
          <StickyContainer>
            <Flex align="flex-start">
              <Col width="35%">
                <TimelineControl>
                  <TimelineIntro>
                    <TitleMedium color="white">How it works...</TitleMedium>
                    <TimelineDesc>
                      Our customers have been able to complete new hire
                      onboarding in under 10 minutes.
                    </TimelineDesc>
                  </TimelineIntro>
                  <TimelineItem className="timelineItem active">
                    <TimelineItemContent>
                      <TimelineItemTitle>Onboard</TimelineItemTitle>
                      <TimelineItemDesc>
                        We import your portfolio, verify data, and get you setup
                        with all your users, PTO integration, and centralized
                        mailbox
                      </TimelineItemDesc>
                    </TimelineItemContent>
                  </TimelineItem>
                  <TimelineItem className="timelineItem">
                    <TimelineItemContent>
                      <TimelineItemTitle>Monitor</TimelineItemTitle>
                      <TimelineItemDesc>
                        We monitor your dockets, filing deadlines, payment due
                        dates and all incoming/out correspondences
                      </TimelineItemDesc>
                    </TimelineItemContent>
                  </TimelineItem>
                  <TimelineItem className="timelineItem">
                    <TimelineItemContent>
                      <TimelineItemTitle>Execute</TimelineItemTitle>
                      <TimelineItemDesc>
                        We pay all annuities, file applications, coordinate
                        foreign associates, and keep your system up to date and
                        accurate
                      </TimelineItemDesc>
                    </TimelineItemContent>
                  </TimelineItem>
                  <TimelineItem className="timelineItem">
                    <TimelineItemContent>
                      <TimelineItemTitle>Report</TimelineItemTitle>
                      <TimelineItemDesc>
                        We provide you dockets, confirmations, filing receipts,
                        portfolio reports, and financials accessible 24x7
                      </TimelineItemDesc>
                    </TimelineItemContent>
                  </TimelineItem>
                </TimelineControl>
              </Col>
              <Col width="65%">
                <TimelineImgWrapper>
                  <TimelineImgInner>
                    {/* <Sticky topOffset={-340}>
                      {({
                        style,
                        isSticky,
                        distanceFromBottom,
                        distanceFromTop,
                      }) => {
                        if (isSticky) {
                          console.log(style);
                        }

                        return ( */}

                    {/* );
                      }}
                    </Sticky> */}
                    <TimelineImgItem>
                      <TimelineImg src={system_src} alt="helios system image" />
                    </TimelineImgItem>
                  </TimelineImgInner>
                </TimelineImgWrapper>
              </Col>
            </Flex>
          </StickyContainer>
        </Container>
      </Timeline>

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
                      <StyledSun color={Colors.blue} />
                    </DiagramLogo>
                  </DiagramInner>
                </BreakdownDiagram>
              </Col>
              <Col width="50%">
                <TitleLarge color={Colors.blue} align="left">
                  A truly integrated <br /> IP system
                </TitleLarge>
                <BreakdwonDesc>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor
                </BreakdwonDesc>
                <ButtonLink className="gray" to="/">
                  Why Helios
                </ButtonLink>
              </Col>
            </Flex>
          </Container>
        </BreakdownInner>
      </Breakdown>
      <Ready>
        <Container>
          <TitleLarge align="center">Ready?</TitleLarge>
          <ReadyInner>
            <Flex align="center" justify="space-between">
              <Col width="50%" noP>
                <ReadyItem bg={Colors.gray} className="left">
                  <Flex align="center" justify="flex-end">
                    <ReadyItemImg src={women_src} />
                    <ReadyItemText>
                      <TitleSmall color={Colors.blue}>Questions?</TitleSmall>
                      <ReadyItemDesc>
                        Ask us anything, or schedule a call.
                      </ReadyItemDesc>
                      <ButtonLink className="gray" to="/">
                        Lets talk
                      </ButtonLink>
                    </ReadyItemText>
                  </Flex>
                </ReadyItem>
              </Col>
              <Col width="50%" noP>
                <ReadyItem bg={Colors.blue} className="right">
                  <Flex justify="center">
                    <ReadyItemText>
                      <TitleSmall color="white">Interactive Demo</TitleSmall>
                      <ReadyItemDesc>
                        Explore your very own demo account.
                      </ReadyItemDesc>
                      <ButtonLink className="blue" to="/">
                        Sign up
                      </ButtonLink>
                    </ReadyItemText>
                  </Flex>
                </ReadyItem>
              </Col>
            </Flex>
          </ReadyInner>
        </Container>
      </Ready>
    </Layout>
  );
};

export default IndexPage;
