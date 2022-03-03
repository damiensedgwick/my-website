import { createStitches, globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$poppins',
  },
});

export const {
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  theme: {
    fonts: {
      poppins: '"Poppins", sans-serif',
    },
  },
});
