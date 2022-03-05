import Head from 'next/head';
import Link from 'next/link';
import { styled, theme } from '../../stitches.config';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const Homepage = styled('div', {
  width: '100vw',
  height: '100vh',
  background: theme.colors.lightBackground,
});

const Grid = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridTemplateColumns: '1fr',
  gridGap: '0.2rem',
  overflowX: 'hidden',
});

const ContentWrapper = styled('div', {
  maxWidth: '100vw',
  gridRow: '1 / span 2',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

const Name = styled('p', {
  fontSize: '1.2rem',
  textTransform: 'uppercase',
});

const Role = styled('h1', {
  fontSize: '1.8rem',
  margin: '0.2rem 0',
  color: theme.colors.lightText,
  '-webkit-text-stroke-width': '1.25px',
  '-webkit-text-stroke-color': theme.colors.darkText,
  letterSpacing: '0.05rem',
  filter: theme.shadows.dropShadow,
});

const SocialLinks = styled('ul', {
  display: 'flex',

  li: {
    margin: '0.35rem',
    listStyle: 'none',

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

      <Grid>
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

        {/*<NavigationWrapper>*/}
        {/*  <ul>*/}
        {/*    <li>*/}
        {/*      <Link href='#'>*/}
        {/*        <a>About</a>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link href='#'>*/}
        {/*        <a>Work</a>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link href='#'>*/}
        {/*        <a>OSS</a>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link href='#'>*/}
        {/*        <a>Blog</a>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</NavigationWrapper>*/}
      </Grid>
    </Homepage>
  );
}
