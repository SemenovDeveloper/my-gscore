import styled, { ThemeContext } from "styled-components";
import { ContentContainer, Button, SlimContainer, Cart } from "src/ui";
import { AuthorizationBar } from "src/components";
import React from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { useRouter } from "next/router";
import { buyProduct } from "src/store/ducks/subscription/subscription-reducers";

export const Checkout: React.FC = () => {
  const { selectedProduct } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(buyProduct(selectedProduct.prices[0].id)).then(() =>
      router.push("/users/start-subscription")
    );
  };
  return (
    <>
      <ContentContainer>
        <SlimContainer>
          <AuthorizationBar step="checkout" />
          <SCheckout>
            <STitle>Checkout</STitle>
            <Cart
              name={selectedProduct.name}
              price={selectedProduct.prices[0].price}
              icon
            />
            <STotalPrice>
              <p>Total:</p>
              <p>${selectedProduct.prices[0].price}</p>
            </STotalPrice>
            <Button
              theme="primary"
              type="submit"
              smallText
              onClick={handleClick}
            >
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

const STitle = styled.h2`
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
`;

const STotalPrice = styled.div`
  width: 100%;
  margin: 24px 0 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
  }
`;
