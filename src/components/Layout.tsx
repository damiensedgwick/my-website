import React from "react";
import Head from "next/head";

import { Header } from "./Header";

interface Props {
  pageTitle: string;
  pageDescription: string;
  children: React.ReactNode;
}

export const Layout = ({ pageTitle, pageDescription, children }: Props) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>
    </>
  );
};
