import Image from 'next/image';
import { Article } from '@/app/types/article';

import styles from '@/app/styles/articles.module.css';

export const Articles = ({ articles }: { articles: Article[] }) => {
  return (
    <>
      {articles.map((article) => (
        <li key={article.id} className={styles.article}>
          <article>
            <Image
              className={styles.articleImage}
              src={article.social_image}
              alt={article.title}
              fill
            />
          </article>
        </li>
      ))}
    </>
  );
};
