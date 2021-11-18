import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div
      className={`px-3 md:px-0 w-full min-h-screen font-jetbrains text-dark dark:text-light bg-light dark:bg-dark`}
    >
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
        <div className={`w-full flex flex-row justify-end items-center p-3`}>
          {/*<button onClick={() => alert("TODO")}>switch theme</button>*/}
        </div>
        <div className={`flex flex-col items-center space-y-8 pt-8`}>
          <img
            className={`rounded-full border-4 border-light shadow-2xl`}
            src={`/avatar.jpg`}
            width={125}
            height={125}
            alt={`Damien Sedgwick Avatar`}
          />
          <h1 className={`text-2xl`}>Damien Sedgwick</h1>
          <p className={`max-w-prose`}>
            A software engineer with strong skills in JavaScript/TypeScript,
            React, XState, Hasura and Graphql. I am also passionate about
            learning new technologies and contributing to open source software
            in my spare time.
          </p>
          <ul className={`flex flex-row space-x-5`}>
            <li>
              <a
                className={`border-b`}
                href="https://www.github.com/damiensedgwick"
              >
                GitHub
              </a>
            </li>
            <li>
              <a className={`border-b`} href="https://www.polywork.com/dks">
                Polywork
              </a>
            </li>
            <li>
              <a
                className={`border-b`}
                href="https://www.linkedin.com/damiensedgwick"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className={`border-b`}
                href="https://www.twitter.com/damiensedgwick"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
