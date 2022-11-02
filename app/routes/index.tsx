import { LinksFunction, MetaFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Post } from '~/types/post';
import { Header } from '~/components/header';
import { Posts } from '~/components/posts';

import stylesUrl from '~/styles/index.css';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export const meta: MetaFunction = () => ({
  title: 'Damien Sedgwick | Software Developer',
  description:
    'One day, I will have written, something really meaningful, and it will go here.',
});

export async function loader() {
  const res = await fetch(
    'https://dev.to/api/articles?username=damiensedgwick&per_page=3'
  );

  const posts = await res.json();

  return json(
    posts.map((post: Post) => {
      return {
        url: post.url,
        title: post.title,
        social_image: post.social_image,
      };
    })
  );
}

export default function Index() {
  const posts = useLoaderData();

  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  );
}