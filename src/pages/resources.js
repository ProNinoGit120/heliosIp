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
  ButtonLink,
} from "../utils/elements";
import { checkmark, plus, people, filing, money, ids } from "../utils/icons";
import Ready from "../components/ready";

import people_src from "../images/resources-people.png";
import paralegals_src from "../images/resources-paralegals.png";
import tech_src from "../images/resources-tech.png";
import op_src from "../images/resources-operations.png";

const Intro = styled.section`
  overflow: hidden;
  padding-bottom: 300px;
  position: relative;

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${people_src}), ${Colors.gray};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* transform: rotate(-9.5deg); */
    z-index: -2;
  }
`;

const IntroInner = styled.div`
  padding: 120px 0;
`;

const IntroDesc = styled(TextBody)`
  margin: 0 auto;
  color: white;
  max-width: 700px;
`;

const IntroBreak = styled.div`
  position: relative;
  padding-bottom: 340px;
  /* overflow: hidden; */
  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    background: white;
    transform: rotate(-9.5deg);
    z-index: -1;
    transform-origin: left bottom;
  }
`;

const People = styled.section`
  margin-top: -340px;
  padding-bottom: 120px;
`;

const PeopleImgWrapper = styled.div`
  position: relative;
`;

const PeopleImg = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 0;
  border-radius: 12px;
`;

// const PeopleIcon = styled.div`
//   position: absolute;
//   top: 20%;
//   right: -50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 10;
//   border-radius: 12px;
//   background: ${Colors.blue};
//   width: 100px;
//   height: 100px;
//   & svg {
//     width: 40px;
//     height: 40px;
//   }

//   &.left {
//   }
// `;

const PeopleItem = styled.div`
  padding-bottom: 120px;

  &:first-child {
    padding-top: 120px;
  }
`;

const PeopleText = styled.div`
  &:nth-of-type(odd) {
    padding-left: 32px;
  }
  &:nth-of-type(even) {
    padding-right: 32px;
  }
`;

const Resources = () => {
  return (
    <Layout>
      <SEO title="Resources" />
      <Intro>
        <IntroInner>
          <TitleLarge align="center" color="white">
            We Are a Team of
            <br />
            Expert IP Professionals
          </TitleLarge>
          <IntroDesc align="center" mb={16}>
            Trusted support resources with the knowledge and experience to
            plug-in to your IP operations without missing a beat. Our staff have
            worked at large firms, boutique firms, large IP companies and
            startups. We understand what it takes to meet your needs across the
            range of IP activities.​
          </IntroDesc>
        </IntroInner>
      </Intro>
      <IntroBreak></IntroBreak>
      <People>
        <PeopleItem>
          <Container>
            <Flex align="center">
              <Col width="50%">
                {/* <PeopleImgWrapper>
                 
                  <PeopleIcon>{people}</PeopleIcon>
                </PeopleImgWrapper> */}
                <PeopleImg src={paralegals_src} />
              </Col>
              <Col width="50%">
                <TitleMedium>
                  Paralegal and IP
                  <br />
                  Specialists
                </TitleMedium>
                <TextBody mb={16}>
                  Across the full range of IP support activities, our team has
                  the capabilities to work as an extension of your team. Unlike
                  outsourcing, our managed services approach provides committed
                  resources assigned to work with you on a day-to-day basis. We
                  develop a close working knowledge of your processes, becoming
                  an integral part of your operations.​
                </TextBody>
                <ButtonLink className="white">Explore Careers</ButtonLink>
              </Col>
            </Flex>
          </Container>
        </PeopleItem>
        <PeopleItem>
          <Container>
            <Flex align="center">
              <Col width="50%">
                <TitleMedium>
                  Systems Data
                  <br />
                  Technologists
                </TitleMedium>
                <TextBody mb={16}>
                  Technology is the cornerstone of our solution approach
                  enabling you to improve how you create, manage and exploit
                  your IP assets. Combining hands-on knowledge of IP operations
                  with leading edge technology, our development team is driving
                  innovation in the IP industry.
                </TextBody>
                <ButtonLink className="white">Explore Careers</ButtonLink>
              </Col>
              <Col width="50%">
                <PeopleImg src={tech_src} />
                {/* <PeopleImgWrapper>
                 
                  <PeopleIcon>{people}</PeopleIcon>
                </PeopleImgWrapper> */}
              </Col>
            </Flex>
          </Container>
        </PeopleItem>
        <PeopleItem>
          <Container>
            <Flex align="center">
              <Col width="50%">
                <PeopleImg src={op_src} />
                {/* <PeopleImgWrapper>
                 
                  <PeopleIcon>{people}</PeopleIcon>
                </PeopleImgWrapper> */}
              </Col>
              <Col width="50%">
                <TitleMedium>
                  IP Operations
                  <br />
                  Managers
                </TitleMedium>
                <TextBody mb={16}>
                  Process management is critical to ensuring accurate,
                  cost-effective IP operations. Our team brings hands-on process
                  management expertise with SOPs, document support methods, and
                  analysis tools that enable smart resource allocation, time
                  management and financial controls. ​
                </TextBody>
                <ButtonLink className="white">Explore Careers</ButtonLink>
              </Col>
            </Flex>
          </Container>
        </PeopleItem>
      </People>
      <Ready title="Talk to an Advisor" />
    </Layout>
  );
};

export default Resources;
