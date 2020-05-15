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

const TimelineImg = styled.img`
  position: sticky;
  top: 30%;
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
    transition: all 0.5s ease-out;
  }

  h3,
  p {
    transition: all 0.5s ease-out;
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
  const [timelineActiveIndex, setTimelineActiveIndex] = useState(-1);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const onScroll = () => {
    // calc position y of timeline image
    const timelineImageElement = document.getElementsByClassName(
      "timelineImg"
    )[0];
    const timelineImageBoundingRect = timelineImageElement.getBoundingClientRect();
    const timelineImagePosY =
      (timelineImageBoundingRect.top + timelineImageBoundingRect.bottom) / 2;

    // get nearest timeline item index
    let nearestIndex = 0,
      nearestDistance = -1;
    const timelineItems = Array.from(
      document.getElementsByClassName("timelineItem")
    );
    timelineItems.forEach((timelineItem, index) => {
      // calc distance to timeline image
      const timelineItemBoundingRect = timelineItem.getBoundingClientRect();
      const timelineItemPosY =
        (timelineItemBoundingRect.top + timelineItemBoundingRect.bottom) / 2;
      const distance = Math.abs(timelineItemPosY - timelineImagePosY);
      if (nearestDistance < 0 || distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

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
  };

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
            <Col width="40%">
              <TimelineControl>
                <TimelineIntro>
                  <TitleMedium color="white">
                    {withCTA
                      ? `At Last— A Real​ IP operations​ SaaS Solution​`
                      : ` How it works`}
                  </TitleMedium>
                  <TextBody color="white">
                    {withCTA
                      ? null
                      : `HeliosComplete™ makes it easy to onboard, monitor, execute, and report on all aspects of your IP operations.`}
                  </TextBody>
                </TimelineIntro>
                {withCTA ? (
                  <>
                    <TimelineItem className="timelineItem">
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
                          We start by importing your portfolio and verifying
                          data accuracy through online databases and by
                          human-review by our team of IP specialists. Your data
                          includes all bibliographic information, priorities,
                          family relationships, assignments and other key
                          information. We ensure your users’s access, connect to
                          your PTO accounts, and setup your centralized
                          DocketHub™ intake process.​
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>Monitor</TimelineItemTitle>
                        <TimelineItemDesc>
                          With your portfolio loaded, we ensure all information
                          is up to date and accurate by docketing, cross
                          checking PTO data, and uploading documents as we
                          receive them. Actions and tasks are automated with our
                          industry leading DocketEngine™ global country law
                          ruleset. Based on your preferences, we actively
                          monitor and report on your due dates, filing
                          deadlines, payment due dates and all incoming/out
                          correspondences​
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>Execute</TimelineItemTitle>
                        <TimelineItemDesc>
                          As events come due, we proceed with your support
                          services including prosecution responses, foreign
                          filing, maintenance payments and formalities. While
                          you work directly with your attorneys and foreign
                          counsel, we coordinate information sharing to ensure
                          all information is captured, fully supported by the
                          HeliosComplete™ platform including task completion,
                          documents and receipts.
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                    <TimelineItem className="timelineItem">
                      <TimelineItemContent>
                        <TimelineItemTitle>Report</TimelineItemTitle>
                        <TimelineItemDesc>
                          As your operations progress, we provide you docket
                          reports, reminders, confirmations, filing receipts,
                          portfolio reports, and financials, all accessible 24x7
                          through the platform. And with Microsoft’s Power BI
                          we’re able to provide advanced operations and
                          portfolio analytics that help your decision making and
                          focus resources on your highest value opportunities.
                        </TimelineItemDesc>
                      </TimelineItemContent>
                    </TimelineItem>
                  </>
                )}
              </TimelineControl>
            </Col>
            <Col width="60%">
              <TimelineImg
                className="timelineImg"
                src={system_src}
                alt="helios system image"
              />
            </Col>
          </Flex>
        </Container>
      </StyledTimeline>
    </>
  );
};

export default Timeline;
