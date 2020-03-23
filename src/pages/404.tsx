import React from "react";
import { Page } from "../layouts/Page";
import styled from "styled-components";
import { SEO } from "../components/Seo";

const Index: React.FC = () => {
  return (
    <Page>
      <SEO
        title="404"
        description="Uh oh! The page you're looking for doesn't exist!"
      />
      <Section style={{ margin: "120px 0" }}>
        <h2>Uh oh! The page you're looking for doesn't exist!</h2>
      </Section>
    </Page>
  );
};

const Section = styled.div`
  margin: 20px -12px 120px;
  display: flex;
  flex-wrap: wrap;
`;

export default Index;
