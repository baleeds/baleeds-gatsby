import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const githubPath =
  "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z";
const GithubIcon = () => (
  <svg viewBox="0 0 16 16">
    <path d={githubPath} />
  </svg>
);

const linkedInPath =
  "M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z";
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d={linkedInPath} />
  </svg>
);

export const Socials: React.FC = () => (
  <Container>
    <a href="https://github.com/baleeds" target="blank">
      <GithubIcon />
    </a>
    <a href="https://linkedin.com/in/baleeds" target="blank">
      <LinkedInIcon />
    </a>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 8px;
  }

  a {
    color: ${theme.colors.text};
    display: block;
    margin: -8px;
    padding: 8px;

    :hover,
    :focus {
      color: ${theme.colors.primary};
    }

    svg {
      fill: currentColor;
      height: 20px;
      width: 20px;
    }
  }
`;
