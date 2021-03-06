import { useAppSelector } from "src/hooks";
import { ISubscription } from "src/types";
import styled from "styled-components";
import { SubscriptionCard, SubscriptionH3 } from "src/components";
import { ArrowLeft } from "src/assets/icons";
import { Preloader } from "src/ui";
import { MEDIA_QUERY } from "src/lib/constants";

interface ISubscriptionBar {
  subscriptionIndex: number;
  setSubscriptionIndex: (value: number) => void;
  openCard: (value: number) => void;
}

export const SubscriptionsBar: React.FC<ISubscriptionBar> = ({
  setSubscriptionIndex,
  subscriptionIndex,
  openCard
}) => {

  const { subscriptions, subscriptionsLoading } = useAppSelector(
    (state) => state.subscription
  );

  return (
    <>
      <SubscriptionsSlider position={subscriptionIndex + 1}>
        {subscriptionsLoading ? (
          <Preloader />
        ) : (
          <SlidesList position={subscriptionIndex + 1}>
            {subscriptions.map((subscription: ISubscription, index) => {
              return (
                <SubscriptionCard
                  subscription={subscription}
                  isCardActive={subscriptionIndex === index}
                  key={subscription.id}
                  openCard={openCard}
                />
              );
            })}
          </SlidesList>
        )}
      </SubscriptionsSlider>
      <SubscriptionsSliderNav
        activeCard={subscriptionIndex + 1}
        countCard={subscriptionIndex + 1}
      >
        <SliderBtn
          onClick={() => {
            setSubscriptionIndex(subscriptionIndex - 1);
          }}
          disabled={subscriptionIndex === 0}
        >
          <ArrowLeft />
        </SliderBtn>
        <Count>
          <SubscriptionH3>{subscriptionIndex + 1}</SubscriptionH3>
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
    </>
  );
};


const SubscriptionsSlider = styled.div<{ position: number }>`
  position: relative;
  width: 100%;
  margin-top: 48px;
  @media ${MEDIA_QUERY.tablet} {
    margin-top: 32px;
  }
`;

const SlidesList = styled.ul<{ position: number }>`
  display: flex;
  gap: 24px;
  position: absolute;
  left: ${(props) => props.position && `calc((1 - ${props.position})*644px)`};
  @media ${MEDIA_QUERY.tablet} {
    gap: 12px;
    left: ${(props) => props.position && `calc((1 - ${props.position})*330px)`};
  }
`;

const SubscriptionsSliderNav = styled.div<{
  activeCard: number;
  countCard: number;
}>`
  width: 159px;
  height: 44px;
  margin-top: 400px;
  display: flex;
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
  @media ${MEDIA_QUERY.tablet} {
    margin: 284px auto 0;
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
