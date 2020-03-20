import React from "react";
import { Link, graphql } from "gatsby";
// import Layout from "../layouts";
import { Page } from "../layouts/Page";

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Page>
        <div>
          <h1>
            {/* Life is simpler with thoughtful software. */}
            Ben is a software designer and engineer. Currently creating useful
            products at{" "}
            <a href="https://level.tech/" target="blank">
              Level Software
            </a>
            . Formerly at{" "}
            <a href="https://www.db.com/company/index.htm" target="blank">
              Deutsche Bank
            </a>
            .
          </h1>
          <ul>
            {posts.map(post => (
              <li key={post.node.fields.slug}>
                <span>
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
      </Page>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { draft: { ne: true } } }
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
