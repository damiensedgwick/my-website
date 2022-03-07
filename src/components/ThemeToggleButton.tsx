import { styled } from '../../stitches.config';

export const ThemeToggleButton = styled('button', {
  fontSize: '1rem',
  gridRow: '1 / span 1',
  gridColumn: '3 / span 1',
  border: 'none',
  background: 'none',
  maxWidth: '40px',
  maxHeight: '40px',
  margin: '0 0 0 auto',

  '@sm': {
    gridColumn: '5 / span 1',
  },

  '@md': {
    gridColumn: '7 / span 1',
  },

  '@lg': {
    gridColumn: '9 / span 1',
  },

  '@xl': {
    gridColumn: '11 / span 1',
  },
});
