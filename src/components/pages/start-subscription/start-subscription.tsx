import styled, { ThemeContext } from "styled-components";
import { ContentContainer, Button, SlimContainer, Cart } from "src/ui";
import { AuthorizationBar } from "src/components";
import React from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { useRouter } from "next/router";

export const StartSubscription: React.FC = () => {
  const { selectedProduct } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    // dispatch();
    // router.push("/users/start-subscription");
  };
  return (
    <>
      <ContentContainer>
        <SlimContainer>
          <SStart>
            <STitle>Start your subscription</STitle>
            <SDescription>We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.</SDescription>
            <Cart
              name={selectedProduct.name}
              price={selectedProduct.prices[0].price}
            />
            <Button
              theme="primary"
              type="submit"
              smallText
              onClick={handleClick}
            >
              Purchase
            </Button>
          </SStart>
        </SlimContainer>
      </ContentContainer>
    </>
  );
};

const SStart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 84px;
`;

const STitle = styled.h2`
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
`;

const SDescription = styled.p`
 margin: 16px 0 48px;
 font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`

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
