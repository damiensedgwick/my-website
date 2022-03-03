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
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1440px)',
  },
  theme: {
    colors: {
      slate: '#1E293B',
    },
    fonts: {
      poppins: '"Poppins", sans-serif',
    },
  },
});
