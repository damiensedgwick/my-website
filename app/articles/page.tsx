import { AppBar } from '@/app/components/appbar/AppBar';
import { Articles } from '@/app/components/articles/Articles';
import { Article } from '@/app/types/article';

import styles from './page.module.css';

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
    </div>
  );
}
