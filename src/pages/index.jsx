import Head from 'next/head';
import Link from 'next/link';
import { styled, theme } from '../../stitches.config';

const Homepage = styled('div', {
  width: '100vw',
  height: '100vh',
  background: theme.colors.slate100,
});

const Grid = styled('div', {
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateRows: 'repeat(5, 1fr)',
  gridGap: '0.2rem',
});

const ContentWrapper = styled('div', {
  gridRow: '1 / span 2',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

const Name = styled('p', {});

const Role = styled('h1', {});

const SocialLinks = styled('ul', {});

const NavigationWrapper = styled('div', {
  width: '500px',
  height: '500px',
  background: theme.colors.primaryBackground,
  border: `1px solid inherit`,
  borderRadius: '9999px',
  gridRow: '4 / span 2',
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
              <a href='https://github.com/damiensedgwick'>Github</a>
            </li>
            <li>
              <a href='https://linkedin.com/in/damiensedgwick/'>LinkedIn</a>
            </li>
            <li>
              <a href='https://twitter.com/damiensedgwick'>Twitter</a>
            </li>
          </SocialLinks>
        </ContentWrapper>

        <NavigationWrapper>
          <ul>
            <li>
              <Link href='#'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Work</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>OSS</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </NavigationWrapper>
      </Grid>
    </Homepage>
  );
}
