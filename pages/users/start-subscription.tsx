import { NextPage } from "next";
import Head from "next/head";
import { StartSubscription} from 'src/components'

const CheckoutPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Start Subscription</title>
      </Head>
      <StartSubscription />
    </>
  );
};

export default CheckoutPage;
