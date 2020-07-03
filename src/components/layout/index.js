/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import Colors from "../../utils/colors";
import Header from "./header";
import Footer from "./footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyles = createGlobalStyle`

  #___gatsby {
    width: 100%;
    height: 100%;
  }

  html {
    width: 100%;
    height: 100%;
  
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    padding-top: 80px;
    color: ${Colors.text};
  
  }

  h1,h2,h3,h4 {
    margin: 0;
    color: ${Colors.blue};
  }

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: inherit;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    
  }

  @media(min-width: 1030px) { 
    .flexHero {
      flex-wrap: wrap;
    }
    .heroImg {
      width: 80%;
      text-align: center;
    }
  }

  @media(max-width: 1030px) and (min-width: 700px) { 
    .flexCol {
      flex-wrap: wrap;
    }

    .heroImg {
      width: 85%;
      text-align: center;
    }

    .leftBlock,
    .centerBlock,
    .rightBlock {
        diaply: flex;
        flex-direction: row;
        flex-basis: 48%;
        margin: 15px 1%;
        padding: 0px 25px;
      }
    }
  }

  @media(max-width: 699px) { 
    .heroImg {
      width: 100%;
      text-align: center;
    }
    .flexCol {
      flex-direction: column !important;  
      align-items: center !important;
      margin-top: 70px;
    }

    .leftBlock,
    .centerBlock,
    .rightBlock {
        width: 100%;
        margin: 15px 20px;
        padding: 0px 25px;
      }
    }
  }

  @media(max-width: 767px) { 
    .flexBox {
      flex-direction: column !important;  
      align-items: flex-start !important;
    }
  }
`;

const Main = styled.main`
  display: block;
  @media (max-width: 767px) {
    overflow-x: hidden;
  }
`;

const Layout = ({ children, page }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <GlobalStyles />
      <Header page={page} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
