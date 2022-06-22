import React from "react";
import styled from "styled-components";
import { Header, Footer } from "src/components";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <SContainer>
      <Header />
      {children}
      <Footer />
    </SContainer>
  );
};

const SContainer = styled.div`
  position: relative;
  max-width: 1440px;
  background-color: var(--black);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
