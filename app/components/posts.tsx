import { useLoaderData } from '@remix-run/react';
import { Article } from '~/types/articles';

export function Posts() {
  const articles = useLoaderData();

  return (
    <div>
      <h2>Recent Posts</h2>
      <div>
        <ul>
          {articles.map((article: Article) => (
            <li key={article.title}>
              <a
                href={article.url}
                title={article.title}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={`/social_images/${article.social_image}`}
                  alt={article.title}
                  title={article.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
