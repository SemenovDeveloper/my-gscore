import { NextPage } from "next";
import Head from "next/head";
import { Registration } from 'src/components';

const RegistrationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Registaration</title>
      </Head>
      <Registration />
    </>
  );
};

export default RegistrationPage;
