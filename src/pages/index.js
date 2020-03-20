import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layouts";
import styles from "../styles";
import presets from "../utils/presets";
import { rhythm, scale } from "../utils/typography";

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location}>
        <div>
          <h1
            css={{
              ...scale(4 / 5),
              fontWeight: `800`
            }}
          >
            {/* Life is simpler with thoughtful software. */}
            Ben is a software designer and engineer. Currently creating useful
            products at{" "}
            <a href="https://level.tech/" __target="blank">
              Level Software
            </a>
            . Formerly at{" "}
            <a href="https://www.db.com/company/index.htm" __target="blank">
              Deutsche Bank
            </a>
            .
          </h1>
          <ul
            css={{
              marginBottom: rhythm(2),
              marginTop: rhythm(2),
              marginLeft: 0,
              listStyle: `none`
            }}
          >
            {posts.map(post => (
              <li key={post.node.fields.slug}>
                <span
                  css={{
                    color: styles.colors.light,
                    display: `block`,
                    [presets.Tablet]: {
                      float: `right`,
                      marginLeft: `1rem`
                    }
                  }}
                >
                  {post.node.frontmatter.tags.join(", ")}
                  {/* {post.node.frontmatter.date} */}
                </span>
                <Link to={post.node.fields.slug} className="link-underline">
                  {post.node.frontmatter.title}
                </Link>
                <p>{post.node.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { draft: { ne: true }, example: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM YYYY")
            tags
          }
        }
      }
    }
  }
`;
