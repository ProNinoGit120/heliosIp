import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Timeline from "../components/timeline";
import { TitleLarge } from "../utils/elements";
import Colors from "../utils/colors";
import microsoft_src from "../images/partner-logos/microsoft.svg";
import logo1 from "../images/partner-logos/azure.svg";
import logo2 from "../images/partner-logos/office.svg";
import logo3 from "../images/partner-logos/outlook.svg";
import logo4 from "../images/partner-logos/sharepoint.svg";
import logo5 from "../images/partner-logos/teams.svg";
import logo6 from "../images/partner-logos/powerbi.svg";
import Ready from "../components/ready";
const Partners = styled.section`
  padding-top: 300px;
  padding-bottom: 250px;
  position: relative;
  z-index: 1;
  background: ${Colors.gray};

  &:after {
    top: 0;
    left: 0;
    border-right: 100vw solid transparent;
    border-top: 15.625rem solid #fff;
    content: "";
    position: absolute;
    z-index: -1;
  }

  &:before {
    bottom: 0;
    right: 0;
    border-left: 100vw solid transparent;
    border-bottom: 15.625rem solid #fff;
    content: "";
    position: absolute;
    z-index: -1;
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
  width: 400px;
  margin-bottom: 32px;
`;

const PartnerLogo = styled.img`
  display: block;
  max-width: 100px;
  margin: 0 16px;
`;

const Platform = () => {
  const logos_src = [logo1, logo2, logo3, logo4, logo5, logo6];

  const logos = logos_src.map(logo => <PartnerLogo src={logo} />);
  return (
    <Layout>
      <SEO title="Platform" />
      <Timeline withCTA />
      <Partners>
        <MicroLogo src={microsoft_src} />
        <TitleLarge align="center" mb={32}>
          A Microsoft Development Partner
        </TitleLarge>
        <PartnerLogos>{logos}</PartnerLogos>
      </Partners>
      <Ready />
    </Layout>
  );
};

export default Platform;
