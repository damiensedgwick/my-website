import { styled, theme } from '../../stitches.config';

export const Subtitle = styled('h1', {
  fontSize: '1.8rem',
  margin: '0.3rem 0',
  color: theme.colors.lightText,
  '-webkit-text-stroke-width': '1.25px',
  '-webkit-text-stroke-color': theme.colors.darkText,
  letterSpacing: '0.05rem',
  filter: theme.shadows.dropShadow,

  '@lg': {
    fontSize: '2.8rem',
  },
});
