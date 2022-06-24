import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { Home } from "src/components";
import { store } from "src/store";
import { getProducts } from "src/store/ducks/products/products-reducers";
import { unwrapResult } from "@reduxjs/toolkit";


const HomePage: NextPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Home products={products} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await store.dispatch(getProducts()).then(unwrapResult);

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
