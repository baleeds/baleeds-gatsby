import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Page: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 700px;
`;

const Main = styled.div``;
