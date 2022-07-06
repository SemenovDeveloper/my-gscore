import { ISubscription } from "src/types";
import styled from "styled-components";
import { Button } from "src/ui";
import { SubscriptionH3, SubscriptionP } from "src/components";
import { MEDIA_QUERY } from "src/lib/constants";

interface ISubscriptionCard {
  subscription: ISubscription;
  isCardActive: boolean;
  openCard: (value: number) => void;
}

export const SubscriptionCard: React.FC<ISubscriptionCard> = ({
  subscription,
  isCardActive,
  openCard,
}) => {
  return (
    <Root active={isCardActive}>
      <CardTop>
        <SubscriptionH3>GScore</SubscriptionH3>
        <SubscriptionH3 active>Active</SubscriptionH3>
      </CardTop>
      <CardBottom>
        <CardDescription>
          <TextBlock>
            <Header>{subscription.product.name + " license"}</Header>
            <SubscriptionP>
              {"valid until " +
                new Date(
                  subscription.currentPeriodEnd * 1000
                ).toLocaleDateString()}
            </SubscriptionP>
          </TextBlock>
          <Button theme="secondary" onClick={() => openCard(subscription.id)}>
            View
          </Button>
        </CardDescription>
        <Price>${subscription.product.prices[0].price}</Price>
      </CardBottom>
    </Root>
  );
};

const Root = styled.div<{ active: boolean }>`
  width: 620px;
  height: 334px;
  border-radius: 12px;
  background: var(--dark-gray);
  box-shadow: 0px 24px 65px rgba(0, 0, 0, 0.12);
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  @media ${MEDIA_QUERY.tablet} {
    width: 318px;
    height: 268px;
    border-radius: 8px;
  }
`;

const CardTop = styled.div`
  width: 100%;
  padding: 48px 64px 32px 32px;
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${MEDIA_QUERY.tablet} {
    padding: 32px 24px 24px 16px;
  }
`;

const CardBottom = styled.div`
  width: 100%;
  padding: 32px 64px 48px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${MEDIA_QUERY.tablet} {
    padding: 24px 24px 32px 16px;
  }
`;

const Price = styled.p`
  width: 64px;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBlock = styled.div`
  margin-bottom: 32px;
`;

const Header = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 12px;
`;
