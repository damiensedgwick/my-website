import Head from "next/head";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Damien Sedgwick | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main
        className="flex flex-col justify-center items-center"
        style={{ height: "calc(100vh - 72px" }}
      >
        <h1 className="text-2xl md:text-4xl mb-4">Damien Sedgwick</h1>
        <p>
          <i>Coming soon...</i>
        </p>
      </main>
    </div>
  );
}
