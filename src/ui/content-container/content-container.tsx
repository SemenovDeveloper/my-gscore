import React from "react";
import { MEDIA_QUERY } from "src/lib/constants";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1440px;
  min-height: 916px;
  margin: 0 auto;
  padding: 64px 87px 42px;
  background-color: var(--black);
  overflow: hidden;
  @media ${MEDIA_QUERY.tablet} {
    padding: 25px 15px;
    min-height: auto;
  }
`;
