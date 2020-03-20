import { BlankAnchor } from "./BlankAnchor";
import { theme } from "../styles/theme";
import styled from "styled-components";

export const Brand = styled(BlankAnchor)`
  font-size: 1.25rem;
  font-weight: bold;

  :hover,
  :focus {
    color: ${theme.colors.primary};
  }
`;
