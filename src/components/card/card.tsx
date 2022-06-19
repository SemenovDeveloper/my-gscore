import { COLORS } from "src/lib";
import styled from "styled-components";
import { IProduct } from "src/types";
import CheckedCircleRed from "public/img/checked-circle-red.svg";
import CheckedCircleBlack from "public/img/checked-circle-black.svg";
import { Button } from "src/ui";

export const Card: React.FC<IProduct> = ({ id, sitesCount, name, prices }) => {
  return (
    <StyledCard>
      <CardTitle>${prices[0].price}</CardTitle>
      <Description>
        <h3>
          {sitesCount === 1
            ? "Single site license"
            : `${sitesCount} Site license`}{" "}
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
            {sitesCount === 1
              ? "Single site license"
              : `All features for ${sitesCount} sites`}
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
      <Button theme="secondary" size="wide" darkLabel={true}>Get Gscore</Button>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 404px;
  height: 612px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${COLORS.darkestGray};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  margin-top: 50px;
  padding: 42px 48px;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4px 0 40px;
  p {
    margin-top: 8px;
    color: ${COLORS.gray};
  }
`;

const FeatureList = styled.ul`
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
const Feature = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 54px;
  line-height: 66px;
  margin: 0;
  text-align: center;
  color: ${COLORS.white};
`;

const DescText = styled.p`
  margin: 0px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
`;

const FeatureText = styled.p`
  margin-left: 14px;
`