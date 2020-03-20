import styled from "styled-components";
import { theme } from "../styles/theme";

export const BlankAnchor = styled.a`
  text-decoration: none;
  color: ${theme.colors.text};

  :visited {
    color: ${theme.colors.text};
  }
`;
