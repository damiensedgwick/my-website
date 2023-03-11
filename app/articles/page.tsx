import { AppBar } from '../components/AppBar';
import { Articles } from '@/app/components/Articles';

import styles from '../styles/articlespage.module.css';

export default async function Posts() {
  const res = await fetch(
    'https://dev.to/api/articles?username=damiensedgwick'
  );

  const articles = await res.json();

  return (
    <div className={styles.grid}>
      <div className={styles.articlesWrapper}>
        <Articles articles={articles} />
      </div>
      <AppBar />
    </div>
  );
}
