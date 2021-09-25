import Head from "next/head";
import type { NextPage } from "next";
import { Icon } from "@iconify/react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

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
            React, GraphQL and currently breaking things with Golang in my spare
            time.
          </p>
        </div>
        <div className={styles.contactSection}>
          {/* <button className={styles.contactButton}>Contact</button> */}
          <ul className={styles.socialLinks}>
            <li className={styles.socialLinkItem}>
              <a
                className={styles.socialLink}
                href="https://github.com/damiensedgwick/"
                target="_blank"
              >
                <AiOutlineGithub />
              </a>
            </li>
            <li className={styles.socialLinkItem}>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/damiensedgwick/"
                target="_blank"
              >
                <AiOutlineLinkedin />
              </a>
            </li>
            <li className={styles.socialLinkItem}>
              <a
                className={styles.socialLink}
                href="https://twitter.com/damiensedgwick"
                target="_blank"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className={styles.socialLinkItem}>
              <a
                className={styles.socialLink}
                href="https://www.polywork.com/dks"
                target="_blank"
              >
                <Icon icon="simple-icons:polywork" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
