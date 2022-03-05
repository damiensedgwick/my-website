import Head from 'next/head';
import { styled, theme } from '../../stitches.config';
import { SocialLinks } from '../components/SocialLinks';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';

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

export default function Home() {
  return (
    <Homepage>
      <Head>
        <title>Damien Sedgwick | Frontend Developer</title>
        <meta
          name='description'
          content='One day I will have written something really meaningful to go here!'
        />
      </Head>

      <ContentWrapper>
        <Title>Damien Sedgwick</Title>
        <Subtitle>Frontend Developer</Subtitle>
        <SocialLinks>
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
    </Homepage>
  );
}
