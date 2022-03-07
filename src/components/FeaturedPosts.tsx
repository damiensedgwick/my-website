import { FC } from 'react';
import { styled, theme } from '../../stitches.config';

const Posts = styled('div', {
  gridColumn: '1 / span 3',
  gridRow: '4 / span 3',

  '@sm': {
    gridColumn: '2 / span 3',
  },

  '@md': {
    gridColumn: '3 / span 3',
  },

  '@lg': {
    gridColumn: '6 / span 3',
    gridRow: '3 / span 3',
    alignItems: 'start',
  },

  '@xl': {
    gridColumn: '7 / span 3',
    gridRow: '3 / span 3',
    alignItems: 'start',
  },

  variants: {
    theme: {
      light: {
        background: theme.colors.secondary,
      },
      dark: {
        background: theme.colors.primary,
      },
    },
  },
});

interface FeaturedPostsProps {
  prefersDarkTheme: boolean;
}

export const FeaturedPosts: FC<FeaturedPostsProps> = ({
  children,
  prefersDarkTheme,
}) => <Posts theme={prefersDarkTheme ? 'dark' : 'light'}>{children}</Posts>;
