import Head from "next/head";
import React from "react";
import { BottomTabNav } from "./BottomTabNav";

interface LayoutProps {
  metaTitle: string;
  metaDescription: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  metaTitle,
  metaDescription,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <div className="md:hidden">
        <BottomTabNav />
      </div>
    </>
  );
};
