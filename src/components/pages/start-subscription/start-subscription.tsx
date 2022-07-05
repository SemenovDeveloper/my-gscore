import styled from "styled-components";
import { ContentContainer, Button, SlimContainer, Cart } from "src/ui";
import React from "react";
import { useAppSelector } from "src/hooks";
import { useRouter } from "next/router";
import { MEDIA_QUERY } from "src/lib/constants";

export const StartSubscription: React.FC = () => {
  const { selectedProduct } = useAppSelector((state) => state.user);
  const router = useRouter();

  const handleClick = () => {
    router.push("/subscriptions");
  };

  const homeRoute = () => {
    router.push("/");
  };
  return (
    <>
      {selectedProduct ? (
        <ContentContainer>
          <SlimContainer>
            <Start>
              <Title>Start your subscription</Title>
              <Description>
                We have sent you a payment receipt by e-mail and a link to
                download the plugin with a license key.
              </Description>
              <Cart
                name={selectedProduct.name}
                price={selectedProduct.prices[0].price}
              />
              <Button
                theme="primary"
                type="submit"
                size="wide"
                smallText
                onClick={handleClick}
              >
                Go to my subscriptions
              </Button>
            </Start>
          </SlimContainer>
        </ContentContainer>
      ) : (
        homeRoute()
      )}
    </>
  );
};

const Start = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  @media ${MEDIA_QUERY.mobile} {
    text-align: center;
  }
`;

const Description = styled.p`
  margin: 16px 0 48px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  @media ${MEDIA_QUERY.mobile} {
    text-align: center;
  }
`;
