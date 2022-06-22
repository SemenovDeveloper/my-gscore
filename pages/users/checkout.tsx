import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { COLORS } from "src/lib";
import { ContentContainer, Button, SlimContainer } from "src/ui";
import { AuthorizationBar } from "src/components";

const Checkout: NextPage = () => {

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <ContentContainer>
        <SlimContainer>
          <AuthorizationBar step="checkout" />
          <Container>
            <h2>Checkout</h2>

            <Button theme="primary" type="submit" smallText>
              Purchase
            </Button>
          </Container>
        </SlimContainer>
      </ContentContainer>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

export default Checkout;
