import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Socials } from './Socials';

export const Footer: React.FC = () => {
  return (
    <Container>
      <a href="mailto:b.a.leeds@gmail.com">b.a.leeds@gmail.com</a>
      <Socials />
    </Container>
  );
};

const Container = styled.div`
  border-top: 1px solid ${theme.colors.border};
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
