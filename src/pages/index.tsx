import { useState } from 'react';
import Head from 'next/head';
import { Homepage } from '../components/Homepage';
import { ThemeToggleButton } from '../components/ThemeToggleButton';
import { Intro } from '../components/Intro';
import { FeaturedPosts } from '../components/FeaturedPosts';
import { useInterval } from '../hooks/useInterval';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { getPosts } from '../scripts/fileSystem';
import { PostCard } from '../components/PostCard';

interface HomeProps {
  posts: any;
}

export default function Home({ posts }: HomeProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(false);

  useInterval(() => setIsLoading(false), 250);

  return (
    <Homepage theme={prefersDarkTheme ? 'dark' : 'light'}>
      <Head>
        <title>Damien Sedgwick | Frontend Developer</title>
        <meta
          name='description'
          content='One day I will have written something really meaningful to go here!'
        />
      </Head>

      {isLoading ? (
        <LoadingSpinner prefersDarkTheme={prefersDarkTheme} />
      ) : (
        <>
          <ThemeToggleButton
            onClick={() => setPrefersDarkTheme(!prefersDarkTheme)}
          >
            {prefersDarkTheme ? <span>☀️</span> : <span>😎</span>}
          </ThemeToggleButton>

          <Intro prefersDarkTheme={prefersDarkTheme} />

          <FeaturedPosts prefersDarkTheme={prefersDarkTheme}>
            {posts.map((post: any) => (
              <PostCard post={post} key={post.slug} />
            ))}
          </FeaturedPosts>
        </>
      )}
    </Homepage>
  );
}

export const getStaticProps = () => {
  const posts = getPosts(3);

  return {
    props: {
      posts,
    },
  };
};
