import React from "react";
import { graphql } from "gatsby";
import rehypeReact from "rehype-react";
import { Page } from "../layouts/Page";

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler;

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <Page location={this.props.location}>
        <div>
          <header>
            <h1>{post.frontmatter.title}</h1>
          </header>

          {renderAst(post.htmlAst)}
          <hr />
        </div>
      </Page>
    );
  }
}

export default BlogPostRoute;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                fixed(width: 50, height: 50, quality: 75, grayscale: true) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
