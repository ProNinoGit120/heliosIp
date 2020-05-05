import React from "react";
import styled from "styled-components";
import Colors from "../../utils/colors";
import Size from "../../utils/size";
import { Flex, Button } from "../../utils/elements";

const HeroCard = styled.div`
  box-shadow: 30px 30px 60px #dedede, -30px -30px 60px #ffffff;
  background: ${Colors.gray};
  /* width: 100%; */
  border-radius: ${Size.radius}px;
  /* border: 1px solid ${Colors.border}; */
`;

const CardHeader = styled.div`
  padding: 32px;

  border-bottom: 1px solid ${Colors.border};
`;

const CardFooter = styled.div`
  padding: 0 32px 32px 32px;
`;

const CardTitle = styled.h3`
  text-align: center;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PricingList = styled.ul``;

const PricingItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

const CardButton = styled.button`
  height: 50px;
  background: ${Colors.blue};
  width: 70%;
  border-radius: ${Size.radius}px;
  color: white;
  border-radius: ${Size.radius}px;
`;

export default ({ title, buttonText, children }) => {
  return (
    <HeroCard>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter>
        <Flex align="center" justify="center">
          <Button withArrow width="100%" height="60px" bg={Colors.blue}>
            {buttonText}
          </Button>
        </Flex>
      </CardFooter>
    </HeroCard>
  );
};
