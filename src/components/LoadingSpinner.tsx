import { styled, theme } from '../../stitches.config';
import { keyframes } from '@stitches/react';

const spin = keyframes({
  from: { transform: 'rotate(0)' },
  to: { transform: 'rotate(360deg)' },
});

const Spinner = styled('div', {
  margin: 'auto',
  gridColumn: '2',
  gridRow: '3 / span 3',
  alignSelf: 'center',
  display: 'inline-block',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  animation: `${spin} 750ms ease-in-out infinite`,

  '@sm': {
    gridColumn: '3',
  },

  '@md': {
    gridColumn: '4',
  },

  '@lg': {
    gridColumn: '5',
  },

  '@xl': {
    gridColumn: '6',
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
