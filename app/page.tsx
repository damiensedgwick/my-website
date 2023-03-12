import { AppBar } from './components/AppBar';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { Articles } from '@/app/components/Articles';
import { Article } from '@/app/types/article';

import styles from '@/app/styles/homepage.module.css';

export default async function Home() {
  const res = await fetch(
    'https://dev.to/api/articles?username=damiensedgwick&per_page=3'
  );

  const articles: Article[] = await res.json();

  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <h1 className={styles.title}>Damien Sedgwick</h1>
        <p className={styles.subtitle}>Fullstack Engineer</p>
        <ul className={styles.socialLinks}>
          <li className={styles.socialLinkItem}>
            <a
              className={styles.socialLink}
              href='https://github.com/damiensedgwick'
              target='_blank'
              rel='noopener'
              title="Damien's Github"
            >
              <RiGithubFill name="Damien's Github" />
            </a>
          </li>
          <li>
            <a
              className={styles.socialLink}
              href='https://www.linkedin.com/in/damiensedgwick/'
              target='_blank'
              rel='noopener'
              title="Damien's LinkedIn"
            >
              <RiLinkedinFill name="Damien's LinkedIn" />
            </a>
          </li>
        </ul>
      </header>

      <div className={styles.articlesContainer}>
        <h2>Recent Articles</h2>
        <ul className={styles.articles}>
          <Articles articles={articles} />
        </ul>
      </div>

      <AppBar />
    </div>
  );
}
