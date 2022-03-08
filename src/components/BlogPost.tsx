import { FC } from 'react';
import Link from 'next/link';
import { styled, theme } from '../../stitches.config';

import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';

const Layout = styled('div', {
  padding: '3rem 0',
  margin: '0 auto',
  maxWidth: '992px',
});

const StyledAnchor = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.colors.secondary,

  span: {
    margin: '0 0.5rem',
  },
});

const HeaderLinks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: '2rem',
});

interface BlogPostLayoutProps {
  meta: {
    date: string;
    author: string;
    title: string;
    excerpt: string;
    featureImageUrl: string;
  };
}

export const BlogPostLayout: FC<BlogPostLayoutProps> = ({ meta }) => (
  <Layout>
    <HeaderLinks>
      <Link href={'/'} passHref={true}>
        <StyledAnchor>
          <IoArrowBackSharp /> <span>Home</span>
        </StyledAnchor>
      </Link>
      <Link href={'/posts'} passHref={true}>
        <StyledAnchor>
          <span>All Posts</span> <IoArrowForwardSharp />
        </StyledAnchor>
      </Link>
    </HeaderLinks>

    <h1>{meta.title}</h1>
  </Layout>
);
