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
        <title>Damien Sedgwick | Software Engineer</title>
        <meta
          name="description"
          content="Damien Sedgwick is a software engineer currently working at Yozobi."
        />
        <link rel="stylesheet" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.masthead}>
        <div className={styles.mastheadContent}>
          <div className={styles.mastheadBackground}>
            <img
              className={styles.mastheadAvatar}
              src="/avatar.jpg"
              alt="Picture of Damien Sedgwick"
            />
          </div>
        </div>
        <div className={styles.intro}>
          <h1 className={styles.introTitle}>Damien Sedgwick</h1>
          <p className={styles.introText}>
            A software engineer with strong skills in JavaScript/TypeScript,
            React, XState, Hasura and Graphql. I am also passionate about
            learning new technologies and contributing to open source software
            in my spare time.
          </p>
        </div>
        {/* Add in Work cards / project cards? */}
        <div className={styles.contactSection}>
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
