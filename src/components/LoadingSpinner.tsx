import { styled, theme } from '../../stitches.config';
import { keyframes } from '@stitches/react';

const Wrapper = styled('div', {
  gridRow: '3 / span 2',
  alignSelf: 'center',
  textAlign: 'center',

  '@lg': {
    gridRow: '3 / span 2',
    gridColumn: '3 / span 2',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

const spin = keyframes({
  to: { transform: 'rotate(360deg)' },
});

const Spinner = styled('div', {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  border: `4px solid ${theme.colors.darkBackground}`,
  borderRadius: '50%',
  borderTopColor: theme.colors.slate400,
  animation: `${spin} 750ms ease-in-out infinite`,
});

export const LoadingSpinner = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);
