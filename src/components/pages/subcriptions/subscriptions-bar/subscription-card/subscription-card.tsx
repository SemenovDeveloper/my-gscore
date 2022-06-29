import { ISubscription } from "src/types";
import styled from "styled-components";
import { Button } from "src/ui";
import { SubscriptionH3, SubscriptionP } from "src/components"

interface ISubscriptionCard {
  subscription: ISubscription;
  isCardActive: boolean;
  openCard: () => void
}

export const SubscriptionCard: React.FC<ISubscriptionCard> = ({
  subscription,
  isCardActive,
  openCard
}) => {
  return (
    <SSubscriptionCard active={isCardActive}>
      <SCardTop>
        <SubscriptionH3>GScore</SubscriptionH3>
        <SubscriptionH3 active>Active</SubscriptionH3>
      </SCardTop>
      <SCardBottom>
        <SCardDescription>
          <STextBlock>
            <SHeader>{subscription.product.name + " license"}</SHeader>
            <SubscriptionP>
              {"valid until " +
                new Date(
                  subscription.currentPeriodEnd * 1000
                ).toLocaleDateString()}
            </SubscriptionP>
          </STextBlock>
          <Button theme="secondary" onClick={openCard}>View</Button>
        </SCardDescription>
        <SPrice>${subscription.product.prices[0].price}</SPrice>
      </SCardBottom>
    </SSubscriptionCard>
  );
};

const SSubscriptionCard = styled.div<{active: boolean}>`
  width: 620px;
  height: 334px;
  border-radius: 12px;
  background: var(--dark-gray);
  box-shadow: 0px 24px 65px rgba(0, 0, 0, 0.12);
  opacity: ${(props) => props.active? '1' : '0.5'}
`;

const SCardTop = styled.div`
  width: 100%;
  padding: 48px 64px 32px 32px;
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SCardBottom = styled.div`
  width: 100%;
  padding: 32px 64px 48px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SPrice = styled.p`
  width: 64px;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
`;

const SCardDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const STextBlock = styled.div`
  margin-bottom: 32px;
`
const SHeader = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 12px;
`