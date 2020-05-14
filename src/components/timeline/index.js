import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Colors from "../../utils/colors";
import {
  Container,
  Flex,
  Col,
  Button,
  ButtonLink,
  TitleLarge,
  TitleMedium,
  TitleSmall,
  TextBody,
  Sun,
  WatchVideo,
} from "../../utils/elements";
import { platform, network, sun, arrow, support } from "../../utils/icons";
import system_src from "../../images/system-white.svg";

const Intro = styled.section`
  overflow: hidden;
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

const StyledTimeline = styled.div`
  margin-top: -370px;
  margin-bottom: 60px;
`;

const TimelineControl = styled.div``;

const TimelineIntro = styled.div`
  min-height: 370px;
  margin-bottom: 64px;
`;

const TimelineDesc = styled.p`
  color: white;
`;

const TimelineImgWrapper = styled.div`
  /* position: relative;
  z-index: 10;
  flex: 1 1 auto; */
  flex: 1 1 auto;

  position: relative;
`;

const TimelineImgInner = styled.div`
  position: relative;
  padding-top: 70%;
  z-index: 10;
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
  /*     
    transition: opacity 200ms ease-in-out; */
  opacity: 1;

  /* box-shadow: 0 24px 48px 0 rgba(174, 174, 186, 0.32); */
`;

const TimelineItem = styled.div`
  position: relative;
  margin-left: 12px;
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
    background: ${Colors.orange_sun};
    -webkit-box-shadow: 0 2px 4px 0 rgba(174, 174, 186, 0.48),
      0 8px 24px 0 rgba(174, 174, 186, 0.24);
    box-shadow: 0 2px 4px 0 rgba(174, 174, 186, 0.48),
      0 8px 24px 0 rgba(174, 174, 186, 0.24);
  }
`;

const TimelineItemContent = styled.div``;

const TimelineItemTitle = styled.h3`
  white-space: nowrap;
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

const TimelineCTA = styled.div`
  margin-bottom: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 999px;
  padding: 4px 16px;
  color: ${Colors.blue};
  position: relative;

  /* &:after {
    position: absolute;
    content: "";
    z-index: -1;
    width: 24px;
    height: 24px;
    background: white;
    left: calc(50% - 12px);
    bottom: -8px;
    transform: rotate(-45deg);
  } */

  /* border: 1px solid white; */
`;

const Timeline = ({ withCTA }) => {
  const [scrollY, setScrollY] = useState(0);
  const [timelineItems, setTimelineItems] = useState(null);

  const [timelineWrapper, setTimelineWrapper] = useState({});
  const [timelineInner, setTimelineInner] = useState(null);
  const [timelineInnerBtm, setTimelineInnerBtm] = useState(null);
  const [timelineImg, setTimelineImg] = useState(null);

  // const [appear, setAppear] = useState(false);
  useEffect(() => {
    const items = Array.from(document.getElementsByClassName("timelineItem"));
    let temp = [];
    items.map(item => {
      temp.push({
        item: item,
        top: item.getBoundingClientRect().top,
        bottom: item.getBoundingClientRect().bottom,
      });
    });
    setTimelineItems(temp);
    const wrapper = document.getElementsByClassName("timelineWrapper")[0];
    const inner = document.getElementsByClassName("timelineInner")[0];
    const img = document.getElementsByClassName("timelineImg")[0];
    setTimelineWrapper({
      top: wrapper.getBoundingClientRect().top - 300,
      bottom: wrapper.getBoundingClientRect().bottom,
    });
    setTimelineInner(inner);
    setTimelineInnerBtm(inner.getBoundingClientRect().height);
    setTimelineImg(img);
  }, []);

  // useEffect(() => {
  //   console.log(timelineItems);
  // }, [timelineItems]);

  function logit() {
    setScrollY(window.pageYOffset);

    if (timelineWrapper.top <= scrollY) {
      timelineInner.style = `
          position: fixed;
          top: 300px;
          width: 716px;
        `;

      timelineItems.map(item => {
        if (item.top <= scrollY + timelineInnerBtm) {
          // console.log(scrollY + timelineInner.getBoundingClientRect().bottom);
          console.log("in Range");
          // console.log("Item Top: " + item.top);
          // console.log("Item Bottom: " + item.bottom);
          item.item.classList.add("active");
          if (item.bottom <= scrollY + timelineInnerBtm) {
            console.log("out range");
            item.item.classList.remove("active");
          }
        }
      });

      if (timelineWrapper.bottom <= scrollY + timelineInnerBtm + 300) {
        timelineInner.style = `
              position: absolute; 
              top: auto;
              width: 716px;
              bottom: 0px;
            `;
      }
    } else {
      timelineInner.style = ``;
    }
    console.log("Scroll Y: " + scrollY);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  // useEffect(() => {},[document.sc])

  return (
    <>
      <Intro>
        <IntroInner>
          <Container>
            {withCTA ? (
              <TimelineCTA>Version 2.0 Released</TimelineCTA>
            ) : (
              <IntroLogo>
                <Sun color="white" />
              </IntroLogo>
            )}

            {withCTA ? (
              <TitleLarge color="white" align="center">
                All in One
                <br />
                IP Operations Platform
              </TitleLarge>
            ) : (
              <TitleLarge color="white" align="center">
                A Brighter Way to Manage IP
              </TitleLarge>
            )}

            {withCTA ? <WatchVideo color="white" /> : null}
          </Container>
        </IntroInner>
      </Intro>

      <StyledTimeline>
        <Container>
          <Flex>
            <Col width="35%">
              <TimelineControl>
                <TimelineIntro>
                  <TitleMedium color="white">
                    {withCTA ? `How we integrate` : ` How it works`}
                  </TitleMedium>
                  <TextBody color="white">
                    {withCTA
                      ? `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore`
                      : ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor`}
                  </TextBody>
                </TimelineIntro>
                {withCTA ? (
                  <>
                    <TimelineItem className="timelineItem active">
                      <TimelineItemContent>
                        <TimelineItemTitle>All Your Matters</TimelineItemTitle>
                        <TimelineItemDesc>
                          Patents, Trademarks & Designs—In a Unified System
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>DocketHub™ </TimelineItemTitle>
                        <TimelineItemDesc>
                          Centralized Intake for All PTO, Law Firm, and Foreign
                          Associate Correspondences
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>DocketEngine™</TimelineItemTitle>
                        <TimelineItemDesc>
                          The Industry’s Most Advanced Global Docketing Rules
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>Renewal Payments</TimelineItemTitle>
                        <TimelineItemDesc>
                          Manage Maintenance Fees and Renewals Process with
                          Budgeting and Workflow Automation
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>
                          Application Filing
                        </TimelineItemTitle>
                        <TimelineItemDesc>
                          U.S. and Foreign Filing Managed in Structured Families
                          for Efficient Administration and Reporting
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>
                          Document Management
                        </TimelineItemTitle>
                        <TimelineItemDesc>
                          All Documents Stored in a Centralized Repository
                          powered by Microsoft Office 365™
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>
                          Business Intelligence
                        </TimelineItemTitle>
                        <TimelineItemDesc>
                          Gain Deep Insights with Intuitive Reports and
                          Beautiful Analytics
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                  </>
                ) : (
                  <>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>Onboard</TimelineItemTitle>
                        <TimelineItemDesc>
                          We import your portfolio, verify data, and get you
                          setup with all your users, PTO integration, and
                          centralized mailbox
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
                          foreign associates, and keep your system up to date
                          and accurate
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>Report</TimelineItemTitle>
                        <TimelineItemDesc>
                          We provide you dockets, confirmations, filing
                          receipts, portfolio reports, and financials accessible
                          24x7
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                  </>
                )}
              </TimelineControl>
            </Col>
            <Col width="65%" className="flex">
              <TimelineImgWrapper className="timelineWrapper">
                <TimelineImgInner className="timelineInner">
                  <TimelineImgItem className="timelineImg">
                    <TimelineImg src={system_src} alt="helios system image" />
                  </TimelineImgItem>
                </TimelineImgInner>
                {/* {appear ? (
                  <div
                    style={{
                      position: "relative",
                      width: "652.875px",
                      height: "457px",
                      display: "block",
                      verticalAlign: "baseline",
                      float: "none",
                    }}
                  ></div>
                ) : null} */}
              </TimelineImgWrapper>
            </Col>
          </Flex>
        </Container>
      </StyledTimeline>
    </>
  );
};

export default Timeline;
