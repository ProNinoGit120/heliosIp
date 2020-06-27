import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import useWindowSize from "../layout/useWindowSize";
import styled, { createGlobalStyle } from "styled-components";
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
import {
  TIMELINE_ONBOARD,
  TIMELINE_MONITOR,
  TIMELINE_EXECUTE,
  TIMELINE_REPORT,
} from "../../constants";
import Slider from "react-slick";
import { findDOMNode } from "react-dom";

const Intro = styled.section`
  padding-bottom: 370px;
  position: relative;
  z-index: -2;
  overflow-x: hidden;
  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    background: ${Colors.blue_sun};
    transform: rotate(-9.5deg);
    z-index: -1;
    transform-origin: left bottom;

    @media (max-width: 767px) {
      height: 60%;
      margin-bottom: 15px;
    }
  }
`;
const GlobalStyleTimeline = createGlobalStyle`
    @media(max-width: 991px) {
      .slideImage img {
        width: 90%;
        margin: 0 auto 1.66rem; 
      }
      .slick-dots {
        list-style: none;
        padding: 0 16px;
        margin: -50px 0 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        z-index: 1;
        text-align: left;
      }

      .slick-dots li {
        margin-right: 20px;
      }
      
      .slick-dots li button {
        padding: 0;
        margin: 0;
        overflow: hidden;
        background: rgba(170,170,199,0.28);
        width: 32px;
        height: 2px;
        text-indent: -5000px;
        -webkit-transition: background .2s;
        -o-transition: background .2s;
        transition: background .2s;
        border: 0;
      }

      .slick-dots li button:before {
        display: none;
      }

      .slick-dots li.slick-active button {
        background: #f16322;
      }
    }

    .timelineItem {
      @media(max-width: 991px) {
        height: 0;
        overflow: hidden;
        transition: height 2s ease-in !important;
        &.active {
         height: auto;
        }
      }
    }
    .timeline_medium .body{
      @media(max-width:767px){
          color:black !important;
          font-size:18px !important;
          
          
        }
    }
    .titleLarge_timeline{
      @media(max-width:991px){
        font-size:28px !important;
        padding: 0 14px !important;
      }
    }

    .timeline_flex {
      @media(max-width: 991px) { 
        flex-direction: column !important;
      }
    }

    .leftBlock_timeline {
      @media(max-width: 991px) { 
        width: 100%;
        margin: 0 0 20px;
        padding:0px 25px;
        text-align:center;
      }
    }
    .rightBlock_timeline {
      @media(max-width: 991px) { 
        width: 100%;
      }
    }

    .title_medium{
      @media(max-width:767px){
        color:black !important;
        padding:0 10px !important;
       
      }
    }

    .timelineContent {
      opacity: 0!important;
      transition: opacity 2s ease-in !important;
    }

    .slick-active .timelineContent {
      opacity: 1 !important;
    }

  `;
const IntroInner = styled.div`
  padding: 120px 0;
  text-align: center;
  @media (max-width: 767px) {
    padding: 60px 0;
  }
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
  @media (max-width: 767px) {
    margin-top: -250px;
  }
`;

const TimelineControl = styled.div``;

const TimelineIntro = styled.div`
  min-height: 370px;
  margin-bottom: 64px;
  @media (max-width: 480px) {
    margin-top: 15px !important;
  }
  @media (max-width: 991px) {
    min-height: 150px;
    margin-bottom: 25px;
    text-align: center;
    min-height: auto;
  }
`;

const TimelineDesc = styled.p`
  color: white;
`;

const TimelineImg = styled.img`
  position: sticky;
  top: 30%;
`;

const TimeLineItemWrapper = styled.div`
  position: relative;
  @media (max-width: 991px) {
    padding: 50px 0 20px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-top: 4px;
  padding-left: 50px;
  padding-bottom: 164px;
  /* color: rgba(0, 0, 0, 0.33); */

  @media(max-width: 991px) {
    padding: 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 8px;
    left: 12px;
    z-index: -10;
    bottom: -8px;
    width: 2px;
    background: #e7e8ed;
    @media(max-width: 991px) {
      display: none;
    }
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
    transition: all 0.5s ease-out;
    @media(max-width: 991px) {
      display: none;
    }
  }

  h3,
  p {
    
  }

  &>div {
    opacity: .33;
    transition: all 0.5s ease-out;
  }

  &.active > div {
    opacity: 1;
    transition: all 0.5s ease-out;
  }

  /* &.active h3 {
    color: ${Colors.blue};
  }

  &.active p {
    color: ${Colors.text};
  } */

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

const StyledLink = styled(Link)`
  margin-top: 16px;
  display: block;
  font-family: "Roboto", sans-serif;
  color: ${Colors.orange};
`;

const Timeline = ({ withCTA }) => {
  const [timelineActiveIndex, setTimelineActiveIndex] = useState(-1);
  const windowSize = useWindowSize();

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    afterChange: current => {
      console.log("current", current);
      let timelineItem = Array.from(
        document.getElementsByClassName("timelineItem")
      );
      timelineItem.forEach((timelineItem, index) => {
        timelineItem.classList.remove("active");
        if (current === index) {
          timelineItem.classList.add("active");
        }
      });
      setTimelineActiveIndex(current);
    },
  };

  const onScroll = () => {
    // calc position y of timeline image
    const timelineImageElement = document.getElementsByClassName(
      "timelineImg"
    )[0];
    if (windowSize > 991) {
      const timelineImageBoundingRect = timelineImageElement.getBoundingClientRect();
      const timelineImagePosY =
        (timelineImageBoundingRect.top + timelineImageBoundingRect.bottom) / 2;
      const timelineImageHeight = Math.abs(
        timelineImageBoundingRect.top - timelineImageBoundingRect.bottom
      );
      // get nearest timeline item index
      let nearestIndex = 0,
        nearestDistance = -1;
      const timelineItems = Array.from(
        document.getElementsByClassName("timelineItem")
      );
      console.log(timelineItems);

      timelineItems.forEach((timelineItem, index) => {
        // calc distance to timeline image
        const timelineItemBoundingRect = timelineItem.getBoundingClientRect();
        const timelineItemPosY = timelineItemBoundingRect.top;
        const distance = Math.abs(timelineItemPosY - timelineImagePosY);
        if (nearestDistance < 0 || distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      // display start image
      if (
        (timelineActiveIndex < 0 &&
          nearestDistance > timelineImageHeight / 3) ||
        (timelineActiveIndex === 0 &&
          timelineItems[0].getBoundingClientRect().top - timelineImagePosY >
            timelineImageHeight / 3)
      ) {
        nearestIndex = -1;
      }

      // update active status if nearest one was changed
      if (timelineActiveIndex !== nearestIndex) {
        timelineItems.forEach((timelineItem, index) => {
          if (nearestIndex === index) {
            timelineItem.classList.add("active");
          }
          if (timelineActiveIndex === index) {
            timelineItem.classList.remove("active");
          }
        });

        // update active index
        setTimelineActiveIndex(nearestIndex);
      }
    }
  };

  const getTimelineImage = () => {
    let timelineSVG = "";
    switch (timelineActiveIndex) {
      case TIMELINE_ONBOARD:
        timelineSVG = "oboard";
        break;
      case TIMELINE_MONITOR:
        timelineSVG = "monitor";
        break;
      case TIMELINE_EXECUTE:
        timelineSVG = "execute";
        break;
      case TIMELINE_REPORT:
        timelineSVG = "report";
        break;
      default:
        timelineSVG = "start";
    }
    console.log("#timelineSVG", timelineSVG);
    return require(`../../images/timeline/${timelineSVG}.svg`);
  };

  // slider images
  // let names = ['execute', 'monitor', 'oboard', 'report'];
  let timelineItem = Array.from(
    document.getElementsByClassName("timelineItem")
  );
  let images = timelineItem.map((name, id) => {
    return (
      <div key={id} className="slideImage">
        {/* <img
            src = {
              getTimelineImage()
            }
            alt = ""
            className="img-responsive" /> */}
        <TimelineImg
          className="timelineImg"
          src={getTimelineImage()}
          alt="helios system image"
          className="img-responsive"
        />
      </div>
    );
  });

  return (
    <>
      <GlobalStyleTimeline />
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
              <TitleLarge
                color="white"
                align="center"
                classaName="titleLarge_timeline"
              >
                All in One
                <br />
                IP Operations Platform
              </TitleLarge>
            ) : (
              <TitleLarge
                color="white"
                align="center"
                className="titleLarge_timeline"
              >
                A Brighter Way to Manage IP
              </TitleLarge>
            )}

            {withCTA ? <WatchVideo color="white" /> : null}
          </Container>
        </IntroInner>
      </Intro>

      <StyledTimeline>
        <Container>
          <Flex className="timeline_flex">
            <Col width="40%" className="leftBlock_timeline">
              <TimelineControl>
                <TimelineIntro>
                  <TitleMedium color="white" className="title_medium">
                    {withCTA
                      ? `At Last— A Real​ IP Operations​ SaaS Solution​`
                      : ` How It Works`}
                  </TitleMedium>
                  <TextBody color="white" className="title_medium body">
                    {withCTA
                      ? null
                      : `HeliosComplete™ makes it easy to onboard, monitor, execute, and report on all aspects of your IP operations.`}
                  </TextBody>
                </TimelineIntro>
                {/* Image slider for mobile */}
                {windowSize < 991 ? (
                  <>
                    <Slider {...settings}>{images}</Slider>
                  </>
                ) : null}
                {withCTA ? (
                  <>
                    <TimeLineItemWrapper>
                      <TimelineItem className="timelineItem">
                        <TimelineItemContent>
                          <TimelineItemTitle>
                            All Your Matters
                          </TimelineItemTitle>
                          <TimelineItemDesc>
                            Patents, Trademarks & Designs, with full
                            bibliographic information plus priorities, family
                            tree, references, inventors, assignments, contacts,
                            and categories
                          </TimelineItemDesc>
                        </TimelineItemContent>
                      </TimelineItem>
                      <TimelineItem className="timelineItem">
                        <TimelineItemContent>
                          <TimelineItemTitle>DocketHub™ </TimelineItemTitle>
                          <TimelineItemDesc>
                            Centralized Intake for all PTO, law firm, and
                            foreign associate correspondences, with electronic
                            interfaces to ensure accuracy and timeliness of data
                            transfer​
                          </TimelineItemDesc>
                        </TimelineItemContent>
                      </TimelineItem>
                      <TimelineItem className="timelineItem">
                        <TimelineItemContent>
                          <TimelineItemTitle>DocketEngine™</TimelineItemTitle>
                          <TimelineItemDesc>
                            The Industry’s most advanced global docketing rules
                            covering 275 jurisdictions, 4,000 rules and 80,000
                            outcomes, with integration to PTO prosecution data​
                          </TimelineItemDesc>
                        </TimelineItemContent>
                      </TimelineItem>
                      <TimelineItem className="timelineItem">
                        <TimelineItemContent>
                          <TimelineItemTitle>
                            Renewal Payments
                          </TimelineItemTitle>
                          <TimelineItemDesc>
                            Manage maintenance fees and renewals process with
                            budgeting and workflow automation that works
                            seamlessly with Helios IP support services​
                          </TimelineItemDesc>
                        </TimelineItemContent>
                      </TimelineItem>
                      <TimelineItem className="timelineItem">
                        <TimelineItemContent>
                          <TimelineItemTitle>
                            Application Filing
                          </TimelineItemTitle>
                          <TimelineItemDesc>
                            U.S. and Foreign Filing to monitor due dates, track
                            instructions and manage filing process with cost
                            forecasting, workflow automation and document
                            management ​
                          </TimelineItemDesc>
                        </TimelineItemContent>
                      </TimelineItem>
                      <TimelineItem className="timelineItem">
                        <TimelineItemContent>
                          <TimelineItemTitle>
                            Document Management
                          </TimelineItemTitle>
                          <TimelineItemDesc>
                            All documents stored in a centralized repository
                            powered by Microsoft Sharepoint™ with sharing,
                            collaboration automation and archive storage ​
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
                    </TimeLineItemWrapper>
                  </>
                ) : (
                  <>
                    <TimeLineItemWrapper>
                      <TimelineItem className="timelineItem active">
                        <TimelineItemContent>
                          <TimelineItemTitle temTitle>
                            Onboard
                          </TimelineItemTitle>
                          <TimelineItemDesc>
                            We start by importing your portfolio and verifying
                            data accuracy through online databases and
                            human-review by our team of IP specialists. All your
                            information is accurate and complete including
                            bibliographic fields, family relationships,
                            priorities, assignments, due dates and maintenance
                            fees.
                            {/* Your data includes all bibliographic information, priorities,
                          family relationships, assignments and other key
                          information. We ensure your users’s access, connect to
                          your PTO accounts, and setup your centralized
                          DocketHub™ intake process.​ */}
                          </TimelineItemDesc>
                        </TimelineItemContent>
                      </TimelineItem>
                      <TimelineItem className="timelineItem">
                        <TimelineItemContent>
                          <TimelineItemTitle>Monitor</TimelineItemTitle>
                          <TimelineItemDesc>
                            With your portfolio loaded, we ensure your
                            information remains up to date and that you have
                            continuous visibility into the portfolio. We
                            maintain the docket, cross checking PTO data, and
                            uploading documents as we receive them. And we
                            provide you notifications of upcoming due dates so
                            you can instruct required activities.
                            {/* Actions and tasks are automated with our
                          industry leading DocketEngine™ global country law
                          ruleset. Based on your preferences, we actively
                          monitor and report on your due dates, filing
                          deadlines, payment due dates and all incoming/out
                          correspondences​ */}
                          </TimelineItemDesc>
                        </TimelineItemContent>
                      </TimelineItem>
                      <TimelineItem className="timelineItem">
                        <TimelineItemContent>
                          <TimelineItemTitle>Execute</TimelineItemTitle>
                          <TimelineItemDesc>
                            Based on your instructions, we proceed with your
                            support services including prosecution responses,
                            foreign filing, maintenance payments and
                            formalities. We coordinate all activities between
                            the client, U.S. counsel and foreign associates,
                            ensuring visibility and information sharing in a
                            centralized process.
                            {/* While you work directly with your attorneys and foreign
                          counsel, we coordinate information sharing to ensure
                          all information is captured, fully supported by the
                          HeliosComplete™ platform including task completion,
                          documents and receipts. */}
                          </TimelineItemDesc>
                        </TimelineItemContent>
                      </TimelineItem>
                      <TimelineItem className="timelineItem">
                        <TimelineItemContent>
                          <TimelineItemTitle>Report</TimelineItemTitle>
                          <TimelineItemDesc>
                            As your operations progress, we provide you docket
                            reports, reminders, confirmations, filing receipts,
                            portfolio reports, and financials, all accessible
                            24x7 through the platform.
                            {/* And with Microsoft’s Power BI
                          we’re able to provide advanced operations and
                          portfolio analytics that help your decision making and
                          focus resources on your highest value opportunities. */}
                          </TimelineItemDesc>
                        </TimelineItemContent>
                      </TimelineItem>
                    </TimeLineItemWrapper>
                  </>
                )}
              </TimelineControl>
            </Col>
            <Col width="60%" className="rightBlock_timeline">
              {windowSize > 991 ? (
                <TimelineImg
                  className="timelineImg"
                  src={getTimelineImage()}
                  alt="helios system image"
                />
              ) : null}
            </Col>
          </Flex>
        </Container>
      </StyledTimeline>
    </>
  );
};

export default Timeline;
