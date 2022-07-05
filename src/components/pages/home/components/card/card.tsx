import { IProduct } from "src/types";
import { CheckedCircleRed, CheckedCircleBlack } from "src/assets/icons";
import { Button } from "src/ui";
import styled from "styled-components";

interface ICard {
  product: IProduct;
  activeCardID: number;
  setCardActive: (productID: number) => void;
  handleClick: (product: IProduct) => void
}

export const Card: React.FC<ICard> = ({
  product,
  activeCardID,
  setCardActive,
  handleClick
}) => {

  return (
    <Root
      active={activeCardID == product.id}
      onMouseOver={() => setCardActive(product.id)}
      onMouseOut={() => setCardActive(2)}
    >
      <CardTitle>${product.prices[0].price}</CardTitle>
      <Description active={activeCardID == product.id}>
        <h3>
          {product.sitesCount === 1
            ? "Single site license"
            : `${product.sitesCount} Site license`}{" "}
        </h3>
        <p>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </p>
      </Description>
      <FeatureList>
        <Feature>
          {activeCardID == product.id ? (
            <CheckedCircleRed />
          ) : (
            <CheckedCircleBlack />
          )}
          <FeatureText>
            {product.sitesCount === 1
              ? "Single site license"
              : `All features for ${product.sitesCount} sites`}
          </FeatureText>
        </Feature>
        <Feature>
          {activeCardID == product.id ? (
            <CheckedCircleRed />
          ) : (
            <CheckedCircleBlack />
          )}
          <FeatureText>Special introductory pricing</FeatureText>
        </Feature>
        <Feature>
          {activeCardID == product.id ? (
            <CheckedCircleRed />
          ) : (
            <CheckedCircleBlack />
          )}
          <FeatureText>Unlimited Pages and Keywords</FeatureText>
        </Feature>
        <Feature>
          {activeCardID == product.id ? (
            <CheckedCircleRed />
          ) : (
            <CheckedCircleBlack />
          )}
          <FeatureText>Billed annually</FeatureText>
        </Feature>
      </FeatureList>
      <Button
        theme="secondary"
        size="wide"
        darkLabel={activeCardID !== product.id}
        onClick={() => handleClick(product)}
      >
        Get Gscore
      </Button>
    </Root>
  );
};

const Root = styled.div<{ active?: boolean }>`
  width: 404px;
  margin: ${(props) => (props.active ? "0px 0 50px" : "50px 0 0px")};
  padding: 42px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 12px;
  background-color: ${(props) =>
    props.active ? "var(--light-red)" : "var(--darkest-gray)"};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  transition: all 0.4s linear;
  p {
    color: ${(props) => props.active && "var(--white)"};
  }
  @media screen and (max-width: 1390px) {
    margin: 50px 0 0px;
  }
`;

const Description = styled.div<{ active?: boolean }>`
  width: 100%;
  padding: 4px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    margin-top: 8px;
    color: ${(props) => (props.active ? "var(--white)" : "var(--gray)")};
  }
`;

const FeatureList = styled.ul`
  width: 100%;
  padding: 38px 0 32px;
  border-top: 1px solid var(--gray);
  list-style: none;
  li {
    margin-bottom: 16px;
  }
  li:last-child {
    margin-bottom: 0;
  }
`;

const Feature = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 54px;
  line-height: 66px;
  text-align: center;
  color: var(--white);
`;

const FeatureText = styled.p`
  margin-left: 14px;
`;
