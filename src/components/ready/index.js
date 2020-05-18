import React from "react";
import styled from "styled-components";
import Colors from "../../utils/colors";
import {
  Container,
  Flex,
  Col,
  Button,
  ButtonLink,
  TitleLarge,
  TitleSmall,
} from "../../utils/elements";
import women_src from "../../images/ready-women.png";

const StyledReady = styled.section`
  padding-top: 60px;
  padding-bottom: 164px;
`;

const ReadyInner = styled.div`
  padding-top: 32px;
`;

// const ReadyItemWrapper = styled.div``;

const ReadyItem = styled.div`
  background: ${({ bg }) => bg};
  padding: 120px;
  position: relative;

  &.left {
    display: flex;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }

  &.right {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
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

const Ready = ({ title }) => {
  return (
    <StyledReady>
      <Container maxWidth={1440}>
        <TitleLarge align="center">{title}</TitleLarge>
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
                      Schedule a demo of the platform.
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
    </StyledReady>
  );
};

export default Ready;
