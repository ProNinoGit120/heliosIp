module.exports = {
  siteMetadata: {
    title: `Helios | Managed IP Services`,
    description: `Increase quality, improve efficiency, reduce costs. Turnkey services, from docketing through portfolio management. Expert IP support delivered through innovative technology.`,
    author: `@jakeschroeder`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `helios`,
        start_url: `/`,
        background_color: `#F16322`,
        theme_color: `#F16322`,
        display: `minimal-ui`,
        icon: `src/images/helios-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
