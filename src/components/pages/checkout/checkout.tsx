import styled from "styled-components";
import { ContentContainer, Button, SlimContainer } from "src/ui";
import { AuthorizationBar } from "src/components";
import React from "react";
import { useAppSelector } from "src/hooks";

export const Checkout: React.FC = () => {
  const user = useAppSelector(state => state.user)

  return (
    <>
      <ContentContainer>
        <SlimContainer>
          <AuthorizationBar step="checkout" />
          <SCheckout>
            <h2>Checkout</h2>
            <p>{user.selectedProduct?.name}</p>
            <Button theme="primary" type="submit" smallText>
              Purchase
            </Button>
          </SCheckout>
        </SlimContainer>
      </ContentContainer>
    </>
  );
};

const SCheckout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
`;
