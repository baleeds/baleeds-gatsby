import React from "react";
import { Link, graphql } from "gatsby";
// import Layout from "../layouts";
import { Page } from "../layouts/Page";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Img from "gatsby-image";

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const avatarPath = this.props.data.allAuthorYaml.edges[0].node.avatar
      .childImageSharp.original.src;

    return (
      <Page>
        <Section style={{ margin: "120px 0" }}>
          <h2>
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
          </h2>
        </Section>
        <h3>Featured work</h3>
        <Section>
          {posts.map(post => (
            <FlexBlock key={post.node.id}>
              <Card key={post.node.fields.slug}>
                <CardImage>
                  {post.node.frontmatter.featuredImage?.childImageSharp
                    ?.fluid &&
                    (console.log(post.node.frontmatter.featuredImage) || (
                      <Img
                        fluid={
                          post.node.frontmatter.featuredImage.childImageSharp
                            .fluid
                        }
                      />
                    ))}
                </CardImage>
                <CardBody>
                  <Link to={post.node.fields.slug} className="link-underline">
                    <h3>{post.node.frontmatter.title}</h3>
                  </Link>
                  <p>{post.node.excerpt}</p>
                  <Link to={post.node.fields.slug} className="link-button">
                    View case study
                  </Link>
                </CardBody>
              </Card>
            </FlexBlock>
          ))}
        </Section>
        <h3>Biography</h3>
        <Section>
          <BioContainer>
            <img src={avatarPath} alt="Benjamin Leeds Headshot" />
            <div>
              <p>
                Benjamin grew up in Durham, NC. He recieved his Bachelor’s in
                Computer Science from NC State University, while doing design
                work for the Engineering College.
              </p>
              <p>
                His career has been a blend of software engineering, user
                research, and visual design. Recently he’s been focused on React
                / Typescript development with GraphQL.
              </p>
            </div>
          </BioContainer>
        </Section>
      </Page>
    );
  }
}

const Section = styled.div`
  margin: 20px -12px 120px;
  display: flex;
  flex-wrap: wrap;
`;

const FlexBlock = styled.div`
  width: 100%;

  @media screen and (min-width: 750px) {
    width: 50%;
  }
`;

const Card = styled.div`
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.shadow};
  margin: 12px;
`;

const CardImage = styled.div`
  img {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

const CardBody = styled.div`
  padding: 24px;

  p {
    height: 240px;

    @media screen and (min-width: 500px) {
      height: 180px;
    }
  }

  .link-button {
    height: 42px;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;

    :hover,
    :active {
      background: ${theme.colors.primary};
      color: white;
      text-decoration: none;
    }
  }
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px;

  img {
    margin: 12px;
    margin-bottom: 40px;
    box-shadow: ${theme.shadow};
    border-radius: ${theme.borderRadius};
    width: 100%;
  }

  @media screen and (min-width: 500px) {
    margin: 0;
    flex-direction: row;

    img {
      margin-right: 40px;
      width: 200px;
      margin-bottom: 0;
    }
  }
`;

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
          id
          excerpt(format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM YYYY")
            tags
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 600, maxWidth: 800) {
                  aspectRatio
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
    allAuthorYaml {
      edges {
        node {
          avatar {
            childImageSharp {
              original {
                width
                height
                src
              }
            }
          }
        }
      }
    }
  }
`;
