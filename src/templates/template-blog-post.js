import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import rehypeReact from "rehype-react";

import Counter from "../components/Counter";
import Page from "../layouts/Page";

import "katex/dist/katex.min.css";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "interactive-counter": Counter }
}).Compiler;

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    let tags;
    let tagsSection;
    if (post.fields.tagSlugs) {
      const tagsArray = post.fields.tagSlugs;
      tags = tagsArray.map((tag, i) => {
        const divider = i < tagsArray.length - 1 && <span>{`, `}</span>;
        return (
          <span key={tag}>
            <Link to={tag}>{post.frontmatter.tags[i]}</Link>
            {divider}
          </span>
        );
      });
      tagsSection = <span>tagged {tags}</span>;
    }

    return (
      <Page location={this.props.location}>
        <div>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <p>
              {post.timeToRead} min read &middot; {tagsSection}
            </p>
          </header>

          {renderAst(post.htmlAst)}
          <hr />
          <p>
            <Img
              alt={`Avatar of ${post.frontmatter.author.id}`}
              fixed={post.frontmatter.author.avatar.children[0].fixed}
              Tag="span"
            />
            <span>
              <small>{post.frontmatter.author.id}</small>
              {` `}
              {post.frontmatter.author.bio}
            </span>
          </p>
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
