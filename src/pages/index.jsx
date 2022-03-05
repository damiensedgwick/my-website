import Head from 'next/head';
import Link from 'next/link';
import { styled, theme } from '../../stitches.config';

const Homepage = styled('div', {
  width: '100vw',
  height: '100vh',
  background: theme.colors.slate100,
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

const CircleContainer = styled('div', {
  margin: '0 -38px',
  overflowX: 'hidden',
  gridRow: '3 / span 4',
});

const Circle = styled('div', {
  width: '450px',
  height: '450px',
  borderRadius: '100%',
  background: theme.colors.primaryBackground,
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
  fontSize: '1rem',
});

const Role = styled('h1', {
  fontSize: '1.5rem',
});

const SocialLinks = styled('ul', {
  display: 'flex',

  li: {
    margin: '0.25rem',
    listStyle: 'none',
  },
});

const NavigationWrapper = styled('div', {
  width: '450px',
  height: '450px',
  background: theme.colors.primaryBackground,
  border: `1px solid inherit`,
  borderRadius: '9999px',
  gridRow: '3 / span 2',
});

export default function Home() {
  return (
    <Homepage id={'homepage'}>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>

      <Grid id={'grid'}>
        {/*<ContentWrapper>*/}
        {/*  <Name>Damien Sedgwick</Name>*/}
        {/*  <Role>Frontend Developer</Role>*/}
        {/*  <SocialLinks>*/}
        {/*    <li>*/}
        {/*      <a href='https://github.com/damiensedgwick'>Github</a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a href='https://linkedin.com/in/damiensedgwick/'>LinkedIn</a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a href='https://twitter.com/damiensedgwick'>Twitter</a>*/}
        {/*    </li>*/}
        {/*  </SocialLinks>*/}
        {/*</ContentWrapper>*/}

        <CircleContainer>
          <Circle />
        </CircleContainer>

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
