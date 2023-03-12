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
      <h2 className={styles.articlesTitle}>All Articles</h2>
      <ul className={styles.articles}>
        <Articles articles={articles} />
      </ul>

      <AppBar />
    </div>
  );
}
