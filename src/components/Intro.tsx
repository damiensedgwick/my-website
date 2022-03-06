import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { SocialLinks } from './SocialLinks';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { styled } from '../../stitches.config';

const ContentWrapper = styled('div', {
  maxWidth: '100vw',
  gridRow: '2 / span 1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@lg': {
    gridRow: '3 / span 3',
    gridColumn: '2 / span 3',
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
