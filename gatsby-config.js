module.exports = {
  siteMetadata: {
    title: "kylejm",
    links: [
      {
        name: "Twitter",
        url: "https://twitter.com/kylejm_",
        color: "#00acee"
      },
      {
        name: "GitHub",
        url: "https://github.com/kylejm",
        color: "#333"
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/user/kylejm_",
        color: "#1db954"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kylejmcalpine/",
        color: "#0077b5"
      },
      {
        name: "Instagram",
        url: "https://instagram.com/kylejm_",
        color: "#e1306c"
      },
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`, 
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
}
