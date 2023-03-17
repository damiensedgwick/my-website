import Image from 'next/image';
import { Article } from '@/app/types/article';

import styles from '@/app/components/articles/articles.module.css';

export const Articles = ({ articles }: { articles: Article[] }) => {
  return (
    <>
      {articles.map((article) => (
        <li key={article.id} className={styles.article}>
          <a
            href={article.url}
            title={article.title}
            target='_blank'
            rel='noopener'
          >
            <Image
              className={styles.articleImage}
              src={article.social_image}
              alt={article.title}
              fill
            />
          </a>
        </li>
      ))}
    </>
  );
};
