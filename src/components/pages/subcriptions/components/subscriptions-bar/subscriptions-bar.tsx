import { useAppSelector } from "src/hooks";
import styled from "styled-components";
import { SubscriptionCard, SubscriptionH3 } from "src/components";
import { ArrowLeft } from "src/assets/icons";
import { Preloader } from "src/ui";
import { MEDIA_QUERY } from "src/lib/constants";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Swiper as ISwiper } from "swiper";

interface ISubscriptionBar {
  subscriptionIndex: number;
  setSubscriptionIndex: (value: number) => void;
  openCard: (value: number) => void;
}

export const SubscriptionsBar: React.FC<ISubscriptionBar> = ({
  setSubscriptionIndex,
  subscriptionIndex,
  openCard,
}) => {
  const { subscriptions, subscriptionsLoading } = useAppSelector(
    (state) => state.subscription
  );

  const handleSlideChange = (swiper: ISwiper) => {
    setSubscriptionIndex(swiper.activeIndex);
  };

  return (
    <>
      <SubscriptionsSwiper>
        {subscriptionsLoading ? (
          <Preloader />
        ) : (
          <>
            <StyledSwiper
              spaceBetween={28}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {subscriptions.map((subscription, index) => (
                <SwiperSlide key={subscription.id}>
                  <SubscriptionCard
                    subscription={subscription}
                    isCardActive={subscriptionIndex === index}
                    key={subscription.id}
                    openCard={openCard}
                  />
                </SwiperSlide>
              ))}
            </StyledSwiper>
            <SwiperNav
              activeCard={subscriptionIndex + 1}
              countCard={subscriptionIndex + 1}
            >
              <SwiperBtn
                onClick={() => {
                  setSubscriptionIndex(subscriptionIndex - 1);
                }}
                disabled={subscriptionIndex === 0}
              >
                <ArrowLeft />
              </SwiperBtn>
              <Count>
                <SubscriptionH3>{subscriptionIndex + 1}</SubscriptionH3>
                <CountH3>/{subscriptions.length}</CountH3>
              </Count>
              <SwiperBtn
                onClick={() => {
                  setSubscriptionIndex(subscriptionIndex + 1);
                }}
                disabled={subscriptionIndex + 1 === subscriptions.length}
              >
                <ArrowLeft />
              </SwiperBtn>
            </SwiperNav>
          </>
        )}
      </SubscriptionsSwiper>
    </>
  );
};

const SubscriptionsSwiper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 48px;
  @media ${MEDIA_QUERY.tablet} {
    margin-top: 32px;
  }
`;

const SwiperNav = styled.div<{
  activeCard: number;
  countCard: number;
}>`
  width: 159px;
  height: 44px;
  margin-top: 24px;
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
    margin: 16px auto;
    align-self: center;
  }
`;

const SwiperBtn = styled.button`
  padding: 10px 10px 8px 10px;
  border-radius: 12px;
  background-color: var(--black);
  box-shadow: none;
  @media ${MEDIA_QUERY.tablet} {
    display: none;
  }
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

const StyledSwiper = styled(Swiper)`
  width: 620px;
  @media ${MEDIA_QUERY.tablet} {
    width: 318px;
  }
  .swiper {
    width: 100%;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
  }
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100%;
    flex-shrink: 1;
  }
`;
