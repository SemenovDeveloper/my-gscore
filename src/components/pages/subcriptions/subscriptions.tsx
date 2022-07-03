import styled from "styled-components";
import { ContentContainer, Button } from "src/ui";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "src/hooks";
import {
  NoSubscriptions,
  SubscriptionsBar,
  UpgradePopup,
} from "src/components";

export const Subscriptions: React.FC = () => {
  const { subscriptions, subscriptionsLoading } = useAppSelector(
    (state) => state.subscription
  );
  const [subscriptionIndex, setSubscriptionIndex] = useState<number>(0);
  const [codes, setCodes] = useState([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(!subscriptions.length);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  useEffect(() => {
    setIsEmpty(!subscriptions.length);
  }, [subscriptions]);

  return (
    <>
      {subscriptionsLoading ? (
        <div>Loading</div>
      ) : (
        <ContentContainer>
          <SubscriptionsHead>
            <Title>My subscriptions</Title>
            {!isEmpty && (
              <Button
                theme="primary"
                type="submit"
                smallText
                onClick={() => setIsOpenPopup(true)}
              >
                Upgrade
              </Button>
            )}
          </SubscriptionsHead>
          {isEmpty ? (
            <NoSubscriptions />
          ) : (
            <SubscriptionsBar
              subscriptions={subscriptions}
              setSubscriptionIndex={(value: number) =>
                setSubscriptionIndex(value)
              }
              subscriptionIndex={subscriptionIndex}
            />
          )}
          {isOpenPopup && (
            <UpgradePopup
              closePopup={() => setIsOpenPopup(false)}
              currentSubscription={subscriptions[subscriptionIndex]}
            />
          )}
        </ContentContainer>
      )}
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

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 64px;
  margin: 0;
`;
