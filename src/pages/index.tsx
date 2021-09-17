import Head from "next/head";
import type { NextPage } from "next";

import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="stylesheet" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img
            className={styles.avatar}
            src="/avatar.jpeg"
            alt="Picture of Damien Sedgwick"
          />
        </div>
      </div>
      <h1 className={styles.cardTitle}>Damien Sedgwick</h1>
    </div>
  );
};

export default Home;
