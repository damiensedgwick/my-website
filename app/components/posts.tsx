import { Post } from '~/types/post';

interface PostsProps {
  posts: Post[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <div>
      <h2>Recent Posts</h2>

      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.title}>
              <a href={post.url} target='_blank'>
                <img src={post.social_image} alt={post.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
