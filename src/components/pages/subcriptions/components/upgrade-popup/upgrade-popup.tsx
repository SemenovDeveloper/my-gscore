import { CloseIcon } from "src/assets/icons";
import { useAppSelector } from "src/hooks";
import { IProduct, ISubscription } from "src/types";
import { Button, ErrorMessage } from "src/ui";
import styled from "styled-components";
import { SubscriptionH3 } from "../subscription-text";

interface IUpgradePopup {
  products: IProduct[]
  currentSubscription: ISubscription;
  upgradeSubscription: (productId: number) => void
  closePopup: () => void;
}

export const UpgradePopup: React.FC<IUpgradePopup> = ({
  closePopup,
  currentSubscription,
  products,
  upgradeSubscription
}) => {
  const {error} = useAppSelector(state => state.subscription)

  return (
    <Root>
      <PopUpHeader>
        <SubscriptionH3>Upgrade Subscription</SubscriptionH3>
        <div onClick={() => closePopup()}>
          <CloseIcon />
        </div>
      </PopUpHeader>
      <CurrentSubscription>
        <h3>Your subscription</h3>
        <Description>
          <li>
            <h4>{currentSubscription.product.name} license</h4>
          </li>
          <li>Sites count: {currentSubscription.product.sitesCount}</li>
          <li>Price: ${currentSubscription.product.prices[0].price}</li>
        </Description>
      </CurrentSubscription>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Products>
        {products.map((product) => (
          <UpgradeCard key={product.id}>
            <li>
              <h4>{product.name} license</h4>
            </li>
            <li>Sites count: {product.sitesCount}</li>
            <li>Price: ${product.prices[0].price}</li>
            <Button
              theme="secondary"
              smallText
              onClick={() => upgradeSubscription(product.id)}
            >
              Select
            </Button>
          </UpgradeCard>
        ))}
      </Products>
    </Root>
  );
};

const Root = styled.div`
  position: absolute;
  top: 150px;
  right: 0px;
  width: 80%;
  padding: 32px;
  border-radius: 12px;
  background-color: var(--darkest-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const PopUpHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CurrentSubscription = styled.div`
  width: 200px;
  margin-top: 24px;
  padding: 24px;
  border-radius: 12px;
  background-color: var(--dark-gray);
`;
const Description = styled.ul`
  list-style: none;
  li {
    margin: 12px 0;
  }
`;
const Products = styled.div`
  width: 100%;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 2px solid var(--gray);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
`;

const UpgradeCard = styled.ul`
  width: 200px;
  margin: 10px;
  padding: 18px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark-gray);
  list-style: none;
  li {
    margin: 12px 0;
  }
  button {
    margin-top: 24px;
  }
`;
