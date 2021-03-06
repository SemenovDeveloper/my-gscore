import Link from "next/link";
import { ContentContainer } from "src/ui";
import styled from "styled-components";
import { IProduct } from "src/types";
import { Card } from "src/components";
import { useState } from "react";
import { MEDIA_QUERY } from "src/lib/constants";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { selectProduct } from "src/store/ducks";
import { useRouter } from "next/router";

export const Home: React.FC<{ products: IProduct[] }> = ({ products }) => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const [activeCardID, setActiveCardID] = useState(2);
  const router = useRouter();

  const handleClick = (product: IProduct) => {
    dispatch(selectProduct(product));
    if (token) {
      router.push("/users/checkout");
    } else {
      router.push("/users/registration");
    }
  };

  return (
    <ContentContainer>
      <StyledHome>
        <h2>Get started with Gscore today!</h2>
        <CardsContainer>
          {products.map((product: IProduct) => (
            <Card
              key={product.id}
              handleClick={handleClick}
              product={product}
              activeCardID={activeCardID}
              setCardActive={(productID: number) => setActiveCardID(productID)}
            />
          ))}
        </CardsContainer>
        <p>Have more than 10 sites?</p>
        <Link href="">
          <a>Contact Us</a>
        </Link>
      </StyledHome>
    </ContentContainer>
  );
};

const StyledHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: var(--red);
  }
  @media ${MEDIA_QUERY.mobile} {
    h2 {
      text-align: center;
    }
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  margin: 48px 0 33px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1390px) {
    justify-content: space-evenly;
  }
  @media ${MEDIA_QUERY.mobile} {
    margin: 0px 0 12px;
  }
`;
