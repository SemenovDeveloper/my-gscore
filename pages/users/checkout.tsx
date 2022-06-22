import { NextPage } from "next";
import Head from "next/head";
import { Checkout } from 'src/components'

const CheckoutPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Checkout />
    </>
  );
};

export default CheckoutPage;
