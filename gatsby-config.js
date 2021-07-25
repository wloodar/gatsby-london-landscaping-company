module.exports = {
  siteMetadata: {
    siteUrl: "https://eslandscapesltd.co.uk",
    author: '@wloodar',
    title: "London Landscaping & Garden Maintenance | ESlandscapesLTD",
    description: "ESlandscapesltd is innovative landscape company established in London. Working hard to make London's gardens the most beautiful gardens in the entire world."
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
