import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Timeline from "../components/timeline";
import { TitleLarge } from "../utils/elements";
import Colors from "../utils/colors";
import microsoft_src from "../images/partner-logos/microsoft.png";
import logo1 from "../images/partner-logos/partner1.png";
import logo2 from "../images/partner-logos/partner2.png";
import logo3 from "../images/partner-logos/partner3.png";
import logo4 from "../images/partner-logos/partner4.png";
import Ready from "../components/ready";
const Partners = styled.section`
  position: relative;
  padding-bottom: 370px;

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

const PartnersInner = styled.div`
  padding: 120px 0;
`;

const PartnerLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MicroLogo = styled.img`
  margin: 0 auto;
  display: block;
  width: 300px;
  margin-bottom: 32px;
`;

const PartnerLogo = styled.img`
  display: block;

  margin: 0 16px;
`;

const Platform = () => {
  const logos_src = [logo1, logo2, logo3, logo4];

  const logos = logos_src.map(logo => <PartnerLogo src={logo} />);
  return (
    <Layout>
      <SEO title="Platform" />
      <Timeline withCTA />
      <Partners>
        <MicroLogo src={microsoft_src} />
        <TitleLarge align="center">A Microsoft Development Partner</TitleLarge>
        <PartnerLogos>{logos}</PartnerLogos>
      </Partners>
      <Ready />
    </Layout>
  );
};

export default Platform;
