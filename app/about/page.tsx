import Image from 'next/image';
import styles from './page.module.css';

import github from '../../public/github-logo.png';
import remix from '../../public/remix-logo.png';
import xstate from '../../public/xstate-catalogue-logo.png';
import nordev from '../../public/nordev-logo.jpeg';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.content}>
          I like contributing where I can to open source software or projects
          such as Norfolk Developers, XState Catalogue, React Simple Hook Modal,
          Remix and Github CLI
        </p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <a
            className={styles.cardLink}
            href='https://cli.github.com/'
            target='_blank'
            rel='noopener'
          >
            <Image
              className={styles.cardImage}
              src={github}
              alt=''
              height={100}
              width={200}
            />
          </a>
        </div>
        <div className={styles.card}>
          <a
            className={styles.cardLink}
            href='https://norfolkdevelopers.com/'
            target='_blank'
            rel='noopener'
          >
            <Image
              className={styles.cardImage}
              src={nordev}
              alt=''
              height={100}
              width={200}
            />
          </a>
        </div>
        <div className={styles.card}>
          <a
            className={styles.cardLink}
            href='https://xstate-catalogue.com/'
            target='_blank'
            rel='noopener'
          >
            <Image
              className={styles.cardImage}
              src={xstate}
              alt=''
              height={100}
              width={200}
            />
          </a>
        </div>
        <div className={styles.card}>
          <a
            className={styles.cardLink}
            href='https://remix.run/'
            target='_blank'
            rel='noopener'
          >
            <Image
              className={styles.cardImage}
              src={remix}
              alt=''
              height={100}
              width={200}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
