import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { store } from "src/store";
import { getSubscriptions } from "src/store/ducks";
import { unwrapResult } from "@reduxjs/toolkit";
import { Subscriptions } from "src/components";

const SubscriptionsPage: NextPage = ({
  subscriptions
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <>
      <Head>
        <title>Subscriptions</title>
      </Head>
      <Subscriptions subscriptions={subscriptions}/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const subscriptions = await store.dispatch(getSubscriptions()).then(unwrapResult);

  return {
    props: {
      subscriptions,
    },
  };
};

export default SubscriptionsPage;