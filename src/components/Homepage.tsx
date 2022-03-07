import { styled, theme } from '../../stitches.config';

export const Homepage = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  padding: '1rem',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(7, 1fr)',
  overflow: 'hidden',

  '@sm': {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },

  '@md': {
    gridTemplateColumns: 'repeat(7, 1fr)',
  },

  '@lg': {
    gridTemplateColumns: 'repeat(9, 1fr)',
  },

  '@xl': {
    gridTemplateColumns: 'repeat(11, 1fr)',
  },

  variants: {
    theme: {
      light: {
        color: theme.colors.secondary,
        background: theme.colors.primary,
      },
      dark: {
        color: theme.colors.primary,
        background: theme.colors.secondary,
      },
    },
  },
});
