import { styled, theme } from '../../stitches.config';
import { keyframes } from '@stitches/react';

const spin = keyframes({
  to: { transform: 'rotate(360deg)' },
});

const Spinner = styled('div', {
  margin: 'auto',
  gridRow: '3 / span 2',
  alignSelf: 'center',

  '@lg': {
    gridRow: '3 / span 2',
    gridColumn: '3 / span 2',
    alignSelf: 'center',
    textAlign: 'center',
    display: 'inline-block',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    animation: `${spin} 750ms ease-in-out infinite`,
  },

  variants: {
    theme: {
      light: {
        background: theme.colors.primary,
        border: `4px solid ${theme.colors.secondary}`,
        borderTopColor: theme.colors.slate500,
      },
      dark: {
        background: theme.colors.secondary,
        border: `4px solid ${theme.colors.primary}`,
        borderTopColor: theme.colors.slate500,
      },
    },
  },
});

interface LoadingSpinnerProps {
  prefersDarkTheme: boolean;
}

export const LoadingSpinner = ({ prefersDarkTheme }: LoadingSpinnerProps) => (
  <Spinner theme={prefersDarkTheme ? 'dark' : 'light'} />
);
