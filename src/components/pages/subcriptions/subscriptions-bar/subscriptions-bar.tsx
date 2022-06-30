import { useAppDispatch, useAppSelector } from "src/hooks";
import { ISubscription } from "src/types";
import styled from "styled-components";
import { useState } from "react";
import { SubscriptionCard, SubscriptionH3 } from "src/components";
import { ArrowLeft } from "src/assets/icons";
import { CodesList } from "src/components";

interface ISubscriptionBar {
  subscriptions: ISubscription[];
}

export const SubscriptionsBar: React.FC<ISubscriptionBar> = ({
  subscriptions,
}) => {
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState(1);
  const [openedCard, setOpenedCard] = useState(0);

  return (
    <SSubscriptionBar>
      <SubscriptionsSlider position={activeCard}>
        <SSlidesList position={activeCard}>
          {subscriptions.map((subscription: ISubscription, index) => {
            return (
              <SubscriptionCard
                subscription={subscription}
                isCardActive={activeCard === index + 1}
                key={subscription.id}
                openCard={() => setOpenedCard(index)}
              />
            );
          })}
        </SSlidesList>
      </SubscriptionsSlider>
      <SubscriptionsSliderNav
        activeCard={activeCard}
        countCard={subscriptions.length}
      >
        <SliderBtn
          onClick={() => {
            setActiveCard(activeCard - 1);
          }}
          disabled={activeCard === 1}
        >
          <ArrowLeft />
        </SliderBtn>
        <SCount>
          <SubscriptionH3>{activeCard}</SubscriptionH3>
          <SCountH3>/{subscriptions.length}</SCountH3>
        </SCount>
        <SliderBtn
          onClick={() => {
            setActiveCard(activeCard + 1);
          }}
          disabled={activeCard === subscriptions.length}
        >
          <ArrowLeft />
        </SliderBtn>
      </SubscriptionsSliderNav>
      <CodesList codes={subscriptions[openedCard].codes}/>
    </SSubscriptionBar>
  );
};

const SSubscriptionBar = styled.div`
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

const SSlidesList = styled.ul<{ position: number }>`
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

const SCount = styled.div`
  display: flex;
  flex-direction: row;
`;

const SCountH3 = styled.h3`
  font-size: 22px;
  line-height: 28px;
  color: var(--dark-gray);
`;