import { AppBar } from '../components/AppBar';
import { Articles } from '@/app/components/Articles';
import { Article } from '@/app/types/article';

import styles from '../styles/articlespage.module.css';

export default async function Posts() {
  const res = await fetch(
    'https://dev.to/api/articles?username=damiensedgwick'
  );

  const articles: Article[] = await res.json();

  return (
    <div className={styles.grid}>
      <div className={styles.articlesContainer}>
        <Articles articles={articles} />
      </div>

      <AppBar />
    </div>
  );
}
