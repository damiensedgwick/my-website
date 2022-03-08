import { json, Link, useLoaderData } from 'remix';

import { getPosts } from '~/post';
import type { Post } from '~/post';

export const loader = () => {
  return json(getPosts());
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
