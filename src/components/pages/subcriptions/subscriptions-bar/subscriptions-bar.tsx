import { useAppDispatch, useAppSelector } from "src/hooks";
import { ISubscription } from "src/types";
import styled from "styled-components";
import { useState } from "react";
import { SubscriptionCard, SubscriptionH3 } from "src/components";
import { ArrowLeft } from "src/assets/icons";
import { CodesList } from "src/components";

interface ISubscriptionBar {
  subscriptionIndex: number;
  subscriptions: ISubscription[];
  setSubscriptionIndex: (value: number) => void;
}

export const SubscriptionsBar: React.FC<ISubscriptionBar> = ({
  subscriptions,
  setSubscriptionIndex,
  subscriptionIndex
}) => {
  const dispatch = useAppDispatch();
  const [openedCard, setOpenedCard] = useState(0);

  return (
    <Root>
      <SubscriptionsSlider position={subscriptionIndex + 1}>
        <SlidesList position={subscriptionIndex + 1}>
          {subscriptions.map((subscription: ISubscription, index) => {
            return (
              <SubscriptionCard
                subscription={subscription}
                isCardActive={subscriptionIndex === index}
                key={subscription.id}
                openCard={() => setOpenedCard(index)}
              />
            );
          })}
        </SlidesList>
      </SubscriptionsSlider>
      <SubscriptionsSliderNav
        activeCard={subscriptionIndex + 1}
        countCard={subscriptionIndex + 1}
      >
        <SliderBtn
          onClick={() => {
            setSubscriptionIndex(subscriptionIndex- 1);
          }}
          disabled={subscriptionIndex === 0}
        >
          <ArrowLeft />
        </SliderBtn>
        <Count>
          <SubscriptionH3>{subscriptionIndex+1}</SubscriptionH3>
          <CountH3>/{subscriptions.length}</CountH3>
        </Count>
        <SliderBtn
          onClick={() => {
            setSubscriptionIndex(subscriptionIndex + 1);
          }}
          disabled={subscriptionIndex + 1 === subscriptions.length}
        >
          <ArrowLeft />
        </SliderBtn>
      </SubscriptionsSliderNav>
      <CodesList codes={subscriptions[openedCard].codes} />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubscriptionsSlider = styled.div<{ position: number }>`
  position: relative;
  width: 100%;
  margin-top: 48px;
`;

const SlidesList = styled.ul<{ position: number }>`
  display: flex;
  gap: 24px;
  position: absolute;
  left: ${(props) => props.position && `calc((1 - ${props.position})*644px)`};
`;

const SubscriptionsSliderNav = styled.div<{
  activeCard: number;
  countCard: number;
}>`
  margin-top: 400px;
  display: flex;
  width: 159px;
  height: 44px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    &:first-child {
      border: 1px solid
        ${(props) =>
          props.activeCard === 1 ? "var(--dark-gray)" : "var(--gray)"};
    }
    &:last-child {
      svg {
        transform: rotate(180deg);
      }
      border: 1px solid
        ${(props) =>
          props.activeCard === props.countCard
            ? "var(--dark-gray)"
            : "var(--gray)"};
    }
  }
`;

const SliderBtn = styled.button`
  padding: 10px 10px 8px 10px;
  border-radius: 12px;
  background-color: var(--black);
  box-shadow: none;
`;

const Count = styled.div`
  display: flex;
  flex-direction: row;
`;

const CountH3 = styled.h3`
  font-size: 22px;
  line-height: 28px;
  color: var(--dark-gray);
`;
