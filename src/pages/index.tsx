import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
// import Layout from "../layouts";
import { Page } from "../layouts/Page";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Img from "gatsby-image";

const Index: React.FC = () => {
  const { allMarkdownRemark, allAuthorYaml } = useStaticQuery(pageQuery);

  const posts = allMarkdownRemark.edges;
  const avatarPath =
    allAuthorYaml.edges[0].node.avatar.childImageSharp.original.src;

  return (
    <Page>
      <Section style={{ margin: "120px 0" }}>
        <h2>
          Ben is a software engineer and designer. Currently creating useful
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
        {posts.map(post => {
          const {
            id,
            fields: { slug },
            frontmatter: { featuredImage, title, excerpt }
          } = post.node;

          return (
            <FlexBlock key={id}>
              <Card key={slug}>
                <CardImage>
                  {featuredImage && (
                    <Link to={slug}>
                      <Img
                        fluid={featuredImage.childImageSharp.fluid}
                        alt={title}
                      />
                    </Link>
                  )}
                </CardImage>
                <CardBody>
                  <Link to={slug} className="link-underline">
                    <h3>{title}</h3>
                  </Link>
                  <p>{excerpt}</p>
                  <Link to={slug} className="link-button">
                    View case study
                  </Link>
                </CardBody>
              </Card>
            </FlexBlock>
          );
        })}
      </Section>
      <h3>Biography</h3>
      <Section>
        <BioContainer>
          <img src={avatarPath} alt="Benjamin Leeds Headshot" />
          <div>
            <p>
              Benjamin grew up in Durham, NC. He recieved his Bachelor’s in
              Computer Science from NC State University, while doing design work
              for the Engineering College.
            </p>
            <p>
              His career has been a blend of software engineering, user
              research, and visual design. Recently he’s been focused on React /
              Typescript development with GraphQL.
            </p>
          </div>
        </BioContainer>
      </Section>
    </Page>
  );
};

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
    height: 120px;

    @media screen and (min-width: 500px) {
      height: 100px;
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM YYYY")
            tags
            excerpt
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 600, maxWidth: 800) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
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
