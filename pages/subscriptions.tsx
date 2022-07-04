import { unwrapResult } from "@reduxjs/toolkit";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { Subscriptions } from "src/components";
import { useAppDispatch } from "src/hooks";
import { getCodes } from "src/store/ducks";

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


