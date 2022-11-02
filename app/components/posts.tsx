import { Link, useLoaderData } from '@remix-run/react';

// get the path from the URL, send it to your resource route.
// the resource route fetches the image and adds some cache headers

export async function loader({ params }: { params: { path: string } }) {
  const response = await fetch(params.path);

  return new Response(response.body, {
    headers: {
      ...response.headers,
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}

export function Posts() {
  const articles = useLoaderData();

  return (
    <div>
      <h2>Recent Posts</h2>
      <div>
        <ul>
          {articles.map((post: any) => (
            <li key={post.title}>
              <Link
                to={post.url}
                title={post.title}
                target='_blank'
                rel='noreferrer'
                reloadDocument
              >
                <img
                  src={post.social_image}
                  alt={post.title}
                  title={post.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
