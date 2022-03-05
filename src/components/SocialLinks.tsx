import { styled, theme } from '../../stitches.config';

export const SocialLinks = styled('ul', {
  display: 'flex',

  li: {
    listStyle: 'none',
    margin: '0 0.5rem 0 0.5rem',

    '@lg': {
      margin: '0 0.75rem 0 0',
    },

    a: {
      fontSize: '1.5rem',
      color: theme.colors.slate800,
      filter: theme.shadows.dropShadow,
    },
  },
});
