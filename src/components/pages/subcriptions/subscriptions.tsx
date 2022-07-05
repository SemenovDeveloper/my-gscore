import styled from "styled-components";
import { ContentContainer, Button, Preloader } from "src/ui";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import {
  NoSubscriptions,
  SubscriptionsBar,
  UpgradePopup,
} from "src/components";
import { getCodes, getSubscriptions } from "src/store/ducks";
import Router from "next/router";
import { MEDIA_QUERY } from "src/lib/constants";

export const Subscriptions: React.FC = () => {
  const token = useAppSelector((state) => state.user.token);
  const { subscriptions, subscriptionsLoading } = useAppSelector(
    (state) => state.subscription
  );
  const [isEmpty, setIsEmpty] = useState<boolean>(!subscriptions?.length);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [subscriptionIndex, setSubscriptionIndex] = useState<number>(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getSubscriptions());
      await dispatch(getCodes());
    })();
  }, []);

  useEffect(() => {
    setIsEmpty(!subscriptions?.length);
  }, [subscriptions]);

  const registerRoute = () => {
    Router.push("/users/registration");
  };

  return (
    <>
      {token ? (
        subscriptionsLoading ? (
          <Preloader />
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
        )
      ) : (
        registerRoute()
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
  @media ${MEDIA_QUERY.mobile} {
    font-size: 28px;
    line-height: 40px;
  }
`;
