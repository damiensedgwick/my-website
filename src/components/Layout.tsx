import React from "react";
import Head from "next/head";

import { Navigation } from "./Navigation";
import { Footer } from "../components/Footer";

interface Props {
  pageTitle: string;
  pageDescription: string;
  children: React.ReactNode;
}

export const Layout = ({ pageTitle, pageDescription, children }: Props) => {
  return (
    <>
      {/* Document head */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Global navigation */}
      <Navigation />

      {/* Page content */}
      <main>{children}</main>

      {/* Global footer */}
      <Footer />
    </>
  );
};
