import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Brand } from "./Brand";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Brand href="mailto:b.a.leeds@gmail.com">b.a.leeds@gmail.com</Brand>
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
  border-top: 1px solid ${theme.colors.border};
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 80px;
`;
