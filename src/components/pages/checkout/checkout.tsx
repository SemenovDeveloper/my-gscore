import styled from "styled-components";
import { ContentContainer, Button, SlimContainer, Cart } from "src/ui";
import { AuthorizationBar } from "src/components";
import React from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { useRouter } from "next/router";
import { buyProduct } from "src/store/ducks/payment/payment-reducers";

export const Checkout: React.FC = () => {
  const { selectedProduct } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    if (selectedProduct) {
      dispatch(buyProduct(selectedProduct.prices[0].id)).then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          router.push("/users/start-subscription");
        }
      });
    } else {
      homeRoute();
    }
  };

  const homeRoute = () => {
    router.push("/");
  };

  return (
    <>
      {selectedProduct ? (
        <ContentContainer>
          <SlimContainer>
            <AuthorizationBar step="checkout" />
            <CheckoutBlock>
              <Title>Checkout</Title>
              <Cart
                name={selectedProduct.name}
                price={selectedProduct.prices[0].price}
                icon
              />
              <TotalPrice>
                <p>Total:</p>
                <p>${selectedProduct.prices[0].price}</p>
              </TotalPrice>
              <Button
                theme="primary"
                type="submit"
                smallText
                onClick={handleClick}
              >
                Purchase
              </Button>
            </CheckoutBlock>
          </SlimContainer>
        </ContentContainer>
      ) : (
        homeRoute()
      )}
    </>
  );
};

const CheckoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
`;

const Title = styled.h2`
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
`;

const TotalPrice = styled.div`
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
