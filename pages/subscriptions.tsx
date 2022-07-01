import { NextPage } from "next";
import Head from "next/head";
import { Subscriptions } from "src/components";

const SubscriptionsPage: NextPage = ({ }) => {

  return (
    <>
      <Head>
        <title>Subscriptions</title>
      </Head>
      <Subscriptions />
    </>
  );
};

export default SubscriptionsPage;