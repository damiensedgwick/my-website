import { FC } from 'react';
import { styled, theme } from '../../stitches.config';

export const Links = styled('ul', {
  display: 'flex',

  li: {
    listStyle: 'none',
    margin: '0 0.5rem 0 0.5rem',

    '@lg': {
      margin: '0 0.75rem 0 0',
    },

    a: {
      fontSize: '1.5rem',
    },
  },

  variants: {
    theme: {
      light: {
        li: {
          a: {
            color: theme.colors.secondary,
            filter: theme.shadows.dropShadow,
          },
        },
      },
      dark: {
        li: {
          a: {
            color: theme.colors.primary,
            filter: theme.shadows.dropShadow,
          },
        },
      },
    },
  },
});

interface SocialLinksProps {
  prefersDarkTheme: boolean;
}

export const SocialLinks: FC<SocialLinksProps> = ({
  children,
  prefersDarkTheme,
}) => <Links theme={prefersDarkTheme ? 'dark' : 'light'}>{children}</Links>;
