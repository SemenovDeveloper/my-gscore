import React from "react";
import styled from "styled-components";
import { COLORS } from 'src/lib';
import { Header, Footer } from 'src/components'

interface IContainer {
  children: React.ReactNode;
}

export const MainContainer: React.FC<IContainer> = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${COLORS.black};
`;

const Content = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #ebf5ee;
`;