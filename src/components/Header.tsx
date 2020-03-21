import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Brand } from "./Brand";
import { useStaticQuery, graphql } from "gatsby";
import { Socials } from "./Socials";

export const Header: React.FC = () => {
  return (
    <Fixed>
      <Centered>
        <Container>
          <Brand href="/">Benjamin Leeds</Brand>
          <Socials />
        </Container>
      </Centered>
    </Fixed>
  );
};

const Fixed = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background: white;
  z-index: 1;
`;

const Centered = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

const Container = styled.div`
  border-bottom: 1px solid ${theme.colors.border};
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0px 20px;
`;
