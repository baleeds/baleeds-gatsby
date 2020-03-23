import React from "react";
import { graphql } from "gatsby";
import rehypeReact from "rehype-react";
import { Page } from "../layouts/Page";
import { SEO } from "../components/SEO";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    Sub: ({ children }) => {
      console.log("sup", children);
      return <h3>{children}</h3>;
    }
  }
}).Compiler;

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <Page location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
        />
        <div className="formatted">
          <header>
            <h1>{post.frontmatter.title}</h1>
          </header>

          {renderAst(post.htmlAst)}
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
      frontmatter {
        title
        excerpt
      }
    }
  }
`;
