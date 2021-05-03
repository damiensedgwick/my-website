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
        <html lang="en-GB" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={pageDescription} />

        <title>{pageTitle}</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>
    </>
  );
};
