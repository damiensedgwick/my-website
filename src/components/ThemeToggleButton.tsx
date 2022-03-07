import { styled } from '../../stitches.config';

export const ThemeToggleButton = styled('button', {
  fontSize: '1rem',
  gridRow: '1 / span 1',
  gridColumn: '2 / span 1',
  border: 'none',
  background: 'none',
  maxWidth: '40px',
  maxHeight: '40px',
  margin: '0 auto',

  '@sm': {
    gridColumn: '3 / span 1',
  },

  '@md': {
    gridColumn: '4 / span 1',
  },

  '@lg': {
    gridColumn: '8 / span 1',
    margin: '0 0 0 auto',
  },

  '@xl': {
    gridColumn: '9 / span 1',
  },
});
