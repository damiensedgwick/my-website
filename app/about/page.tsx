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
          I am a full-stack developer with a passion for learning and building
          new things that I ultimately end up abandoning for something new and
          shiny. At the moment I'm working on a few different projects and
          experimenting with new technologies.
        </p>
        <p className={styles.content}>
          I also enjoy contributing to open source software when I get some
          spare time, below is a small collection of the projects that I've
          contributed to so far and as you may have already seen, I also like to
          post articles on{' '}
          <a
            href='https://dev.to/'
            target='_blank'
            rel='noopener'
            title='Dev Community'
          >
            DEV Community
          </a>
          .
        </p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <a
            className={styles.cardLink}
            href='https://cli.github.com/'
            target='_blank'
            rel='noopener'
            title='GitHub CLI'
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
            title='Norfolk Developers'
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
            title='XState Catalogue'
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
            title='Remix'
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
