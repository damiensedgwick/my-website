import { styled, theme } from '../../stitches.config';

export const Title = styled('p', {
  fontSize: '1.2rem',
  textTransform: 'uppercase',

  '@lg': {
    fontSize: '1.8rem',
  },

  variants: {
    theme: {
      light: {
        color: theme.colors.secondary,
      },
      dark: {
        color: theme.colors.primary,
      },
    },
  },
});
