import styled from "styled-components";
import { ContentContainer, Button, SlimContainer, Cart } from "src/ui";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { useRouter } from "next/router";
import { ISubscription } from "src/types";
import { store } from "src/store";
import { unwrapResult } from "@reduxjs/toolkit";
import { getSubscriptions } from "src/store/ducks";
import { NoSubscriptions } from "./no-subscriptions";

export const Subscriptions: React.FC = () => {
  // const { token } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push("/users/start-subscription");
  // };

  const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]);
  const [codes, setCodes] = useState([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(!subscriptions.length);

  useEffect(() => {
    // (async () => {
    //   const subscriptionsData = await store
    //     .dispatch(getSubscriptions())
    //     .then(unwrapResult);
    //   await setSubscriptions(subscriptionsData);
    // })();
  }, []);

  useEffect(() => {
    setIsEmpty(!subscriptions.length);
  }, [subscriptions]);

  return (
    <>
      <ContentContainer>
        <SubscriptionsHead>
          <STitle>My subscriptions</STitle>
          {!isEmpty && (
            <Button theme="primary" type="submit" smallText>
              Upgrade
            </Button>
          )}
        </SubscriptionsHead>
        {isEmpty ? <NoSubscriptions /> :
        <div>subs</div>}
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
