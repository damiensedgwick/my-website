import Image from 'next/image';

import styles from '@/app/styles/articles.module.css';

export type ArticlesType = {
  id: string;
  title: string;
  social_image: string;
};

export const Articles = ({ articles }: { articles: ArticlesType[] }) => {
  return (
    <ul className={styles.articleContainer}>
      {articles.map(
        (article: { id: string; title: string; social_image: string }) => (
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
        )
      )}
    </ul>
  );
};
