import React from "react";
import styled from "styled-components";

interface IContainer {
  children: React.ReactNode;
}

export const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <StyledModal>
      <Content>{children}</Content>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
`;

const Content = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #ebf5ee;
`;