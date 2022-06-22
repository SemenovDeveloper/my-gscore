import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { axiosInstance } from "src/utils";
import { Home } from "src/components";

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

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axiosInstance.get(`products`);

  if (!response) {
    return {
      notFound: true,
    };
  }

  return { props: { products: response.data } };
};
