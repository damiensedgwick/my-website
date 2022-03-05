import { createStitches, globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    padding: '0',
    margin: '0',
    // boxSizing: 'border-box',
  },

  'html, body': {
    fontSize: '1.2rem',
    fontFamily: '$roboto',
  },
});

export const { styled, getCssText, theme } = createStitches({
  theme: {
    colors: {
      slate50: '#F8FAFC',
      slate100: '#F1F5F9',
      slate200: '#E2E8F0',
      slate300: '#CBD5E1',
      slate400: '#94A3B8',
      slate500: '#64748B',
      slate600: '#475569',
      slate700: '#334155',
      slate800: '#1E293B',
      slate900: '#0F172A',

      primaryColor: '$slate100',
      primaryBackground: '$slate900',
    },
    fonts: {
      roboto: 'roboto',
    },
    fontWeights: {
      1: '300',
      2: '400',
      3: '500',
      5: '700',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
});
