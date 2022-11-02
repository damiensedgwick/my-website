import { Link, useLoaderData } from '@remix-run/react';
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
              <Link
                to={article.url}
                title={article.title}
                target='_blank'
                rel='noreferrer'
                reloadDocument
              >
                <img
                  src={`/social_images/${article.social_image}`}
                  alt={article.title}
                  title={article.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
