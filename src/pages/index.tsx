import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={`px-3 md:px-0 w-full`}>
      <Head>
        <title>Damien Sedgwick | Software Engineer</title>
        <meta
          name="description"
          content="Damien Sedgwick is a software engineer currently working at Yozobi."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className={`flex flex-col items-center space-y-4 pt-8`}>
          <Image
            className={`rounded-full`}
            src={`/avatar.jpg`}
            width={125}
            height={125}
            alt={`Damien Sedgwick Avatar`}
          />
          <h1>Damien Sedgwick</h1>
          <p>
            A software engineer with strong skills in JavaScript/TypeScript,
            React, XState, Hasura and Graphql. I am also passionate about
            learning new technologies and contributing to open source software
            in my spare time.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
