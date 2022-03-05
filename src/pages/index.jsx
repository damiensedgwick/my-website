import Head from 'next/head';
import Link from 'next/link';
import { styled, theme } from '../../stitches.config';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoArrowForwardSharp,
} from 'react-icons/io5';

const Homepage = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridTemplateColumns: '1fr',
  gridGap: '0.2rem',
  background: theme.colors.lightBackground,

  '@lg': {
    gridTemplateRows: 'repeat(6, 1fr)',
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
});

const ContentWrapper = styled('div', {
  maxWidth: '100vw',
  gridRow: '1 / span 2',
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

const Name = styled('p', {
  fontSize: '1.2rem',
  textTransform: 'uppercase',

  '@lg': {
    fontSize: '1.8rem',
  },
});

const Role = styled('h1', {
  fontSize: '1.8rem',
  margin: '0.3rem 0',
  color: theme.colors.lightText,
  '-webkit-text-stroke-width': '1.25px',
  '-webkit-text-stroke-color': theme.colors.darkText,
  letterSpacing: '0.05rem',
  filter: theme.shadows.dropShadow,

  '@lg': {
    fontSize: '2.8rem',
  },
});

const SocialLinks = styled('ul', {
  display: 'flex',

  li: {
    listStyle: 'none',
    margin: '0 0.5rem 0 0.5rem',

    '@lg': {
      margin: '0 0.75rem 0 0',
    },

    a: {
      fontSize: '1.5rem',
      color: theme.colors.slate800,
      filter: theme.shadows.dropShadow,
    },
  },
});

export default function Home() {
  return (
    <Homepage>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>

      <ContentWrapper>
        <Name>Damien Sedgwick</Name>
        <Role>Frontend Developer</Role>
        <SocialLinks>
          <li>
            <a href='https://linkedin.com/in/damiensedgwick/'>
              <IoLogoLinkedin />
            </a>
          </li>
          <li>
            <a href='https://github.com/damiensedgwick/'>
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/damiensedgwick'>
              <IoLogoTwitter />
            </a>
          </li>
        </SocialLinks>
      </ContentWrapper>
    </Homepage>
  );
}
