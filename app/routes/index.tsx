import { LinksFunction, MetaFunction, json } from '@remix-run/node';
import { Header } from '~/components/header';
import { Articles } from '~/components/articles';
import { Article } from '~/types/articles';

import stylesUrl from '~/styles/index.css';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export const meta: MetaFunction = () => ({
  title: 'Damien Sedgwick | Software Developer',
  description:
    'One day, I will have written, something really meaningful, and it will go here.',
});

const getArticleIdFromSocialImage = (url: string) => {
  const [, articleId] = url.split('/article/');
  return articleId;
};

export async function loader() {
  const res = await fetch(
    'https://dev.to/api/articles?username=damiensedgwick&per_page=3'
  );

  const articles = await res.json();

  return json(
    articles.map((article: Article) => {
      return {
        url: article.url,
        title: article.title,
        social_image: getArticleIdFromSocialImage(article.social_image),
      };
    })
  );
}

export default function Index() {
  return (
    <>
      <Header />
      <Articles />
    </>
  );
}
