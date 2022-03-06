import { useState } from 'react';
import Head from 'next/head';
import { styled, theme } from '../../stitches.config';
import { SocialLinks } from '../components/SocialLinks';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { useInterval } from '../hooks/useInterval';
import { LoadingSpinner } from '../components/LoadingSpinner';

const Homepage = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  padding: '1rem',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridTemplateColumns: '1fr',
  gridGap: '0.2rem',

  '@lg': {
    gridTemplateRows: 'repeat(6, 1fr)',
    gridTemplateColumns: 'repeat(6, 1fr)',
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

const ContentWrapper = styled('div', {
  maxWidth: '100vw',
  gridRow: '2 / span 1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@lg': {
    gridRow: '3 / span 2',
    gridColumn: '2 / span 3',
    alignItems: 'start',
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
    gridRow: '1 / span 1',
    gridColumn: '6 / span 1',
    alignItems: 'start',
  },
});

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(false);

  useInterval(() => setIsLoading(false), 1500);

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

          <ContentWrapper>
            <Title theme={prefersDarkTheme ? 'dark' : 'light'}>
              Damien Sedgwick
            </Title>
            <Subtitle theme={prefersDarkTheme ? 'dark' : 'light'}>
              Frontend Developer
            </Subtitle>
            <SocialLinks prefersDarkTheme={prefersDarkTheme}>
              <li>
                <a
                  href='https://linkedin.com/in/damiensedgwick/'
                  title={'LinkedIn'}
                >
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href='https://github.com/damiensedgwick/' title={'Github'}>
                  <IoLogoGithub />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/damiensedgwick' title={'Twitter'}>
                  <IoLogoTwitter />
                </a>
              </li>
            </SocialLinks>
          </ContentWrapper>
        </>
      )}
    </Homepage>
  );
}
