import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { SocialLinks } from './SocialLinks';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { styled } from '../../stitches.config';

const ContentWrapper = styled('div', {
  maxWidth: '100vw',
  gridColumn: '1 / span 3',
  gridRow: '2 / span 1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@sm': {
    gridColumn: '1 / span 5',
  },

  '@md': {
    gridColumn: '3 / span 3',
  },

  '@lg': {
    gridColumn: '2 / span 4',
    gridRow: '4 / span 1',
    alignItems: 'start',
  },
});

interface IntroProps {
  prefersDarkTheme: boolean;
}

export const Intro = ({ prefersDarkTheme }: IntroProps) => (
  <ContentWrapper>
    <Title theme={prefersDarkTheme ? 'dark' : 'light'}>Damien Sedgwick</Title>
    <Subtitle theme={prefersDarkTheme ? 'dark' : 'light'}>
      Frontend Developer
    </Subtitle>
    <SocialLinks prefersDarkTheme={prefersDarkTheme}>
      <li>
        <a href='https://linkedin.com/in/damiensedgwick/' title={'LinkedIn'}>
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
);
