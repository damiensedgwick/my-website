import { FC } from 'react';
import Image from 'next/image';
import { styled, theme } from '../../stitches.config';

const Link = styled('a', {
  paddingRight: '0.5rem',
  display: 'flex',
  textDecoration: 'none',
  color: theme.colors.secondary,
  background: theme.colors.primary,
  minHeight: '90px',
  border: `solid 2px ${theme.colors.secondary}`,

  '@sm': {
    height: '105px',
  },

  '@md': {
    height: '110px',
  },

  '@lg': {
    height: '115px',
  },

  h2: {
    fontSize: '1rem',
    margin: '0.25rem 0',
  },

  p: {
    fontSize: '0.75rem',
  },
});

interface PostCardProps {
  post: any;
}

export const PostCard: FC<PostCardProps> = ({ post }) => (
  <Link href={'/posts/' + post.slug}>
    <Image src='/placeholder.png' alt={post.slug} width={150} height={150} />
    <div>
      <h2>{post.slug}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
    </div>
  </Link>
);
