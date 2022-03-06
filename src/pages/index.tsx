import { useState } from 'react';
import Head from 'next/head';
import { styled, theme } from '../../stitches.config';
import { useInterval } from '../hooks/useInterval';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { getPosts } from '../scripts/fileSystem';
import { Intro } from '../components/Intro';

const Homepage = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  padding: '1rem',
  gridTemplateRows: 'repeat(7, 1fr)',
  gridTemplateColumns: '1fr',
  gridGap: '0.25rem',

  '@lg': {
    gridTemplateRows: 'repeat(7, 1fr)',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridGap: '0.5rem',
  },

  variants: {
    theme: {
      light: {
        color: theme.colors.secondary,
        background: theme.colors.primary,
      },
      dark: {
        color: theme.colors.primary,
        background: theme.colors.secondary,
      },
    },
  },
});

const ThemeToggleButton = styled('button', {
  fontSize: '1rem',
  gridRow: '1 / span 1',
  gridColumn: '1 / span 1',
  border: 'none',
  background: 'none',
  maxWidth: '40px',
  maxHeight: '40px',
  margin: '0 0 0 auto',

  '@lg': {
    gridRow: '1',
    gridColumn: '6 / span 2',
    alignItems: 'start',
  },
});

const FeaturedPosts = styled('div', {
  maxWidth: '100vw',
  gridRow: '4 / span 3',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.colors.secondary,

  '@lg': {
    gridRow: '2 / span 5  ',
    gridColumn: '5 / span 2',
    alignItems: 'start',
  },
});

interface HomeProps {
  posts: any;
}

export default function Home({ posts }: HomeProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(false);

  useInterval(() => setIsLoading(false), 500);

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

          <FeaturedPosts>
            {posts.map((post: any) => (
              <a href={'/posts/' + post.slug} key={post.slug}>
                {post.slug}
              </a>
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
