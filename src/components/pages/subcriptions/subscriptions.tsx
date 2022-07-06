import styled from "styled-components";
import { ContentContainer, Button, Preloader } from "src/ui";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import {
  NoSubscriptions,
  SubscriptionsBar,
  UpgradePopup,
  CodesList,
} from "src/components";
import {
  activateCode,
  changeSubscription,
  getCodes,
  getProducts,
  getSubscriptions,
  manageCodes,
} from "src/store/ducks";
import Router from "next/router";
import { MEDIA_QUERY } from "src/lib/constants";
import useComponentVisible from "src/hooks/useComponentVisible";
export const Subscriptions: React.FC = () => {
  const [subscriptionIndex, setSubscriptionIndex] = useState<number>(0);
  const [openedCard, setOpenedCard] = useState<number>(0);
  const { ref, isComponentVisible, setIsComponentVisible } =
  useComponentVisible(false);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);
  const { products } = useAppSelector((state) => state.products);
  const { subscriptions, subscriptionsLoading } = useAppSelector(
    (state) => state.subscription
  );
  
  useEffect(() => {
    dispatch(getSubscriptions());
    dispatch(getCodes());
    if (!products) {
      dispatch(getProducts());
    }
  }, []);
  const handleActivateCode = async (code: string) => {
    await dispatch(activateCode(code));
  };

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
        dispatch(getSubscriptions());
        dispatch(getCodes());
        setIsComponentVisible(false);
      }
    });
  };

  const handleManageCodes = (codeIds: number[]) => {
    dispatch(manageCodes({ codesIds: codeIds, subscribeId: openedCard })).then(
      (response) => {
        if (response.meta.requestStatus === "fulfilled") {
          dispatch(getCodes());
        }
      }
    );
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
                  onClick={() => setIsComponentVisible(true)}
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
                <CodesList
                  handleManageCodes={handleManageCodes}
                  openedCardId={openedCard}
                  handleActivateCode={handleActivateCode}
                />
              </SubscriptionsBlock>
            )}
            <div ref={ref}>
              {isComponentVisible && (
                <UpgradePopup
                  products={products}
                  closePopup={() => setIsComponentVisible(false)}
                  upgradeSubscription={upgradeSubscription}
                  currentSubscription={subscriptions[subscriptionIndex]}
                />
              )}
            </div>
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
  align-items: center;
  button {
    @media ${MEDIA_QUERY.mobile} {
      background-color: var(--black);
      color: var(--light-red);
      width: 100px;
      &:hover {
        background-color: var(--black);
        color: var(--dark-red);
      }
    }
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 64px;
  margin: 0;
  @media ${MEDIA_QUERY.tablet} {
    font-size: 28px;
    line-height: 40px;
  }
`;
