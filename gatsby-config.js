module.exports = {
  siteMetadata: {
    title: `1140nft`,
    description: `The World's First NFT Funded
    Real Estate Development`,
    author: `Dynamo`,
    siteUrl: `https://140nft.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `starter-template-with-react-bootstrap`,
        short_name: `starter-with-react-bootstrap`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
          
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // https://www.npmjs.com/package/gatsby-plugin-google-fonts
    // gatsby-plugin-google-fonts 
    // couldn't get the font weights to work using the plugin so using @import in css instead
    //{
      //resolve: `gatsby-plugin-google-fonts`,
      //options: {
        //fonts: [
          //`Roboto`,
          //`source sans pro\:100,200,300,400,400i,500,600,700,800,900` // you can also specify font weights and styles
        //],
        //display: 'swap'
      //},
    //}, 
    // custom add - clicky https://www.skypack.dev/view/gatsby-plugin-clicky
    {
      resolve: `gatsby-plugin-clicky`,
      options: {
        siteId: '101360903'
      }
    }
  ],
}
