import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import styled from "styled-components";
import Colors from "../utils/colors";
import { Container, Icons, Flex, Col } from "../utils/elements";
import { StickyContainer, Sticky } from "react-sticky";
import system_src from "../images/system-white.svg";

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

const IntroTitle = styled.h1`
  color: white;
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
  background: linear-gradient(35deg, ${Colors.lightBlue}, ${Colors.blue});
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 128px;
  }
`;

const Breakdown = styled.section`
  padding: 164px 32px;
  /* background: ${Colors.gray}; */
`;

const BreakdownIntroTitle = styled.h1`
  text-align: center;
  margin-bottom: 64px;
`;

// const BreakdownWrapper = styled.div`
//  display: flex;
//  flex-direction: column;
//   width: 100%;
//   max-width: ${Sizes.maxWidth}px;
//   margin: 0 auto;

// `;

const BreakdownRow = styled.div`
  padding: 0 64px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  box-shadow: -10px 10px 71px #e0e0e0, 10px -10px 71px #ffffff;
  background: ${Colors.light};
  /* border-bottom: 1px solid white; */
  border: 1px solid white;
  margin-bottom: 64px;
  /* 
  &:nth-of-type(even) {
    margin-left: 16px;
  }

  &:nth-of-type(odd) {
    margin-right: 16px;
  } */
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

const TimelineTitle = styled.h2`
  color: white;
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
  padding-top: 70%;
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

    bottom: -8px;
    width: 2px;
    background: #e7e8ed;
  }

  &:after {
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

const IndexPage = () => {
  const [scrollBtm, setScrollBtm] = useState(null);
  let timelineItems = [];
  let timelineItemsY = {};
  useEffect(() => {
    timelineItems = Array.from(document.getElementsByClassName("timelineItem"));
    // console.log(timelineItems);
    timelineItems.map((item, index) => {
      timelineItemsY[index] = item.offsetTop;
    });
    // timelineItems.map((item, index) => {
    //   timelineItemsY[index] = item.offsetTop;
    // });
  }, []);

  // useEffect(() => {
  //   if (timelineItemsY[0] >= scrollBtm) {
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
            <IntroLogo>{Icons.sun}</IntroLogo>
            <IntroTitle>A Brighter Way to Manage IP</IntroTitle>
          </Container>
        </IntroInner>
      </Intro>
      <StickyContainer>
        <Timeline>
          <Container>
            <Flex align="flex-start">
              <Col width="35%">
                <TimelineControl>
                  <TimelineIntro>
                    <TimelineTitle>How it works...</TimelineTitle>
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
                  <Sticky topOffset={-340}>
                    {({ style, isSticky }) => {
                      return (
                        <TimelineImgInner
                          style={{
                            ...style,
                            top: `${isSticky ? `340px` : ``}`,
                          }}
                        >
                          <TimelineImgItem>
                            <TimelineImg
                              src={system_src}
                              alt="helios system image"
                            />
                          </TimelineImgItem>
                        </TimelineImgInner>
                      );
                    }}
                  </Sticky>
                </TimelineImgWrapper>
              </Col>
            </Flex>
          </Container>
        </Timeline>
      </StickyContainer>

      {/* <Breakdown>
      <BreakdownIntroTitle>Outsource Your IP Needs</BreakdownIntroTitle>
      <Container></Container>
    </Breakdown> */}
    </Layout>
  );
};

export default IndexPage;
