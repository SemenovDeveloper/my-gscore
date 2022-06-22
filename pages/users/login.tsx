import { NextPage } from "next";
import Head from "next/head";
import { Login } from 'src/components'


const LoginPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
