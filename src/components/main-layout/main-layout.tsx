import React from "react";
import styled from "styled-components";
import { Header, Footer } from "src/components";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Root>
      <Header />
      {children}
      <Footer />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  background-color: var(--black);
`;
