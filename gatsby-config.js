module.exports = {
  siteMetadata: {
    title: `Benjamin Leeds`,
    description: `Benjamin Leeds is a software engineer and user experience designer.  Currently building useful products at Level Software.  Formerly at Deutsche Bank.`,
    author: `Benjamin Leeds`,
    homepage: `https://baleeds.com`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-remark-unwrap-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        commonmark: true,
        footnotes: true,
        pedantic: true,
        excerpt_separator: `<!-- end -->`,
        plugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 80,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        // Links are relative to this directory
        excludeRegex: /excluded-link/,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      option: {
        isTSX: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Benjamin Leeds',
        short_name: 'Benjamin Leeds',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
