import { Children } from "react";
import { ShoppingBasket } from "src/assets/icons";
import styled from "styled-components";

interface ICart {
  name: string;
  price: string;
  icon?: boolean;
}

export const Cart: React.FC<ICart> = ({ name, price, icon }) => {
  return (
    <SCart>
      <SCartHeader>
        <h4>Package name</h4>
        <h4>Price</h4>
      </SCartHeader>
      <SCartBody>
        <p>{name}</p>
        <SPrice>
          <p>${price}</p>
          {icon && <ShoppingBasket />}
        </SPrice>
      </SCartBody>
    </SCart>
  );
};

const SCart = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 48px;
  border-radius: 12px;
  background: var(--darkest-gray);
`;


const SCartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 48px 72px 32px 32px;
  border-bottom: 1px solid var(--gray);
  h4 {
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
  }
`;

const SCartBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 50px 48px 32px;
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
  }
`;

const SPrice = styled.div`
  width: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

