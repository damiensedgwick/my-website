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
        <div className={styles.cardInner}>
          <div className={styles.cardHeader}>
            <img
              className={styles.avatar}
              src="/avatar.jpeg"
              alt="Picture of Damien Sedgwick"
            />
          </div>
        </div>
        <div className={styles.intro}>
          <h1 className={styles.cardTitle}>Damien Sedgwick</h1>
          <p className={styles.cardSubtitle}>Frontend Developer</p>
          <p className={styles.cardIntroText}>
            A frontend developer with strong skills in JavaScript/TypeScript,
            React, GraphQL and currently learning Golang.
          </p>
        </div>
        <div className={styles.contactSection}>
          {/* <button className={styles.contactButton}>Contact</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
