import { NextPage } from "next";
import Head from "next/head";
import { Settings } from 'src/components';

const SettingsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Settings />
    </>
  );
};

export default SettingsPage;
