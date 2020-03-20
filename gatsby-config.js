module.exports = {
  siteMetadata: {
    title: `Benjamin Leeds - UX | Engineering`,
    author: `Benjamin Leeds`,
    description: `Benjamin Leeds is a software engineer and user experience designer.`,
    homepage: `https://baleeds.com`
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        commonmark: true,
        footnotes: true,
        pedantic: true,
        // blocks: ["h2"], Blocks option value can be provided here as an array.
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`
            }
          },
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {
              // Example code links are relative to this dir.
              directory: `${__dirname}/src/code-examples/`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-graphviz`, // graphviz before prismjs
          `gatsby-remark-prismjs`,
          `gatsby-remark-katex`
        ]
      }
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        // Links are relative to this directory
        excludeRegex: /excluded-link/
      }
    },
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      option: {
        isTSX: true
      }
    }
  ]
};
