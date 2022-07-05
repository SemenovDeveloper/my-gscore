import styled from "styled-components";
import { ContentContainer, Button, Preloader } from "src/ui";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import {
  NoSubscriptions,
  SubscriptionsBar,
  UpgradePopup,
  CodesList
} from "src/components";
import {
  changeSubscription,
  getCodes,
  getProducts,
  getSubscriptions,
} from "src/store/ducks";
import Router from "next/router";
import { MEDIA_QUERY } from "src/lib/constants";
import { unwrapResult } from "@reduxjs/toolkit";

export const Subscriptions: React.FC = () => {
  const token = useAppSelector((state) => state.user.token);
  const { subscriptions, subscriptionsLoading } = useAppSelector(
    (state) => state.subscription
  );
  const { products } = useAppSelector((state) => state.products);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [subscriptionIndex, setSubscriptionIndex] = useState<number>(0);
  const [openedCard, setOpenedCard] = useState<number>(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getSubscriptions());
      await dispatch(getCodes());
      if (!products) {
        await dispatch(getProducts())
          .then(unwrapResult)
          .then((response) => {
          });
      }
    })();
  }, []);
  const upgradeSubscription = async (
    productId: number,
    subscribeId: number
  ) => {
    await dispatch(
      changeSubscription({
        productId: productId,
        subscribeId: subscribeId,
      })
    ).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        (async () => {
          await dispatch(getSubscriptions());
        })();
        (async () => {
          await dispatch(getCodes());
        })();
        setIsOpenPopup(false);
      }
    });
  };

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
              {subscriptions?.length && (
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
            {!subscriptions?.length ? (
              <NoSubscriptions />
            ) : (
              <SubscriptionsBlock>
                <SubscriptionsBar
                  openCard={(value: number) => setOpenedCard(value)}
                  setSubscriptionIndex={(value: number) =>
                    setSubscriptionIndex(value)
                  }
                  subscriptionIndex={subscriptionIndex}
                />
                <CodesList openedCardId={openedCard} />
              </SubscriptionsBlock>
            )}
            {isOpenPopup && (
              <UpgradePopup
                products={products}
                closePopup={() => setIsOpenPopup(false)}
                upgradeSubscription={upgradeSubscription}
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

const SubscriptionsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

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
