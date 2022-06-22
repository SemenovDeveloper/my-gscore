import React from "react";
import styled from "styled-components";

interface IContentContainer {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<IContentContainer> = ({ children }) => {
  return (
    <main>
      <StyledContainer>{children}</StyledContainer>
    </main>
  );
};

const StyledContainer = styled.div`
  max-width: 1440px;
  min-height: 916px;
  background-color: var(--black);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 87px;
`;
