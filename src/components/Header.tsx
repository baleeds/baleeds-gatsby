import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Brand } from "./Brand";
import { useStaticQuery, graphql } from "gatsby";

export const Header: React.FC = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        host
        port
      }
    }
  `);

  const { host, port } = site;
  const root = `${location.protocol}//${host}${port ? `:${port}` : undefined}`;

  return (
    <Container>
      <Brand href={root}>Benjamin Leeds</Brand>
      <div>
        <a href="https://github.com/baleeds" target="blank">
          Github
        </a>
        <a href="https://linkedin.com/in/baleeds" target="blank">
          LinkedIn
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid ${theme.colors.border};
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
