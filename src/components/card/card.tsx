import { COLORS } from "src/lib";
import { IProduct } from "src/types";
import CheckedCircleRed from "public/img/checked-circle-red.svg";
import CheckedCircleBlack from "public/img/checked-circle-black.svg";
import { Button } from "src/ui";
import S from "styled-components";

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
  return (
    <div className="card">
      {activeCardID == product.id ? (
        <SCard
          active
          onMouseOver={() => setCardActive(product.id)}
          onMouseOut={() => setCardActive(2)}
        >
          <CardTitle>${product.prices[0].price}</CardTitle>
          <Description active>
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
              <CheckedCircleRed />
              <FeatureText>
                {product.sitesCount === 1
                  ? "Single site license"
                  : `All features for ${product.sitesCount} sites`}
              </FeatureText>
            </Feature>
            <Feature>
              <CheckedCircleRed />
              <FeatureText>Special introductory pricing</FeatureText>
            </Feature>
            <Feature>
              <CheckedCircleRed />
              <FeatureText>Unlimited Pages and Keywords</FeatureText>
            </Feature>
            <Feature>
              <CheckedCircleRed />
              <FeatureText>Billed annually</FeatureText>
            </Feature>
          </FeatureList>
          <Button theme="secondary" size="wide">
            Get Gscore
          </Button>
        </SCard>
      ) : (
        <SCard
          onMouseOver={() => setCardActive(product.id)}
          onMouseOut={() => setCardActive(2)}
        >
          <CardTitle>${product.prices[0].price}</CardTitle>
          <Description>
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
              <CheckedCircleBlack />
              <FeatureText>
                {product.sitesCount === 1
                  ? "Single site license"
                  : `All features for ${product.sitesCount} sites`}
              </FeatureText>
            </Feature>
            <Feature>
              <CheckedCircleBlack />
              <FeatureText>Special introductory pricing</FeatureText>
            </Feature>
            <Feature>
              <CheckedCircleBlack />
              <FeatureText>Unlimited Pages and Keywords</FeatureText>
            </Feature>
            <Feature>
              <CheckedCircleBlack />
              <FeatureText>Billed annually</FeatureText>
            </Feature>
          </FeatureList>
          <Button theme="secondary" size="wide" darkLabel>
            Get Gscore
          </Button>
        </SCard>
      )}
    </div>
  );
};

interface ISCard {
  active?: boolean;
}

interface IDescription {
  active?: boolean;
}

const SCard = S.div<ISCard>`
  width: 404px;
  height: 612px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) =>
    props.active ? COLORS.lightRed : COLORS.darkestGray};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  margin-top: ${(props) => (props.active ? "0px" : "50px")};
  margin-bottom: ${(props) => (props.active ? "50px" : "0")};
  padding: 42px 48px;
  transition: all 0.4s linear;

  p {
    color: ${(props) => props.active && COLORS.white};
  }

  @media screen and (max-width: 1390px) {
    margin-top: 50px;
  }
`;

const Description = S.div<IDescription>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4px 0 40px;
  p {
    margin-top: 8px;
    color: ${(props) => (props.active ? COLORS.white : COLORS.gray)};
  }
`;

const FeatureList = S.ul`
  width: 100%;
  border-top: 1px solid ${COLORS.gray};
  padding: 38px 0 32px;
  list-style: none;
  li {
    margin-bottom: 16px;
  }
  li:last-child {
    margin-bottom: 0;
  }
`;
const Feature = S.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardTitle = S.h2`
  font-weight: 700;
  font-size: 54px;
  line-height: 66px;
  margin: 0;
  text-align: center;
  color: ${COLORS.white};
`;

const FeatureText = S.p`
  margin-left: 14px;
`;
