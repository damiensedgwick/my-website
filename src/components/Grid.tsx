import { styled } from '@stitches/react';
import { theme } from '../../stitches.config';

export const Grid = styled('div', {
  width: '100vw',
  height: '100vh',
  background: theme.colors.slate,

  display: 'grid',
  gridGap: '1rem',

  '@sm': {
    background: 'red',
  },

  '@md': {
    background: 'yellow',
  },

  '@lg': {
    background: 'green',
  },

  '@xl': {
    background: 'blue',
  },
});
