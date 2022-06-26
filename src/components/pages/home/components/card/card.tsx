import { IProduct } from "src/types";
import { CheckedCircleRed, CheckedCircleBlack } from "src/assets/icons";
import { Button } from "src/ui";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { selectProduct } from "src/store/ducks";
import { useRouter } from "next/router";

interface ICard {
  product: IProduct;
  activeCardID: number;
  setCardActive: (productID: number) => void;
}

export const Card: React.FC<ICard> = ({
  product,
  activeCardID,
  setCardActive,
}) => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClick = () => {
    dispatch(selectProduct(product));
    if (token) {
      router.push("/users/checkout");
    } else {
      router.push("/users/registration");
    }
  };

  return (
    <SCard
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
        onClick={handleClick}
      >
        Get Gscore
      </Button>
    </SCard>
  );
};

const SCard = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 404px;
  margin-top: ${(props) => (props.active ? "0px" : "50px")};
  margin-bottom: ${(props) => (props.active ? "50px" : "0")};
  padding: 42px 48px;
  background-color: ${(props) =>
    props.active ? "var(--light-red)" : "var(--darkest-gray)"};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  transition: all 0.4s linear;

  p {
    color: ${(props) => props.active && "var(--white)"};
  }

  @media screen and (max-width: 1390px) {
    margin-top: 50px;
    margin-bottom: 0px;
  }
`;

const Description = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4px 0 40px;
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
