import styled from "styled-components";
import { ContentContainer, Button, SlimContainer, Cart } from "src/ui";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { useRouter } from "next/router";
import { ISubscription } from "src/types";
import { store } from "src/store";
import { unwrapResult } from "@reduxjs/toolkit";
import { getSubscriptions } from "src/store/ducks";
import { NoSubscriptions, SubscriptionsBar } from "src/components";

export const Subscriptions: React.FC = () => {
  const subscritions = useAppSelector(
    (state) => state.subscription.subscriptions
  );

  const [subscriptionIndex, setSubscriptionIndex] = useState<number>(0);

  console.log(subscriptionIndex);

  const handleClick = () => {};

  const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]);
  const [codes, setCodes] = useState([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(!subscriptions.length);

  useEffect(() => {
    (async () => {
      const subscriptionsData = await store
        .dispatch(getSubscriptions())
        .then(unwrapResult);
      await setSubscriptions(subscriptionsData);
    })();
  }, []);

  useEffect(() => {
    setIsEmpty(!subscriptions.length);
  }, [subscriptions]);

  return (
    <ContentContainer>
      <SubscriptionsHead>
        <Title>My subscriptions</Title>
        {!isEmpty && (
          <Button theme="primary" type="submit" smallText onClick={handleClick}>
            Upgrade
          </Button>
        )}
      </SubscriptionsHead>
      {isEmpty ? (
        <NoSubscriptions />
      ) : (
        <SubscriptionsBar
          subscriptions={subscriptions}
          setSubscriptionIndex={(value: number) => setSubscriptionIndex(value)}
          subscriptionIndex={subscriptionIndex}
        />
      )}
    </ContentContainer>
  );
};

const SubscriptionsHead = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 64px;
  margin: 0;
`;
