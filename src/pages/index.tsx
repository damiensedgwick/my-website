import Head from "next/head";

import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Damien Sedgwick | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Content */}
      <section className="masthead px-6 md:px-0">
        <div
          className="container mx-auto flex flex-row justify-center items-center"
          style={{ height: "calc(75vh)" }}
        >
          <div className="container mx-auto text-center">
            <h1 className="text-3xl mb-3">Damien Sedgwick</h1>
            <p>
              <i>website under construction...</i>
            </p>
          </div>
        </div>
      </section>
      {/* /.Page Content */}
    </Layout>
  );
}
