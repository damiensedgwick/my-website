import Head from "next/head";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
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

      <header className="hidden shadow-2xl md:block">
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <div className="flex-row justify-center hidden text-white bg-gray-800 md:flex">
          <Footer />
        </div>

        <div className="block md:hidden">
          <BottomTabNav />
        </div>
      </footer>
    </>
  );
};
