import styled from "styled-components";
import { ContentContainer, Button, SlimContainer, Cart } from "src/ui";
import React from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { useRouter } from "next/router";
import { ISubscription } from "src/types"

interface ISubscrptions {
  subscriptions: ISubscription[]
}

export const Subscriptions: React.FC<ISubscrptions> = ({ subscriptions }) => {
  // const { selectedProduct } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push("/users/start-subscription");
  // };
  return (
    <>
      <ContentContainer>
        <SubscriptionsHead>
          <STitle>My subscriptions</STitle>
          <Button
            theme="primary"
            type="submit"
            smallText
            // onClick={handleClick}
          >
            Upgrade
          </Button>
        </SubscriptionsHead>
        <div>{subscriptions[0].id}</div>
      </ContentContainer>
    </>
  );
};

const SubscriptionsHead = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const STitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 64px;
  margin: 0;
`;
