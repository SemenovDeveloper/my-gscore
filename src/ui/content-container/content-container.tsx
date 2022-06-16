import React from "react";
import styled from "styled-components";
import { COLORS } from 'src/lib';
import { Header, Footer } from 'src/components'

interface IContentContainer {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<IContentContainer> = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  max-width: 1440px;
  background-color: ${COLORS.black};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;