import React from "react";
import { Link, graphql } from "gatsby";
import styles from "../styles";
import presets from "../utils/presets";
import { rhythm, scale } from "../utils/typography";
import { Page } from "../layouts";

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Page location={this.props.location}>
        <div>
          <h1>
            This page demonstrates the different types of excerpts you can use
            with gatsby-transformer-remark
          </h1>
          <ul>
            {posts.map(post => (
              <li key={post.node.fields.slug}>
                <span>{post.node.frontmatter.date}</span>
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
    allMarkdownRemark(filter: { frontmatter: { example: { eq: true } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`;
