import Link from "next/link";
import { ContentContainer } from "src/ui";
import styled from "styled-components";
import { IProduct } from "src/types";
import { Card } from "src/components";
import { useState } from "react";

export const Home: React.FC<{products: IProduct[]}> = ({ products }) => {

  const [activeCardID, setActiveCardID] = useState(2);

  return (
    <>
      <ContentContainer>
        <StyledHome>
          <h2>Get started with Gscore today!</h2>
          <CardsContainer>
            {products.map((product: IProduct) => (
              <Card
                key={product.id}
                product={product}
                activeCardID={activeCardID}
                setCardActive={(productID: number) =>
                  setActiveCardID(productID)
                }
              />
            ))}
          </CardsContainer>
          <p>Have more than 10 sites?</p>
          <Link href="">
            <a>Contact Us</a>
          </Link>
        </StyledHome>
      </ContentContainer>
    </>
  );
};

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 0 42px;
  a {
    color: var(--red);
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 48px 0 33px;
  @media screen and (max-width: 1390px) {
    justify-content: space-evenly;
  }
`
