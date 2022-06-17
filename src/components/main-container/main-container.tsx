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
      {children}
      <Footer />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  max-width: 1440px;
  background-color: ${COLORS.black};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
